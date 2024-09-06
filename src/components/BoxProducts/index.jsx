import CardProduct from "../CardProduct";
import { BoxProductStyled } from "./Styles";
import PropTypes from "prop-types";

const produtoPropType = PropTypes.shape({
  nome: PropTypes.string.isRequired,
  precoOriginal: PropTypes.number.isRequired,
  precoDesconto: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
});

BoxProducts.propTypes = {
  listProducts: PropTypes.arrayOf(produtoPropType).isRequired,
  category: PropTypes.string.isRequired,
};

export default function BoxProducts({ listProducts, category }) {
  return (
    <BoxProductStyled>
      <p>{category}</p>
      <div className="listProduct">
        
        {listProducts.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </BoxProductStyled>
  );
}
