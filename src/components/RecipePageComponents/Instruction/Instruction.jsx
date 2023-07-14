import { nanoid } from 'nanoid';
import {
  Instruction,
  InstructionItem,
  RecipeInstruction,
  Title,
} from './Instruction.styled';
import Video from '../Video/Video';

export default function RecipePageInstruction({ recipe }) {
  const { instructions, thumb, youtube } = recipe;
  console.log(instructions);
  const structureTexts = instructions?.split(/\r\n\r\n|\r\n|\n/g);
  const link = youtube?.slice(32);
  console.log(link);

  return (
    <RecipeInstruction>
      <div>
        <Title>Recipe Preparation</Title>
        <Instruction>
          {structureTexts?.map(structureText => (
            <InstructionItem key={nanoid}>{structureText}</InstructionItem>
          ))}
        </Instruction>
      </div>
      <Video link={link} />
    </RecipeInstruction>
  );
}
