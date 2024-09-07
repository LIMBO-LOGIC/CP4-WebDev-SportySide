import {
  Button,
  CardHeading,
  CardUsuario,
  Heading,
  Input,
  Label,
  LeftContact,
  MainContact,
  RightContact,
  Textfield,
} from "./Styles";
import imageSvg from '../../assets/contact.svg'

const Contact = () => {
  return (
    <MainContact>
      <LeftContact>
        <Heading>
          Entre em contato <br />conosco
        </Heading>
        <img src={imageSvg} alt="Animação" />
      </LeftContact>
      <RightContact>
        <CardUsuario>
          <CardHeading>Contato</CardHeading>
          <Textfield>
            <Label htmlFor="nomeUsuario">Seu nome</Label>
            <Input
              type="text"
              name="nomeUsuario"
              placeholder="Nome"
              id="nomeUsuario"
            />
          </Textfield>
          <Textfield>
            <Label htmlFor="email">Seu email</Label>
            <Input
              type="password"
              name="email"
              placeholder="E-mail"
              id="email"
            />
          </Textfield>
          <Textfield>
            <Label htmlFor="telefone">Seu telefone</Label>
            <Input
              type="password"
              name="telefone"
              placeholder="Telefone"
              id="telefone"
            />
          </Textfield>
          <Button onClick={""}>Enviar</Button>
        </CardUsuario>
      </RightContact>
    </MainContact>
  );
};
export default Contact;
