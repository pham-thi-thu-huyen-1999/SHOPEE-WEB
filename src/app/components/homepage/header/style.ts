import styled from "styled-components";

const StyleHeader = styled.div.attrs({
    className: 'bg-orange'
})``;

const StyleLogo = styled.a.attrs({
    className:  "color-[white] fill-white"
})``;

const StyleInputSearch = styled.div.attrs({
    className:  "color-white fill-white bg-white p-[5px]"
})`
`;

export { StyleHeader, StyleLogo, StyleInputSearch };
