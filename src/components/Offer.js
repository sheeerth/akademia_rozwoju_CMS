import React from 'react';
import Title from "../UI/Title";

// font-family: Barlow;

const OfferBox = ({title, onClick}) => {
    return (
        <div onClick={onClick} className="w-full bg-yellow h-offer-box rounded-lg p-6 items-center flex capitalize text-center text-5xl font-bold text-blue cursor-pointer">
            <span className="w-full">{title}</span>
        </div>
    )
}

const Offer = ({setForWho, headings}) => {
    const OfferBoxes = headings.map((heading, index) => {
        return <OfferBox key={index} title={heading} onClick={() => setForWho(index)}/>;
    })

    return (
        <section className="m-auto w-container p-8" id="oferta">
            <Title text="Oferta"/>
            <div className="w-box m-auto grid grid-cols-3 grid-rows-2 gap-8">
                {OfferBoxes}
            </div>
        </section>
    );
};

export default Offer;
