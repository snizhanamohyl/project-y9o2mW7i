import { Wrapper, Title, Socials } from './FollowUs.styled';
import Sprite from 'assets/sprite.svg';

export default function FollowUs({ isFooter }) {
  const youtube = {
    width: isFooter ? 20 : 28,
    height: isFooter ? 15 : 22,
  }
  const twitter = {
    width: isFooter ? 20 : 28,
    height: isFooter ? 16 : 22,
  }
  const facebookSize = isFooter ? 20 : 26;
  const instagramSize = isFooter ? 20 : 24;
    
  return (
    <Wrapper  $isFooter={isFooter} >
      {!isFooter && <Title>Follow us</Title>}
      <Socials $isFooter={isFooter}>
        <li>
          <a
            href="https://www.facebook.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <svg width={facebookSize} height={facebookSize}>
              <use href={Sprite + '#icon-facebook'}></use>
            </svg> 
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <svg width={youtube.width} height={youtube.height}>
              <use href={Sprite + '#icon-youtube'}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <svg width={twitter.width} height={twitter.height}>
              <use href={Sprite + '#icon-twitter'}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <svg width={instagramSize} height={instagramSize}>
              <use href={Sprite + '#icon-instagram'}></use>
            </svg>
          </a>
        </li>
      </Socials>
    </Wrapper>
  );
}
