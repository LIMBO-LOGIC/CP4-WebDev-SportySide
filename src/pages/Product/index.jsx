import { ProductStyled } from "./Styles";
import CardProduct from "./../../components/CardProduct/index";
import { listProductAll } from "../../hooks/utilsJson";

export default function Product() {
  const shuffleArray = (arr) => {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort) 
      .map(({ value }) => value); 
  };

  const shuffledProducts = shuffleArray(listProductAll);

  return (
    <ProductStyled>
      <h1>Produtos recentes</h1>
      <div className="containerProduct">
        {shuffledProducts.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </ProductStyled>
  );
}
