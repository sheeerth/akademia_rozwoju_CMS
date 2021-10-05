import React from 'react';
import Title from "../UI/Title";

// font-family: Barlow;

const OfferBox = ({title}) => {
    return (
        <div className="w-full bg-yellow h-offer-box rounded-lg p-6 items-center flex capitalize text-center text-5xl font-bold text-blue">
            <span className="w-full">{title}</span>
        </div>
    )
}

const Offer = () => {
    return (
        <section className="m-auto w-container p-8" id="oferta">
            <Title text="Oferta"/>
            <div className="w-box m-auto grid grid-cols-3 grid-rows-2 gap-8">
                <OfferBox title="dla firm"/>
                <OfferBox title="dla pedagogów"/>
                <OfferBox title="dla uczniów"/>
                <OfferBox title="dla studentów"/>
                {/*<OfferBox title="dla firm"/>*/}
                {/*<OfferBox title="dla firm"/>*/}
            </div>
        </section>
    );
};

export default Offer;
