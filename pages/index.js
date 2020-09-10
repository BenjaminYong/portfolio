import styled from "styled-components";

const Header = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const HeaderText = styled.p`
  @media screen and (max-width: 777px) {
    margin-top: 150px;
    font-size: 2.5em;
  }

  @media screen and (max-width: 505px) {
    margin-top: 100px;
    font-size: 2em;
  }

  @media screen and (max-width: 410px) {
    margin-top: 100px;
    font-size: 1.6em;
  }

  @media screen and (max-width: 320px) {
    margin-top: 100px;
    font-size: 1.4em;
  }

  margin-top: 300px;
  font-size: 4em;
`;

const Home = () => {
  return (
    <Header>
      <HeaderText>
        <div>Benjamin Yong.</div>
        <div>Software Developer.</div>
        <div>
          Connect with me on{" "}
          <a href="https://www.linkedin.com/in/benjamin-yong1/">LinkedIn</a>.
        </div>
        <div>
          Check out my work on{" "}
          <a href="https://github.com/BenjaminYong">GitHub</a>.
        </div>
      </HeaderText>
    </Header>
  );
};

export default Home;
