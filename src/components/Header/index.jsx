import { HeaderStyled } from "./Styles";
import logo from '../../assets/logo.svg'

export default function Header(){
    return(
        <HeaderStyled>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li className="itemMenu">Home</li>
                    <li className="itemMenu">Cezar</li>
                    <li className="itemMenu">Produtos</li>
                    <li className="itemMenu">Contato</li>
                </ul>
            </nav>
        </HeaderStyled>
    )
}