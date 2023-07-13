import sprite from '../../assets/sprite.svg';
import { SocialNetworkList, SocialNetworkItem ,SocialNetworIcon} from "./SocialNetworkFooter.styled";


export default function SocialNetworkFooter() {
    return (<SocialNetworkList>
        <SocialNetworkItem>
            <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer nofollow">  
                <SocialNetworIcon width={20} height={20}>
                    <use href={`${sprite}#icon-facebook`}></use>    
                </SocialNetworIcon>
            </a>     
        </SocialNetworkItem>
 
        <SocialNetworkItem>
            <a href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer nofollow">  
                <SocialNetworIcon width={20} height={20}>
                    <use href={`${sprite}#icon-youtube`}></use>    
                </SocialNetworIcon>
            </a>          
        </SocialNetworkItem>

        <SocialNetworkItem>
            <a href='https://twitter.com/' target='_blank' rel="noopener noreferrer nofollow">   
                <SocialNetworIcon width={20} height={20}>
                    <use href={`${sprite}#icon-twitter`}></use>    
                </SocialNetworIcon>
            </a>         
        </SocialNetworkItem>

        <SocialNetworkItem>
            <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer nofollow"> 
                <SocialNetworIcon width={20} height={20}>
                    <use href={`${sprite}#icon-instagram`}></use>    
                </SocialNetworIcon>
            </a>     
        </SocialNetworkItem>
    </SocialNetworkList>)
};
