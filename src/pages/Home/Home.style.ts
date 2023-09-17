import styled from "styled-components";
import { TextSM, device } from "../../styles/Variables";

interface IHomeContainerProps {
    backgroundDesktop: string
    backgroundMobile: string;
}

export const Paragrafo = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: ${TextSM.size};
    font-weight: ${TextSM.weight};
    line-height: ${TextSM.lineHeight};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const HomeContainer = styled.div<IHomeContainerProps>`
    background: url(${props => props.backgroundDesktop});
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.2s ease-in-out;

    header {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
        align-items: center;
        margin-bottom: 2rem;

        img {
            width: 11.2rem;
            border: 2px solid ${props => props.theme.colors.stroke};
            border-radius: 50%;
            background: ${props => props.theme.colors.avatar};
            transition: all 0.2s ease-in-out;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        width: 100%;
        padding: 2.4rem;
    }

    @media ${device.mobile} {
        background: url(${props => props.backgroundMobile}) no-repeat center/cover;
    }
`