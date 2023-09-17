import styled from "styled-components";

interface ISwitchProps {
    background?: string
}

let iconBackgroundSize = 3
let iconBorderSize = 1
let translateAmout = `${(iconBackgroundSize + iconBorderSize) / 2}rem`

export const SwitchContainer = styled.button<ISwitchProps>`
    background: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.stroke};
    width: ${iconBackgroundSize * 1.5}rem;
    border-radius: ${iconBackgroundSize / 2}rem;
    height: ${iconBackgroundSize / 1.5}rem;
    position: relative;
    
    div {
        width: ${iconBackgroundSize + iconBorderSize / 1.2}rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        position: absolute;
        top: -${(iconBackgroundSize + iconBorderSize * 2.8) * (1 / (iconBackgroundSize * 2))}rem;
        
        transform: translateX(${props => props.theme.title === 'light' ? translateAmout : `-${translateAmout}`});
        
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: ${props => props.theme.colors.stroke};
            transition: all 0.2s ease-in-out;
        }
    }
    
    span {
        background: #FFF;
        padding: 0.5rem;
        border-radius: 50%;
        width: ${iconBackgroundSize}rem;
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`