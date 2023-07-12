import { Container } from './Video.styled';

export default function Video() {
  return (
    <Container>
      <div>
        <iframe
          src="https://www.youtube.com/embed/e52IL8zYmaE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}
