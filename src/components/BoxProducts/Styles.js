import styled from "styled-components";

export const BoxProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  padding: 12px 60px;

  .titleCategory {
    padding-left: 54px;
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--bg-color);
  }

  .swiper-button-next {
    color: var(--bg-color);
  }

  .swiper-button-prev {
    color: var(--bg-color);
  }

  .swiper-slide:nth-child(1) {
    margin-left: 54px;
  }
`;
