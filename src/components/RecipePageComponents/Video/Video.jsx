import { Container } from './Video.styled';

export default function Video({ link }) {
  return (
    <Container>
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${link}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
}
