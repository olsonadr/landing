import styled from "@emotion/styled";
import useProgressiveImg from "../effects/useProgresiveImg";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import headshot from "../img/headshot.jpg";
import headshot_tiny from "../img/headshot_tiny.jpg";

// Create styled components for the navbar (emotion.js)
const Main = styled.div`
    /* below nav header */
    background-color: var(--fg);
    display: flex;
    justify-content: center;
    position: fixed;
    top: var(--nav-height);
    padding: 1rem;
    height: calc(100vh - var(--nav-height) - 2rem);
    overflow: auto;
    /* take full width */
    left: 0;
    right: 0;
`;

const HorizFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const MainColumn = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (min-width: 550px) {
        width: 430px;
    }
    @media (max-width: 550px) {
        width: 80%;
    }
`;

const PortraitPhotoS = styled.img`
    width: 100%;
    height: 100%;
`;

const PortraitPhotoWrapper = styled.div`
    display-item: flex;
    width: 10rem;
    height: 10rem;
    margin: auto;
    border-radius: 50%;
    margin-bottom: 1rem;
    margin-top: 2rem;
    overflow:hidden;
`;

const BlurredPortraitPhoto = () => {
    const [src, { blur }] = useProgressiveImg(headshot_tiny, headshot);
    return <PortraitPhotoS src={src} style={{ filter: blur ? "blur(20px)" : "none" }} />;
}

const SocialGlyphRow = styled(HorizFlex)`
    padding: 0.5rem 0;
    gap: 1rem;
`;

const GithubGlyph = styled(FaGithub)`
    font-size: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--fg-text);
    &:hover {
        background-color: var(--bg-bold);
        color: var(--fg-text-bold);
    }
`;

const LinkedinGlyph = styled(FaLinkedin)`
    font-size: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--fg-text);
    &:hover {
        background-color: var(--bg-bold);
        color: var(--fg-text-bold);
    }
`;

const H1 = styled.h1`
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    color: var(--fg-text-bold);
`;

const H2 = styled.h2`
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    color: var(--fg-text);
`;

// Exported MainPanel react component
function MainPanel(props: {}) {
    // Return jsx output for this component
    return (
        <>
            <Main>
                <MainColumn>
                    <PortraitPhotoWrapper>
                        <BlurredPortraitPhoto />
                    </PortraitPhotoWrapper>
                    <H1>Hi, I'm Nick!</H1>
                    <H2>while my portfolio is under construction, connect with me on GitHub or Linkedin</H2>
                    <SocialGlyphRow>
                        <a href="https://github.com/olsonadr"><GithubGlyph /></a>
                        <a href="https://www.linkedin.com/in/olson-nick/"><LinkedinGlyph /></a>
                    </SocialGlyphRow>
                </MainColumn>
            </Main>
        </>
    );
}

export default MainPanel;
