import { NavLink } from "react-router-dom";
import { NavFooterList, NavFooterItem } from "./NavFooter.styled";


export default function NavFooter() {
  
  return (<NavFooterList>
      <NavFooterItem>
        <NavLink to="/search/ingredients">Ingredients</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem>
        <NavLink to="/add">Add recipes</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem>
        <NavLink to="/my">My recipes</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem>
        <NavLink to="/favorite">Favorite</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem>
        <NavLink to="/shopping-list">Shopping list</NavLink>      
      </NavFooterItem> 
    </NavFooterList>);
};