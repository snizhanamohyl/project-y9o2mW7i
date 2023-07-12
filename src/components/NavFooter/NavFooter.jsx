import { NavLink } from "react-router-dom";
import { NavFooterList, NavFooterItem } from "./NavFooter.styled";


export default function NavFooter() {
  
    return (<NavFooterList>
      <NavFooterItem>
      <NavLink to="/">Ingredients</NavLink>      
      </NavFooterItem>
      <NavFooterItem>
      <NavLink to="/">Add recipes</NavLink>      
      </NavFooterItem>
      <NavFooterItem>
      <NavLink to="/">My recipes</NavLink>      
      </NavFooterItem>
      <NavFooterItem>
      <NavLink to="/">Favorite</NavLink>      
      </NavFooterItem>
      <NavFooterItem>
      <NavLink to="/">Shopping list</NavLink>      
      </NavFooterItem>  
    </NavFooterList>);
};