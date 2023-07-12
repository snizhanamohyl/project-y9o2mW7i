import sprite from '../../assets/sprite.svg';
import { SocialNetworkList, SocialNetworkItem } from "./SocialNetworkFooter.styled";


export default function SocialNetworkFooter() {
 
    return (<SocialNetworkList>
        <SocialNetworkItem>
        <a href='https://www.facebook.com/' target='_blanck'>  
         <svg width={20} height={20}>
        <use href={`${sprite}#icon-facebook`}></use>    
            </svg>
        </a>     
        </SocialNetworkItem>
 
        <SocialNetworkItem>
         <a href='https://www.youtube.com/' target='_blanck'>  
        <svg width={20} height={20}>
        <use href={`${sprite}#icon-youtube`}></use>    
        </svg>
        </a>          
        </SocialNetworkItem>

        <SocialNetworkItem>
        <a href='https://twitter.com/' target='_blanck'>   
         <svg width={20} height={20}>
        <use href={`${sprite}#icon-twitter`}></use>    
        </svg>
        </a>         
        </SocialNetworkItem>

        <SocialNetworkItem>
        <a href='https://www.instagram.com/' target='_blanck'> 
         <svg width={20} height={20}>
        <use href={`${sprite}#icon-instagram`}></use>    
        </svg>
        </a>     
        </SocialNetworkItem>
    </SocialNetworkList>)
};
