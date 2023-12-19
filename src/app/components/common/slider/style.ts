import styled from "styled-components";

const StyleSlider = styled.div.attrs({})`
  .arrow-custom {
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    cursor: pointer;
    border: none;
    outline: none;
    background: #6666662e;
    height: 50px;
    width: 30px;
    transform: translate(0, -50%);

    &::before {
      content: "";
      position: absolute;
      background: transparent;
      border: 4px solid #fff;
      padding: 7px;
      top: 50%;
    }
    &.arrow-prev {
      z-index: 9;
      &::before {
        border-right: 0;
        border-top: 0;
        transform: rotate(45deg) translateY(-75%);
      }
    }
    &.arrow-next {
      right: 0;
      &::before {
        border-left: 0;
        border-bottom: 0;
        left: 20%;
        transform: rotate(45deg) translate(-50%, -30%);
      }
    }
  }
  .slick-dots {
    .slick-active {
      div {
        background: red !important;
      }
    }
  }
`;

export { StyleSlider };
