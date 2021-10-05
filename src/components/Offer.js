import React from 'react';
import Title from "../UI/Title";

// font-family: Barlow;

export const offerPerson = {
    company: 'Dla firm',
    educator: 'Dla pedagogów',
    small_students: 'Dla uczniów',
    students: 'Dla studentów',
}

const OfferBox = ({title, onClick}) => {
    return (
        <div onClick={onClick} className="w-full bg-yellow h-offer-box rounded-lg p-6 items-center flex capitalize text-center text-5xl font-bold text-blue cursor-pointer">
            <span className="w-full">{title}</span>
        </div>
    )
}

const Offer = ({setForWho}) => {
    return (
        <section className="m-auto w-container p-8" id="oferta">
            <Title text="Oferta"/>
            <div className="w-box m-auto grid grid-cols-3 grid-rows-2 gap-8">
                <OfferBox title={offerPerson.company} onClick={() => setForWho(offerPerson.company)}/>
                <OfferBox title={offerPerson.educator} onClick={() => setForWho(offerPerson.educator)}/>
                <OfferBox title={offerPerson.small_students} onClick={() => setForWho(offerPerson.small_students)}/>
                <OfferBox title={offerPerson.students} onClick={() => setForWho(offerPerson.students)}/>
                <OfferBox title={offerPerson.students} onClick={() => setForWho(offerPerson.students)}/>
                <OfferBox title={offerPerson.students} onClick={() => setForWho(offerPerson.students)}/>
            </div>
        </section>
    );
};

export default Offer;
