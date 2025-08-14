import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import styled, { css, ThemeProvider } from "styled-components";
import themes from "../../themes";

const SidebarContainer = styled.div`
    position: relative;
    display: flex;
`;

const ThemeButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 3rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s;

    background-color: ${({ theme }) => theme.buttonBackgroundDefault};
    color: ${({ theme }) => theme.textDefault};

    &:hover {
        color: ${({ theme }) => theme.textHover};
    }
`;

const StyledAside = styled.aside`
    box-sizing: border-box;
    margin: 0.5rem 0 0 0.5rem;
    height: calc(100vh - 1rem);
    float: left;
    background-color: ${({ theme }) => theme.sidebarBackground};
    padding: 1px;
    border-radius: 0.5rem;
    transition: all 0.4s;
    width: ${({ $isOpened }) => ($isOpened ? "300px" : "4.5rem")};
`;

const AsideInner = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.buttonBackgroundActive};
    padding: ${({ $isOpened }) => ($isOpened ? "1.5rem" : "1.5rem 0.5rem")};
    transition: all 0.4s;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 2rem;
`;

const Logo = styled.img`
    display: block;
    width: 3rem;
    aspect-ratio: 1;
    transition: all 0.4s;
`;

const LogoText = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textLogo};
    margin-left: 0.5rem;
    transition: all 0.4s;

    ${({ $isOpened }) =>
        !$isOpened &&
        css`
            opacity: 0;
            transform: translateX(20px);
            pointer-events: none;
        `}
`;

const ToggleButton = styled.button`
    position: absolute;
    cursor: pointer;
    right: calc(-1.5rem - 3px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: ${({ theme, $isOpened }) =>
        $isOpened
            ? theme.buttonBackgroundActive
            : theme.buttonBackgroundDefault};
    color: ${({ theme }) => theme.textDefault};
    transition: all 0.4s;
    transform: ${({ $isOpened }) =>
        $isOpened ? "translateX(20%)" : "translateX(150%)"};
`;

const ToggleIcon = styled(FontAwesomeIcon)`
    transition: transform 0.4s;
    transform: rotate(${({ $isOpened }) => ($isOpened ? "0deg" : "180deg")});
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: ${({ $top }) => ($top ? "0" : "auto")};
`;

const NavLink = styled.a`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    height: 1.2rem;
    font-weight: 600;
    padding: 1rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.textDefault};
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.4s;

    &:hover {
        color: ${({ theme }) => theme.textHover};
        background-color: ${({ theme }) => theme.sidebarBackgroundHover};
    }

    &:active {
        color: ${({ theme }) => theme.textActive};
        background-color: ${({ theme }) => theme.sidebarBackgroundActive};
    }

    > span {
        transition: all 0.4s;
        ${({ $isOpened }) =>
            !$isOpened &&
            css`
                opacity: 0;
                transform: translateX(20px);
                pointer-events: none;
            `}
    }
`;

const routes = [
    { title: "Home", icon: "home", path: "/" },
    { title: "Sales", icon: "chart-line", path: "/sales" },
    { title: "Costs", icon: "chart-column", path: "/costs" },
    { title: "Payments", icon: "wallet", path: "/payments" },
    { title: "Finances", icon: "chart-pie", path: "/finances" },
    { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
    { title: "Settings", icon: "sliders", path: "/settings" },
    { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = ({ color = "light" }) => {
    const [theme, setTheme] = useState(color);
    const [isOpened, setIsOpened] = useState(true);

    const goToRoute = useCallback((path) => {
        console.log(`Going to "${path}"`);
        // Здесь должна быть реальная навигация
    }, []);

    const toggleSidebar = useCallback(() => {
        setIsOpened((v) => !v);
    }, []);

    const changeTheme = useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    return (
        <ThemeProvider theme={themes[theme]}>
            <SidebarContainer>
                <ThemeButton onClick={changeTheme}>Сменить тему</ThemeButton>

                <StyledAside $isOpened={isOpened}>
                    <AsideInner $isOpened={isOpened}>
                        <LogoContainer>
                            <Logo src={logo} alt="TensorFlow logo" />
                            <LogoText $isOpened={isOpened}>TensorFlow</LogoText>
                            <ToggleButton
                                $isOpened={isOpened}
                                onClick={toggleSidebar}
                                aria-label={
                                    isOpened
                                        ? "Collapse sidebar"
                                        : "Expand sidebar"
                                }
                            >
                                <ToggleIcon
                                    icon="angle-left"
                                    $isOpened={isOpened}
                                />
                            </ToggleButton>
                        </LogoContainer>

                        <LinksContainer $top>
                            {routes.map((route) => (
                                <NavLink
                                    key={route.path}
                                    $isOpened={isOpened}
                                    onClick={() => goToRoute(route.path)}
                                >
                                    <FontAwesomeIcon
                                        icon={route.icon}
                                        fixedWidth
                                    />
                                    <span>{route.title}</span>
                                </NavLink>
                            ))}
                        </LinksContainer>

                        <LinksContainer>
                            {bottomRoutes.map((route) => (
                                <NavLink
                                    key={route.path}
                                    $isOpened={isOpened}
                                    onClick={() => goToRoute(route.path)}
                                >
                                    <FontAwesomeIcon
                                        icon={route.icon}
                                        fixedWidth
                                    />
                                    <span>{route.title}</span>
                                </NavLink>
                            ))}
                        </LinksContainer>
                    </AsideInner>
                </StyledAside>
            </SidebarContainer>
        </ThemeProvider>
    );
};

Sidebar.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

export default Sidebar;
