import styled from "styled-components";
import MediaQueries from "./mediaQueries";

const P = styled.p`
  font-family: DinAlternate;
  font-weight: 400;
  font-size: ${({ size }) =>
    size === "large" ? "24px" : size === "small" ? "18px" : "20px"};
  color: ${props => props.color};
  margin-top: 0;
  white-space: pre-wrap;

  -webkit-font-smoothing: ${({ dark }) => (dark ? "antialiased" : "none")};
  -moz-osx-font-smoothing: ${({ dark }) => (dark ? "greyscale" : "none")};

  ${MediaQueries.small} {
    font-size: ${({ size }) =>
      size === "large" ? "18px" : size === "small" ? "14px" : "16px"};
  }
`;

export default P;
