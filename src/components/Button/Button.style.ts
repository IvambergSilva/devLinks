import { styled } from 'styled-components'
import { TextMD } from '../../styles/Variables'

export const ButtonContainer = styled.a`
    text-decoration: none;
    max-width: 54rem;
    min-width: 36.2rem;
    width: 50%;
    height: 5.6rem;
    margin: auto;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;
    text-align: center;
    gap: 1.5rem;
    
    background: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.stroke};
    transition: all 0.2s ease-in-out;

    p {
        font-size: ${TextMD.size};
        font-weight: ${TextMD.weight};
        line-height: ${TextMD.lineHeight};
        color: ${props => props.theme.colors.text};
    }

    &:hover {
        background: ${props => props.theme.colors.surfaceHover};
    }
`