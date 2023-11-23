// Normal Imports
import styled from "@emotion/styled";
import logo from "../img/logo_small.png";

// Create styled components for the Navbar (emotion.js)
const Nav = styled.nav`
  background-color: var(--bg);
  color: var(--bg-text);
  height: var(--nav-height);
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  border-bottom: var(--border);
`;

const NavLeft = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1rem;
`;

const NavCenter = styled.div`
  flex: 0 1 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavRight = styled.div`
  flex: 0 1 auto;
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

// Exported Navbar react component
function Navbar(props: {}) {
    // Prevent dragging handler
    const preventDragHandler = (e: any) => {
        e.preventDefault();
    };

    // Return the navbar's JSX
    return (
        <>
            <Nav>
                <NavLeft></NavLeft>
                <NavCenter>
                    <NavImg
                        src={logo}
                        alt="Landing"
                        onDragStart={preventDragHandler}
                    />
                </NavCenter>
                <NavRight></NavRight>
            </Nav>
        </>
    );
}

export default Navbar;
