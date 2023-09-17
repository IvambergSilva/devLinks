import { ThemeContext } from "styled-components";
import { SwitchContainer } from "./Switch.style";

import { MoonStar, Sun } from 'lucide-react'
import { useContext } from "react";

interface ISwitchProps {
    bgColor?: string;
    onClickToggle(): void;
}

export default function Switch({ bgColor, onClickToggle }: ISwitchProps) {
    const iconSize = 16

    const { title } = useContext(ThemeContext) || {};

    return (
        <SwitchContainer
            background={bgColor}
            onClick={onClickToggle}
        >
            <div>
                <span>
                    {title === 'light'
                        ? <Sun size={iconSize} />
                        : <MoonStar size={iconSize} />}
                </span>
            </div>
        </SwitchContainer>
    )
}
