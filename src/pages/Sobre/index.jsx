import sobreImg from './fiap-sobre.jpeg';
import { Container, Image, Text } from './Styles.js';

function Sobre() {
  return (
    <Container>
      <Image src={sobreImg} alt='Engenharia de Software' />
      <Text>
        O curso de Engenharia de Software tem como objetivo capacitar
        profissionais para o desenvolvimento de soluções tecnológicas, focando
        em boas práticas, design patterns, e na criação de sistemas robustos e
        escaláveis.
      </Text>
      <Text>
        Ao longo da graduação, os alunos são expostos a uma vasta gama de
        tecnologias, trabalhando com projetos práticos que envolvem desde a
        concepção de software até a sua entrega em ambientes de produção.
      </Text>
    </Container>
  );
}

export default Sobre;
