import React from 'react';
import Box from "../UI/Box";
import Title from "../UI/Title";

const About = () => {
    return (
        <div className="m-auto w-container p-8">
            <Title text="O Nas"/>
            <Box className="mb-8 relative">
                <div className="absolute -top-3 rounded-lg bg-gray-500 w-photo h-photo"></div>
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
                    <h4 className="font-bold text-2xl opacity-90">Anna Breguła</h4>
                    <p className="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lacinia morbi neque, ut imperdiet scelerisque. Gravida in aliquet ut sed eget.
                        Nisl pulvinar feugiat non placerat quis sit sem. In dolor ullamcorper dis ultrices
                        malesuada adipiscing pellentesque. Ultricies dolor amet habitant magnis leo
                        scelerisque nunc tortor. Ornare viverra proin enim purus. Sed amet quis sed
                        augue diam metus, ligula enim lacus. Auctor imperdiet pellentesque proin aliquam.
                        Vel pellentesque sapien at mollis pharetra.
                    </p>
                </div>
                <div className="absolute -top-3 right-4 rounded-lg bg-gray-500 w-photo h-photo"></div>
            </Box>
        </div>
    );
};

export default About;
