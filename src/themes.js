// :root {
//     // dark
//     --color-sidebar-background-dark-default: #202127;
//     --color-sidebar-background-dark-hover: #2D2E34;
//     --color-sidebar-background-dark-active: #393A3F;
//     --color-text-dark-default: #f0f2ff;
//     --color-text-dark-hover: #f0f2ff;
//     --color-text-dark-active: #f0f2ff;
//     --color-text-logo-dark-default: #3B82F6;
//     --color-button-background-dark-default: #202127;
//     --color-button-background-dark-active: #4B5966;

//     // light
//     --color-sidebar-background-light-default: #fff;
//     --color-sidebar-background-light-hover: #f0f2ff;
//     --color-sidebar-background-light-active: #f0f2ff;
//     --color-text-light-default: #97a5b9;
//     --color-text-light-hover: #091b31;
//     --color-text-light-active: #0000b5;
//     --color-text-logo-light-default: #0000b5;
//     --color-button-background-light-default: #fff;
//     --color-button-background-light-active: #e2e8f0;
// }

const themes = {
    light: {
        sidebarBackground: "var(--color-sidebar-background-light-default)",
        sidebarBackgroundHover: "var(--color-sidebar-background-light-hover)",
        sidebarBackgroundActive: "var(--color-sidebar-background-light-active)",
        textDefault: "var(--color-text-light-default)",
        textHover: "var(--color-text-light-hover)",
        textActive: "var(--color-text-light-active)",
        textLogo: "var(--color-text-logo-light-default)",
        buttonBackgroundDefault: "var(--color-button-background-light-default)",
        buttonBackgroundActive: "var(--color-button-background-light-active)",
    },
    dark: {
        sidebarBackground: "var(--color-sidebar-background-dark-default)",
        sidebarBackgroundHover: "var(--color-sidebar-background-dark-hover)",
        sidebarBackgroundActive: "var(--color-sidebar-background-dark-active)",
        textDefault: "var(--color-text-dark-default)",
        textHover: "var(--color-text-dark-hover)",
        textActive: "var(--color-text-dark-active)",
        textLogo: "var(--color-text-logo-dark-default)",
        buttonBackgroundDefault: "var(--color-button-background-dark-default)",
        buttonBackgroundActive: "var(--color-button-background-dark-active)",
    },
};

export default themes;
