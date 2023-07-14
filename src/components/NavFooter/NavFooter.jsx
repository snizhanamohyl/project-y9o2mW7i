import { NavLink } from "react-router-dom";
import { NavFooterList, NavFooterItem } from "./NavFooter.styled";


export default function NavFooter() {
  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"}) 
  }
  
  return (<NavFooterList>
      <NavFooterItem>
        <NavLink to="/search/ingredients" onClick={onClick}>Ingredients</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem>
        <NavLink to="/add" onClick={onClick}>Add recipes</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem>
        <NavLink to="/my" onClick={onClick}>My recipes</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem>
        <NavLink to="/favorite" onClick={onClick}>Favorite</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem>
        <NavLink to="/shopping-list" onClick={onClick}>Shopping list</NavLink>      
      </NavFooterItem> 
    </NavFooterList>);
};