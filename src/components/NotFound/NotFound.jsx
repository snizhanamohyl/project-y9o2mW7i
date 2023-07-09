export default function NotFound() {
    return (
      <ErrorWrapper>
        <ErrorThumb>
          <ErrorPic>
            <source
              srcset="./images/err.jpg 1x,./images/err@2x.jpg 2x" media="(min-width: 1440px)"/>
            <source
              srcset="./images/errTab.jpg 1x, ./images/errTab@2x.jpg 2x" media="(min-width: 768px)"/>
            <img
              srcset="./images/errMob 1x, ./images/ErrMob@2x.jpg 2x" src="./images/errMob.jpg" alt="Error"/>
          </ErrorPic>
          <ErrorTitle>We are sorry,</ErrorTitle>
          <ErrorText>
            but the page you were looking for can’t be found..
          </ErrorText>
        </ErrorThumb>
      </ErrorWrapper>
    );
}