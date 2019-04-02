import styled from "styled-components";
import MediaQueries from "./mediaQueries";

const H2 = styled.h2`
  font-family: DinAlternate;
  font-weight: 400;
  font-size: 40px;
  color: ${props => props.color};
  text-transform: uppercase;
  text-align: center;

  ${MediaQueries.small} {
    font-size: 30px;
    text-align: left;
  }
`;

export default H2;
