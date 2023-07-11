import { Link } from "react-router-dom";
import { SeeAllLink } from "./SeeAllBtn.styled";


export default function SeeAllBtn() {
   
    return (<Link to={"#"}>
        <SeeAllLink>See all</SeeAllLink>
    </Link>)
};