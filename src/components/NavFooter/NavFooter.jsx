import { NavLink } from "react-router-dom";
import { NavFooterList, NavFooterItem } from "./NavFooter.styled";


export default function NavFooter() {

    const onClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

  
  return (<NavFooterList>
      <NavFooterItem onClick={onClick}>
        <NavLink to="/search?type=ingredients">Ingredients</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem onClick={onClick}>
        <NavLink to="/add">Add recipes</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem onClick={onClick}>
        <NavLink to="/my">My recipes</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem onClick={onClick}>
        <NavLink to="/favorite">Favorite</NavLink>      
      </NavFooterItem>
    
      <NavFooterItem onClick={onClick}>
        <NavLink to="/shopping-list">Shopping list</NavLink>      
      </NavFooterItem> 
    </NavFooterList>);
};