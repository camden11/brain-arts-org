import React, { Component } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { getImageUrl } from "takeshape-routing";
import { P, H2, Colors, Container, MediaQueries, Img } from "../style";
import { instagram, facebook } from "../images";
import Layout from "../layouts/default";

const homeQuery = graphql`
  query {
    takeshape {
      getHomePage {
        aboutBlurb
        instagramUrl
        facebookUrl
        ourProjectsHeader
        projects {
          name
          url
          image {
            path
          }
          detail
        }
      }
    }
  }
`;

const Main = styled.main`
  width: 100%;
  background-color: ${Colors.PURPLE};
  padding-top: 50px;
  padding-bottom: 150px;
`;

const Intro = styled.div`
  text-align: center;
  background-color: ${Colors.TEAL_DARK};
  border-radius: 15px;
  padding: 40px;
  margin: 0 20px 60px;

  p {
    margin: 0;
  }

  ${MediaQueries.small} {
    padding: 20px;
    margin: 0 0 60px;
    text-align: left;

    p {
      font-size: 16px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  padding: 0 10px;
`;

const ProjectSelectionSection = styled.div`
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 30px;

  ${MediaQueries.small} {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`;

const ProjectSelectionWrapper = styled.div`
  grid-column: span 1;
`;

const ProjectSelection = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  border: 2px solid ${Colors.YELLOW};
  border-radius: 15px;
  text-align: center;
  background-color: ${({ active }) => (active ? Colors.YELLOW : "transparent")};
  color: ${({ active }) => (active ? Colors.PURPLE : Colors.YELLOW)};
  cursor: pointer;

  p {
    margin: 0;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
`;

const ImageSection = styled.div`
  grid-column: span 1;
  position: relative;

  ${MediaQueries.small} {
    grid-column: span 2;
  }
`;

const ProjectImage = styled(Img)`
  color: ${Colors.YELLOW};
  box-shadow: 5px 5px;
`;

const TextSection = styled.div`
  grid-column: span 1;

  ${MediaQueries.small} {
    margin-top: 30px;
    grid-column: span 2;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjectIndex: 0
    };
  }

  changeProject(index) {
    this.setState({ currentProjectIndex: index });
  }

  render() {
    const { data } = this.props;
    const { currentProjectIndex } = this.state;
    const currentProject = data.projects[currentProjectIndex];
    return (
      <Layout>
        <Main>
          <Container>
            <Intro>
              <P size="large" color={Colors.WHITE} dark>
                {data.aboutBlurb}
              </P>
              <SocialLinks>
                <SocialLink href={data.instagramUrl}>
                  <Img src={instagram} />
                </SocialLink>
                <SocialLink href={data.facebookUrl}>
                  <Img src={facebook} />
                </SocialLink>
              </SocialLinks>
            </Intro>
            <H2 color={Colors.YELLOW}>{data.ourProjectsHeader}</H2>
            <ProjectSelectionSection>
              {data.projects.map((project, index) => (
                <ProjectSelectionWrapper>
                  <ProjectSelection
                    onClick={() => this.changeProject(index)}
                    active={index === currentProjectIndex}
                  >
                    <P dark>{project.name}</P>
                  </ProjectSelection>
                </ProjectSelectionWrapper>
              ))}
            </ProjectSelectionSection>
            <ProjectGrid>
              <ImageSection>
                <ProjectImage src={getImageUrl(currentProject.image.path)} />
              </ImageSection>
              <TextSection>
                <P color={Colors.YELLOW} dark>
                  {currentProject.detail}
                </P>
              </TextSection>
            </ProjectGrid>
          </Container>
        </Main>
      </Layout>
    );
  }
}

export default () => (
  <StaticQuery
    query={homeQuery}
    render={data => <Home data={data.takeshape.getHomePage} />}
  />
);
