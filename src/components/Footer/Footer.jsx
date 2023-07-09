import { Link } from "react-router-dom";


export default function Footer() {


    return (<>
        <Link to="/">So Yummy</Link>
        <br/>
        <Link to="/ingredients">Ingredients</Link>
        <br/>
        <Link to="/recipes">Add recipes</Link>
        <br/>
        <Link to="recipes">My recipes</Link>
        <br/>
        <Link to="favorite">Favorite</Link>
        <br/>
        <Link to="shopping">Shopping list</Link>
        <br/>
        <Link>Enter your email address</Link>
        <br/>
        <button>Subscribe</button>
        <p>© 2023 All Rights Reserved.</p>
        <p>Terms of Service</p>
    </>)
}
