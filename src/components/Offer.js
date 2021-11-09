import React from 'react';
import Title from "../UI/Title";
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

const OfferBox = ({title, onClick}) => {
    return (
        <div onClick={onClick} className="w-full bg-yellow h-offer-box rounded-lg p-6 items-center flex capitalize text-center text-5xl font-bold text-blue cursor-pointer">
            <span className="w-full">{title}</span>
        </div>
    )
}

const Offer = ({setForWho, headings}) => {
    const OfferBoxes = headings.map((heading, index) => {
        return (
            <SwiperSlide key={index}>
                <OfferBox title={heading} onClick={() => setForWho(index)}/>
            </SwiperSlide>
        );

    })

    const OfferBoxesDesktop = headings.map((heading, index) => {
        return (<OfferBox key={index} title={heading} onClick={() => setForWho(index)}/>);
    })

    return (
        <section className="m-auto md:w-container p-8" id="oferta">
            <Title text="Oferta"/>
            <div className="md:w-box m-auto md:grid md:grid-cols-3 gap-8 hidden">
                {OfferBoxesDesktop}
            </div>
            <div className="md:w-box m-auto md:hidden">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={true}
                >
                    {OfferBoxes}
                </Swiper>
            </div>
        </section>
    );
};

export default Offer;
