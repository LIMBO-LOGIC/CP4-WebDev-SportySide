import { useState } from "react";
import { ContainerHeaderStyled, HeaderMobileStyled } from "./Styles";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import logo from "../../assets/logo.svg";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function HeaderMobile() {
  const [toggled, setToggled] = useState(false);

  return (
    <ContainerHeaderStyled>
      <Sidebar
        className="containerHeader"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <Menu>
          <MenuItem>
            <img className="imgMenu" src={logo} alt="Lo go da empresa" />
          </MenuItem>
          <div className="navegation" onClick={() => setToggled(!toggled)}>
            <MenuItem className="itemMenu">
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem className="itemMenu">
              <Link to="/sobre">Sobre</Link>
            </MenuItem>
            <MenuItem className="itemMenu">
              <Link to="/produtos">Produtos</Link>
            </MenuItem>
            <MenuItem className="itemMenu">
              <Link to="/contato">Contato</Link>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>

      <HeaderMobileStyled>
        <img src={logo} alt="Logo da empresa" />
        <SlMenu className="iconMenu" onClick={() => setToggled(!toggled)} />
      </HeaderMobileStyled>
    </ContainerHeaderStyled>
  );
}
