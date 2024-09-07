import { AboutStyled } from "./Styles.js";
import imageAbout from "./imageFitness.svg";

function About() {
  return (
    // <Container>
    //   <Image src={sobreImg} alt='Engenharia de Software' />
    //   <Text>
    //     O curso de Engenharia de Software tem como objetivo capacitar
    //     profissionais para o desenvolvimento de soluções tecnológicas, focando
    //     em boas práticas, design patterns, e na criação de sistemas robustos e
    //     escaláveis.
    //   </Text>
    //   <Text>
    //     Ao longo da graduação, os alunos são expostos a uma vasta gama de
    //     tecnologias, trabalhando com projetos práticos que envolvem desde a
    //     concepção de software até a sua entrega em ambientes de produção.
    //   </Text>
    // </Container>

    <AboutStyled>
      <img src={imageAbout} alt="Imagem referênciando o texto" />
      <div className="boxText">
        <h1>SportySide</h1>
        <p>
          A SportySide é uma loja esportiva fictícia que nasceu com a missão de
          proporcionar o melhor em artigos e equipamentos para atletas de todos
          os níveis, desde iniciantes até profissionais. Fundada por um grupo de
          apaixonados por esportes, a loja rapidamente se tornou referência no
          mercado pela sua ampla variedade de produtos, qualidade impecável e
          atendimento especializado. Cada detalhe é pensado para garantir que
          seus clientes encontrem exatamente o que precisam, seja para futebol,
          basquete, vôlei, natação ou outras modalidades.
        </p>
      </div>
    </AboutStyled>
  );
}

export default About;
