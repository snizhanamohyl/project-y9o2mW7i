import Select from 'components/Select/Select';
import { Wrapper, Label } from './SearchTypeSelector.styled';

export default function SearchTypeSelector({ onChange, type }) {
  const options = [
    { id: 1, label: 'Title', value: 'query' },
    { id: 2, label: 'Ingredients', value: 'ingredient' },
  ];
  const currentType = options.find(({ value }) => value === type);

  return (
    <Wrapper>
      <Label>Search by:</Label>
      <Select
        options={options}
        currentOption={currentType?.label ?? 'Title'}
        onSelect={onChange}
      />
    </Wrapper>
  );
}
