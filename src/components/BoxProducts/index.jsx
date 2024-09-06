import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CardProduct from "../CardProduct";
import { BoxProductStyled } from "./Styles";
import PropTypes from "prop-types";
// import useContexts from "../../hooks/useContext";

import "swiper/css";
import "swiper/css/navigation";

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
  // const { isMobileBig } = useContexts();

  return (
    <BoxProductStyled>
      <p>{category}</p>
      <div className="listProduct">
        {/* {listProducts.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))} */}

        <Swiper
          // slidesPerView={isMobileBig ? 1 : 6}
          navigation={true}
          grabCursor={false} 
          allowTouchMove={false} 
          modules={[Navigation]}
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          breakpoints={{
            1400: {
              slidesPerView: 6,
              slidesPerGroup: 1,
            },

            1300: {
              slidesPerView: 5,
              slidesPerGroup: 1,
            },

            1040: {
              slidesPerView: 4,
              slidesPerGroup: 1,
            },

            620: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },

            450: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            }
          }}
          pagination={{
            clickable: true,
            color: '#FF0000'
          }}
          className={"carrosselProdutos"}
        >
          {listProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <CardProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </BoxProductStyled>
  );
}
