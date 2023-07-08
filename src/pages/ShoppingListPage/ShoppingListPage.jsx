import {
  ShoppingListHeader,
  ShoppingListItem,
  OptionContainer,
  OptionNameContainer,
  ShoppingList,
  NumberContainer,
} from './ShoppingListPage.styled';

export default function ShoppingListPage() {
  return (
    <div>
      <ShoppingListHeader>
        <p>Products</p>
        <OptionNameContainer>
          <span>Number</span>
          <span>Remove</span>
        </OptionNameContainer>
      </ShoppingListHeader>
      <ShoppingList>
        <ShoppingListItem>
          <p>Salmon</p>
          <OptionContainer>
            <NumberContainer>5</NumberContainer>
            <button>X</button>
          </OptionContainer>
        </ShoppingListItem>
        <ShoppingListItem>
          <p>Cucumber</p>
          <OptionContainer>
            <NumberContainer>400g</NumberContainer>
            <button>X</button>
          </OptionContainer>
        </ShoppingListItem>
        <ShoppingListItem>
          <p>Lime</p>
          <OptionContainer>
            <NumberContainer>1</NumberContainer>
            <button>X</button>
          </OptionContainer>
        </ShoppingListItem>
      </ShoppingList>
    </div>
  );
}
