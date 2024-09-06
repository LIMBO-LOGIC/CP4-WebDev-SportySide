import PropTypes from "prop-types";
import { CardProductStyled } from "./Styles";

const produtoPropType = PropTypes.shape({
  nome: PropTypes.string.isRequired,
  precoOriginal: PropTypes.number.isRequired,
  precoDesconto: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
});

CardProduct.propTypes = {
  product: produtoPropType.isRequired,
};

function formatPrice(value) {
  return value.toFixed(2).replace(".", ",");
}

export default function CardProduct({ product }) {
  return (
    <CardProductStyled>
      <img src={product.imagem} alt={`Imagem do produto ${product.nome}`} />
      <p className="nameProduct">{product.nome}</p>
      <div className="prices">
        <span>R$ {formatPrice(product.precoOriginal)}</span>
        <p>R$ {formatPrice(product.precoDesconto)}</p>
      </div>
      <button onClick={(e) => e.preventDefault()}>Comprar</button>
    </CardProductStyled>
  );
}
