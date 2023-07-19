import { nanoid } from 'nanoid';
import {
  ImageIngredient,
  Instruction,
  InstructionItem,
  RecipeInstruction,
  Title,
} from './Instruction.styled';
import Video from '../Video/Video';

export default function RecipePageInstruction({ recipe }) {
  const { instructions, preview, youtube, title } = recipe;


  const structureTexts = instructions?.split(/\r\n\r\n|\r\n|\n|\n\n\n|\n\n\|/g);
  const link = youtube?.slice(32);

  return (
    <RecipeInstruction>
      <div>
        <Title>Recipe Preparation</Title>
        <Instruction>
          {structureTexts?.map(structureText => (
            <InstructionItem key={nanoid()}>{structureText}</InstructionItem>
          ))}
        </Instruction>
      </div>

      {!link ? (
        <ImageIngredient alt={title} src={preview} />
      ) : (
        <Video link={link} />
      )}
    </RecipeInstruction>
  );
}
