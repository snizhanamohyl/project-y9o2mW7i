import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { getAllRecipes } from "../../utils/getAllRecipes";

// justify-content: space-between;



const RecipeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;


   @media (min-width: 768px) {
     flex-direction: row;
    justify-content: space-between;
   }

   @media (min-width: 1440px) {
     justify-content: center;
   }  
`;


const RecipeCard = styled.li`
    margin-bottom: 32px; 

    @media (min-width: 768px) {
      height:485px;
      margin-bottom: 50px; 
   }
    @media (min-width: 768px) {
      margin-bottom: 50px; 
   }
`;


const RecipeTitle = styled.h2`
  margin-top:0;     
  margin-bottom: 32px;
  font-size: 28px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 28px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
   }
  
`;

const ImgBox = styled.div`
   position:relative;
   width: 343px;
   height: 323px;
   background-color: grey;
   border-radius: 8px;
`;

const RecipeImg = styled.img`
     width: 343px;
     height: 323px;
    
  @media (min-width: 768px) {
     width: 336px;
     height: 323px;
   }

  @media screen and (min-width: 1440px) {
     width: 300px;
  }
  
`;

const Recip = styled.p`
    position: absolute;
    bottom: 26px;
    left: 18px;

    width: 307px;
    height: 52px;
    padding-top: 16px;
    padding-bottom:16px;
    padding-left: 16px;
    margin-top:0;
    margin-bottom:0;
    background-color: white;
    border-radius: 8px;

    font-family: Poppins;
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
`;

const SeeAllLink = styled.p`
    text-align: center;
    margin-left: auto;
    margin-top:24px;
    width: 94px;
    height: 38px;
    padding: 10px 24px;
    background-color: #8AA936;
    border-radius: 6px;
    font-family: Poppins;
    color: #FAFAFA;

  @media (min-width: 768px) {
     margin-top:40px;
   }
`;



export default function PreviewCategories() {
    const [recipes, setRecipes] = useState([]);
     
    useEffect(() => {
        getAllRecipes().then(resp => setRecipes(resp));

    }, []);
  
   
   
  

    return (
        <>
        <RecipeList>
            {recipes.map(recip =>
              <RecipeCard key={recip.id}>    
              <RecipeTitle>{recip.title}</RecipeTitle>
              <ImgBox>        
              <RecipeImg src="#" alt="img" />
              <Recip>{recip.dish}</Recip>             
               </ImgBox>
               <Link to={`#`}>     
               <SeeAllLink>See all</SeeAllLink>
               </Link>         
         </RecipeCard>)}        
        </RecipeList>
        </> 
   )
};
