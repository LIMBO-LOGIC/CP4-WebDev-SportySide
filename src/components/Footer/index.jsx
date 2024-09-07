import { Link } from "react-router-dom";
import { FooterStyled } from "./Styles";
import logo from "../../assets/logo.svg";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="navFooter">
        <nav>
          <Link to="/" className="itemFooter">
            Home
          </Link>
          <Link to="/sobre" className="itemFooter">
            Sobre
          </Link>
          <Link to="/produtos" className="itemFooter">
            Produtos
          </Link>
          <Link to="/contato" className="itemFooter">
            Contato
          </Link>
        </nav>
        <div className="socialMedia">
          <a href="">
            <FaFacebookSquare />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaYoutube />
          </a>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p> &copy; 2024 SportySide. Todos os direitos reservados.</p>
        <img src={logo} alt="Logo empresa" />
        <div className="links">
          <a href="">Termos de serviço</a>
          <a href="">Política de privacidade</a>
        </div>
      </div>
    </FooterStyled>
  );
}
