import SectionTitle from 'components/SectionTitle';
import { Section, TextArea } from './RecipePreparationFields.styled';

export default function RecipePreparationFields() {
  return (
    <Section>
      <SectionTitle>Recipe Preparation</SectionTitle>
      <TextArea placeholder="Enter recipe"></TextArea>
    </Section>
  );
}
