import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            text: string;
            stroke: string;
            surface: string;
            surfaceHover: string;
            highlight: string;
            avatar: string;
        }
    }
}