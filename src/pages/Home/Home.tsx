import { useContext } from "react";
import Button from "../../components/Button/Button";
import Switch from "../../components/Switch/Switch";
import { ThemeContext } from "styled-components";
import { HomeContainer, Paragrafo } from "./Home.style";

import ImageBgMobileDark from '../../assets/images/bg-mobile.jpg';
import ImageBgMobileLight from '../../assets/images/bg-mobile-light.jpg';
import ImageBgDesktopDark from '../../assets/images/bg-desktop.jpg';
import ImageBgDesktopLight from '../../assets/images/bg-desktop-light.jpg';

import ImageProfile from '../../assets/images/profile.png'

import { Code2, GalleryThumbnails, Github, Heart, Linkedin } from 'lucide-react'

interface IHomeProps {
    toggleTheme(): void;
}

export default function Home({ toggleTheme }: IHomeProps) {
    const { title, colors } = useContext(ThemeContext) || {};

    const ParagraphIconSize = 14
    const ButtonIconSize = 20

    return (
        <HomeContainer
            backgroundDesktop={title === 'light' ? ImageBgDesktopLight : ImageBgDesktopDark}
            backgroundMobile={title === 'light' ? ImageBgMobileLight : ImageBgMobileDark}
        >

            <header>
                <img src={ImageProfile} alt="Foto do Ivamberg, autor do projeto, em um fundo branco" />
                <Paragrafo>@IvambergSilva</Paragrafo>
            </header>

            <Switch
                bgColor={colors?.stroke}
                onClickToggle={toggleTheme}
            />

            <main>
                <Button
                    text='Veja meu Portfólio'
                    link="https://github.com/IvambergSilva"
                    icon={<GalleryThumbnails color={colors?.text} size={ButtonIconSize}/>}
                />
                <Button
                    text='Conheça meu GitHub'
                    link="https://github.com/IvambergSilva"
                    icon={<Github color={colors?.text} size={ButtonIconSize}/>}
                />
                <Button
                    text='Acesse meu LinkedIn'
                    link="https://www.linkedin.com/in/ivamberg-silva/"
                    icon={<Linkedin color={colors?.text} size={ButtonIconSize}/>}
                />
            </main>
            <footer>
                <Paragrafo>Feito com <Heart size={ParagraphIconSize} /> pelo Ivamberg Silva <Code2 size={ParagraphIconSize} /></Paragrafo>
            </footer>
        </HomeContainer>
    )
}
