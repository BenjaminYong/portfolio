import styled from "styled-components";
import Toggle from "../components/Toggler";

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

const ThemeButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Home = (props) => {
  function handleChangeTheme(event) {
    props.changeTheme();
  }
  return (
    <div>
      <ThemeButtonContainer>
        <Toggle theme={props.theme} toggleTheme={handleChangeTheme} />
      </ThemeButtonContainer>
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
    </div>
  );
};

export default Home;
