import deskErr from '../../images/notFoundPage/err.png';
import deskErr2x from '../../images/notFoundPage/err@2x.png';
import tabErr from '../../images/notFoundPage/errTab.png';
import tabErr2x from '../../images/notFoundPage/errTab@2x.png';
import mobErr from '../../images/notFoundPage/errMob.png';
import mobErr2x from '../../images/notFoundPage/errMob@2x.png';
import {
  // ErrorSection,
  ErrorWrapper,
  ErrorPicThumb,
  ErrorTitle,
  ErrorText,
} from './NotFound.styled';
// import { useLocation } from 'react-router-dom';

export default function NotFound({message}) {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const message = searchParams.get('message') || null;

  return (
    // <ErrorSection>
    <ErrorWrapper>
      <ErrorPicThumb>
        <picture>
          <source
            srcSet={`${deskErr} 1x, ${deskErr2x} 2x`}
            media="(min-width: 1440px)"
          />
          <source
            srcSet={`${tabErr} 1x, ${tabErr2x} 2x`}
            media="(min-width: 768px)"
          />
          <img
            srcSet={`${mobErr} 1x, ${mobErr2x} 2x`}
            src="./images/errMob.jpg"
            alt="Error"
          />
        </picture>
      </ErrorPicThumb>
      <ErrorTitle>We are sorry,</ErrorTitle>
      <ErrorText>
        {message}
      </ErrorText>
    </ErrorWrapper>
    // </ErrorSection>
  );
}

// || 'but the page you were looking for can’t be found..'
