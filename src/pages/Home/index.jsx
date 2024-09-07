import Slide from "../../components/Slide";
import { HomeStyled } from "./Styles";
import image1 from "../../assets/banner1.svg";
import image2 from "../../assets/banner2.svg";
import image3 from "../../assets/banner3.svg";
import BoxProducts from "../../components/BoxProducts";
import { listProductByCategeory } from "../../hooks/utilsJson";

export default function Home() {
  const images = [image1, image2, image3];

  return (
    <HomeStyled>
      <Slide images={images} />
      <div className="containerProducts">
        <BoxProducts category="Futebol" listProducts={listProductByCategeory.futebol}/>
        <BoxProducts category="Vôlei" listProducts={listProductByCategeory.volei}/>
        <BoxProducts category="Basquete" listProducts={listProductByCategeory.basquete}/>
        <BoxProducts category="Natação" listProducts={listProductByCategeory.natacao}/>
      </div>
    </HomeStyled>
  );
}
