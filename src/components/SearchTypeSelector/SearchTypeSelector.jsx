import Select from 'components/Select/Select';
import { Wrapper, Label } from './SearchTypeSelector.styled';

export default function SearchTypeSelector({ onChange, type }) {
  const options = [
    { id: 1, label: 'Title', value: 'query' },
    { id: 2, label: 'Ingredients', value: 'ingredients' },
  ];
  const currentType = options.find(({ value }) => value === type);

  return (
    <Wrapper>
      <Label>Search by:</Label>
      <Select
        options={options}
        currentOption={currentType?.value}
        onSelect={onChange}
      />
    </Wrapper>
  );
}
