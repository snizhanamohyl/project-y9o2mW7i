export default function NotFound() {
    return (
      <ErrorWrapper>
        <ErrorThumb>
          <img src={error} alt="error" className={style.errorImage} />
          <ErrorTitle>We are sorry,</ErrorTitle>
          <ErrorText>but the page you were looking for can’t be found..</ErrorText>
        </ErrorThumb>
      </ErrorWrapper>
    );
}