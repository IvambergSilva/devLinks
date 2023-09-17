export const DarkMode = {
    title: 'dark',
    colors: {
        text: '#FFF',
        stroke: '#FFFFFF7F',
        surface: '#FFFFFF1A',
        surfaceHover: '#FFFFFF0D',
        highlight: '#FFFFFF33',
        avatar: '#623A82'
    },
};

export const LightMode = {
    title: 'light',
    colors: {
        text: '#000',
        stroke: '#0000007F',
        surface: '#0000000D',
        surfaceHover: '#00000005',
        highlight: '#0000001A',
        avatar: '#D9B3E2'
    },
};

const size = {
    mobile: '425px',
    tablet: '768px',
    desktop: '1024px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(max-width: ${size.desktop})`,
};

function createTextStyle(size: string, lineHeight: string, weight: string) {
    return { size, lineHeight, weight }
};

export const TextMD = createTextStyle('1.6rem', '24px', '500');
export const TextSM = createTextStyle('1.4rem', '24px', '400');