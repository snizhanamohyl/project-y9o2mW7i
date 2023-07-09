import { Section, TextArea } from './RecipePreparationFields.styled';

export default function RecipePreparationFields() {
  return (
    <Section>
      <h1>Recipe Preparation</h1>
      <TextArea placeholder="Enter recipe"></TextArea>
    </Section>
  );
}
