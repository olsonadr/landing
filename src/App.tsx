import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import MainPanel from "./components/MainPanel";
import "./styles/App.css";

// Styled elements
const AppComp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Exported App react component
function App() {
    return (
        <AppComp>
            <Navbar />
            <MainPanel />
        </AppComp>
    );
}

export default App;
