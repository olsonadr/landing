import styled from "@emotion/styled";
import useProgressiveImg from "../effects/useProgresiveImg";

import { FaGithub, FaLinkedin, FaFeather } from "react-icons/fa";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";

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

const VertFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
        width: 480px;
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
    padding: 2rem 0 2rem 0;
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
    font-size: 1.5rem;
    color: var(--fg-text);
`;

const H3 = styled(H2)`
    font-size: 1.25rem;
    color: var(--fg-text);

    &.hover-on:hover {
        color: var(--fg-text-bold);
    }
`;

const LinkList = styled(VertFlex)`
    width: 100%
`;

const LinkListItemS = styled.div`
    height: var(--link-button-height);
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--color-speed);
    padding: var(--link-button-padding);
    margin: 2rem;
    background-color: var(--bg);
    cursor: pointer;
    color: var(--bg-text);
    &:hover {
        background-color: var(--bg-bold);
        color: var(--bg-text-bold);
    }
    &:hover .left-icon {
        /* background-color: var(--bg-bolder); */
        color: var(--fg-text-bold);
    }
    &:hover .hover-on {
        color: var(--fg-text-bold);
    }
`;

// Create styled components for the NavItem's (emotion.js)
const IconButton = styled.button`
    --button-size: calc(0.5 * var(--nav-height));
    font-size: 1.5rem;
    height: var(--button-size);
    width: var(--button-size);
    background: none;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    &.hover-on:hover {
        background: none;
        filter: brightness(1.1);
    }
    & svg {
        fill: var(--bg-text);
        color: var(--bg-text);
        width: 1.5rem;
        height: 1.5rem;
    }
    &.right {
        margin-left: auto;
        background: none;
        border-radius: 50%;
    }
    &.right-bump {
        margin-right: 10px;
    }
    &.no-bg {
        background: none;
    }
`;

// Local LinkListItem react component
function LinkListItem(props: {
    leftIcon?: string | JSX.Element;
    rightIcon?: string | JSX.Element;
    children?: string | JSX.Element;
}) {
    // Return jsx for DropdownMenu to render
    return (
        <LinkListItemS>
            {props.leftIcon ? (
                <IconButton className="right-bump left-icon">
                    {props.leftIcon}
                </IconButton>
            ) : (
                <IconButton className="no-bg right-bump"></IconButton>
            )}
            {props.children}
            {props.rightIcon && (
                <IconButton className="right right-icon">{props.rightIcon}</IconButton>
            )}
        </LinkListItemS>
    );
}

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
                    <H2>or enjoy a hosted app</H2>
                    <LinkList>
                        <LinkListItem leftIcon={<FaFeather />} rightIcon={<ChevronIcon />}>
                            <H3 className="hover-on">React Notes</H3>
                        </LinkListItem>
                    </LinkList>
                </MainColumn>
            </Main>
        </>
    );
}

export default MainPanel;
