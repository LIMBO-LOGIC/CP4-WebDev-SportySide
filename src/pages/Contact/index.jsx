const Contact = () => {
  return (
    <MainLogin>
      <LeftLogin>
        <Heading>
          Faça login <br />E jogue nosso quiz
        </Heading>
        <Image src="assets/img/vehicle-sale-animate.svg" alt="Animação" />
      </LeftLogin>
      <RightLogin>
        <CardUsuario>
          <CardHeading>Contato</CardHeading>
          <Textfield>
            <Label htmlFor="usuario">Usuário</Label>
            <Input
              type="text"
              name="usuario"
              placeholder="Usuário"
              id="usuario"
            />
          </Textfield>
          <Textfield>
            <Label htmlFor="senha">Senha</Label>
            <Input
              type="password"
              name="senha"
              placeholder="Senha"
              id="senha"
            />
          </Textfield>
          <Button onClick={validar}>Login</Button>
        </CardUsuario>
      </RightLogin>
    </MainLogin>
  );
};
export default Contact;
