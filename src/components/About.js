import React from 'react';
import Box from "../UI/Box";
import Title from "../UI/Title";
import Anna from './../img/Anna.png';
import Gosia from './../img/Gosia.png';

const About = () => {
    return (
        <section className="m-auto w-container p-8" id="o_nas">
            <Title text="O Nas"/>
            <Box className="mb-8 relative">
                <div className="absolute -top-3 rounded-lg bg-gray-500 w-photo h-photo">
                    <img className="w-photo h-photo rounded-lg" src={Anna}/>
                </div>
                <div className="ml-about-text flex flex-col items-start p-4">
                    <h4 className="font-bold text-2xl opacity-90">Anna Breguła</h4>
                    <p className="text-base">
                        Pedagog, absolwent Uniwersytetu Śląskiego w Katowicach, Wiceprezes Zarządu Głównego Stowarzyszenia Widzących Więcej, autor bloga „Mam depresję”, student psychologii Uniwersytetu SWPS w Katowicach.

                        Wierzę, że edukacja społeczeństwa sprawi, że wzrośnie uważność i zrozumienie na drugiego człowieka, ale również samego siebie. Chciałabym, aby psychoterapia i farmakoterapia nie wiązały się ze wstydem, a młodzi ludzie trafiali na świadomych pedagogów.
                    </p>
                </div>
            </Box>
            <Box className="mt-8 relative" isBlue="true">
                <div className="mr-about-text flex flex-col items-start p-4">
                    <h4 className="font-bold text-2xl opacity-90">Małgorzata Ciechanowska-Florczyk</h4>
                    <p className="text-base">
                        Prezes Zarządu Stowarzyszenia Widzących Więcej, Członek Powiatowej Rady Pożytku Publicznego w Mogilnie, Ekspert ds. organizacji wolontariatu i systemów zarządzania w organizacjach, Student psychologii Uniwersytetu Kazimierza Wielkiego w Bydgoszczy.
                        W swojej pracy świadomie wybieram uważność i systematyczność jako metodę do zbudowania trwałego i efektywnego zespołu. Wierzę, że tylko dobre zarządzanie zasobami ludzkimi może pozytywnie wpływać na budowaną organizację czy markę.
                    </p>
                </div>
                <div className="absolute -top-3 right-4 rounded-lg bg-gray-500 w-photo h-photo">
                    <img className="w-photo h-photo rounded-lg" src={Gosia}/>
                </div>
            </Box>
        </section>
    );
};

export default About;
