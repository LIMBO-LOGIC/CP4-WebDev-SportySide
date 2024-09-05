import notFoundImage from './404.png';
import { Container, Image, Title, Message } from './Styles.js';

function NotFound() {
  return (
    <Container>
      <Image src={notFoundImage} alt='404 Not Found' />
      <Title>Oops! Página Não Encontrada</Title>
      <Message>
        Parece que a página que você está procurando não existe ou foi removida.
        Volte para a <a href='/'>página inicial</a>.
      </Message>
    </Container>
  );
}

export default NotFound;
