import { Container } from 'components/PageLoader/PageLoader.styled';
import { Watch } from 'react-loader-spinner';

export default function PageLoader() {
  return (
    <Container>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="var(--accent-green)"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
}
