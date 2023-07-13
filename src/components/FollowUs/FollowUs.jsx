import { Wrapper, Title, Socials, Item } from './FollowUs.styled';
import Sprite from 'assets/sprite.svg';

export default function FollowUs({ isFooter }) {
  return (
    <Wrapper>
      {!isFooter && <Title>Follow us</Title>}
      <Socials>
        <Item>
          <a
            href="https://www.facebook.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <svg width={26} height={26}>
              <use href={Sprite + '#icon-facebook'}></use>
            </svg>
          </a>
        </Item>
        <Item>
          <a
            href="https://www.youtube.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <svg width={28} height={22}>
              <use href={Sprite + '#icon-youtube'}></use>
            </svg>
          </a>
        </Item>
        <Item>
          <a
            href="https://twitter.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <svg width={25} height={22}>
              <use href={Sprite + '#icon-twitter'}></use>
            </svg>
          </a>
        </Item>
        <Item>
          <a
            href="https://www.instagram.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <svg width={24} height={24}>
              <use href={Sprite + '#icon-instagram'}></use>
            </svg>
          </a>
        </Item>
      </Socials>
    </Wrapper>
  );
}
