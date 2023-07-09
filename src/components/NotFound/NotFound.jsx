import deskErr from '../../images/notFoundPage/err.png'
import deskErr2x from '../../images/notFoundPage/err@2x.png';
import tabErr from '../../images/notFoundPage/errTab.png';
import tabErr2x from '../../images/notFoundPage/errTab@2x.png';
import mobErr from '../../images/notFoundPage/errMob.png';
import mobErr2x from '../../images/notFoundPage/errMob@2x.png';
import { ErrorWrapper, ErrorThumb, ErrorPic, ErrorTitle, ErrorText } from './NotFound.styled'

export default function NotFound() {
    return (
      <ErrorWrapper>
        <ErrorThumb>
          <ErrorPic>
            <source srcset="deskErr 1x, deskErr2x 2x" media="(min-width: 1440px)"/>
            <source
              srcset="./images/errTab.jpg 1x, ./images/errTab@2x.jpg 2x"
              media="(min-width: 768px)"
            />
            <img
              srcset="./images/errMob 1x, ./images/ErrMob@2x.jpg 2x"
              src="./images/errMob.jpg"
              alt="Error"
            />
          </ErrorPic>
          <ErrorTitle>We are sorry,</ErrorTitle>
          <ErrorText>
            but the page you were looking for can’t be found..
          </ErrorText>
        </ErrorThumb>
      </ErrorWrapper>
    );
}