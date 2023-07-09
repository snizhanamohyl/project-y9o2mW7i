export default function NotFound() {
    return (
      <ErrorWrapper>
        <ErrorThumb>
          <ErrorPic>
            <source
              srcset="./images/igor-desktop.jpg 1x,./images/igor-desktop@2x.jpg 2x" media="(min-width: 1440px)"/>
            <source
              srcset="./images/igor-tablet.jpg 1x, ./images/igor-tablet@2x.jpg 2x" media="(min-width: 768px)"/>
            <img
              srcset="./images/igor-mobile 1x, ./images/igor-mobile@2x.jpg 2x" src="./images/igor-mobile.jpg" alt="Error"/>
          </ErrorPic>
          <ErrorTitle>We are sorry,</ErrorTitle>
          <ErrorText>
            but the page you were looking for can’t be found..
          </ErrorText>
        </ErrorThumb>
      </ErrorWrapper>
    );
}