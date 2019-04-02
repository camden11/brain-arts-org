import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { H2, Colors, Container, MediaQueries, Img } from "../style";
import { baoLogo } from "../images";

const navQuery = graphql`
  query {
    takeshape {
      getNav {
        subheader
        links {
          externalLink
          url
          text
        }
      }
    }
  }
`;

const NavWrapper = styled.nav`
  background-color: ${Colors.TEAL};
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
`;

const Subheader = styled(H2)`
  margin-top: 30px;
  margin-bottom: 50px;

  ${MediaQueries.small} {
    margin-top: 15px;
    margin-bottom: 40px;
    font-size: 22px;
    text-align: center;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0;
`;

const NavListItem = styled.li`
  padding: 0 50px;

  ${MediaQueries.small} {
    padding: 0 10px;
  }
`;

const ExternalNavLink = styled.a`
  font-family: DinAlternate;
  font-weight: 400;
  font-size: 24px;
  color: ${Colors.PURPLE};
  text-transform: uppercase;
  text-decoration: none;

  &:visited {
    color ${Colors.PURPLE};
  }

  ${MediaQueries.small} {
    font-size: 16px;
  }
`;

const InternalNavLink = styled(Link)`
  font-family: DinAlternate;
  font-weight: 400;
  font-size: 24px;
  color: ${Colors.PURPLE};
  text-transform: uppercase;
  text-decoration: none;

  &:visited {
    color ${Colors.PURPLE};
  }

  ${MediaQueries.small} {
    font-size: 16px;
  }
`;

const Nav = ({ data }) => (
  <NavWrapper>
    <Container>
      <a href="/">
        <Img src={baoLogo} />
      </a>
      <Subheader color={Colors.WHITE}>{data.subheader}</Subheader>
      <NavList>
        {data.links.map(link => {
          const LinkTag = link.externalLink ? ExternalNavLink : InternalNavLink;
          return (
            <NavListItem>
              <LinkTag href={link.url}>{link.text}</LinkTag>
            </NavListItem>
          );
        })}
      </NavList>
    </Container>
  </NavWrapper>
);

export default () => (
  <StaticQuery
    query={navQuery}
    render={data => <Nav data={data.takeshape.getNav} />}
  />
);
