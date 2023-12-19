import styled from "styled-components";

const StyleCheckbox = styled.div.attrs({})`
  position: relative;
  input {
    padding: 0;
  }
  .check-box {
    &::before {
      background: #fff;
      position: absolute;
      content: "";
      height: 5px;
      width: 9px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg);
      left: 3px;
      top: 3px;
    }
  }
  .check-box__active {
    &::before {
      background: red;
    }
  }
`;

export { StyleCheckbox };
