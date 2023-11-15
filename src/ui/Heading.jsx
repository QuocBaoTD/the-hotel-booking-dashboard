import styled, { css } from "styled-components";

// const text = css`
//   text-align: center;
//   ${10 > 5 && 'background-color: yellowgreen;'}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center
    `}
    ${(props) =>
    props.as === "number" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      
    `}
`;

export default Heading;
