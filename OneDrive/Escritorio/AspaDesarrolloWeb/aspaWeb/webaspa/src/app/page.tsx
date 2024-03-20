import Services from "./Components/ServiceShowcase/Services";
import { HeroHome } from "./Components/HeroHome/HeroHome";
import { CardHome } from "./Components/CardsHome/CardHome";
import { TextGenerateEffect } from "./Components/GenerativeText/TextGenerateEffect";
import NavBar from "./Components/nav/NavBar";
import { BentoGridDemo } from "./Components/Grid/BentoGridDemo";
import CardHomeTriple from "./Components/CardsHome/CardHomeTriple";


export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <HeroHome></HeroHome>
            <CardHomeTriple></CardHomeTriple>
            
            <BentoGridDemo></BentoGridDemo>
            <div className="flex justify-center items-center h-[40rem]">
                <div className="text-center w-[60rem]">
                    <TextGenerateEffect words="Creamos Aspa con el objetivo de poder brindar a las empresas un software o sistemas de información que pueda ayudar a cumplir los objetivos que tengan. El ideal de Aspa se encuentra en conocer realmente la necesidad de nuestros clientes y poder acercarnos de la mejor manera para desarrollar una plataforma adecuada que solucione un problema, agilice un proceso o brinde información relevante para la obtención de mejores resultados." />
                </div>
            </div>

            <CardHome></CardHome>
            <Services></Services>
        </div>
    );
}
