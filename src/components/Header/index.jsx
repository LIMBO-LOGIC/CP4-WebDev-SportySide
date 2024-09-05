import { HeaderStyled } from "./Styles";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <HeaderStyled>
            <img src={logo} alt="Logo da empresa" />
            <nav>
                <ul>
                    <li className="itemMenu">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="itemMenu">
                        <Link to='/sobre'>Sobre</Link>
                    </li>
                    <li className="itemMenu">
                        <Link to='/produtos'>Produtos</Link>
                    </li>
                    <li className="itemMenu">
                        <Link to='/contato'>Contato</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyled>
    )
}