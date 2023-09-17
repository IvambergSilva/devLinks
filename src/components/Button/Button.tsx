import React from "react";
import { ButtonContainer } from "./Button.style";

interface IButtonProps {
    text: string
    link: string
    icon?: React.ReactNode
}

export default function Button({ text, link, icon }: IButtonProps) {
    return (
        <ButtonContainer href={link} target="_blank">
            <p>{text}</p>
            <span>{icon}</span>
        </ButtonContainer>
    )
}
