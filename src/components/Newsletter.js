import React, {useReducer, useState} from 'react';
import Box from "../UI/Box";

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const Newsletter = () => {
    const initialValue = {
        name: '',
        email: ''
    }
    const [isValidated, setIsValidated] = useState(false);
    const reducer = (currentValue, nextState) => ({...currentValue, ...nextState});
    const [values, setValues] = useReducer(reducer, initialValue);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
                'form-name': form.getAttribute('name'),
                ...values,
            }),
        })
            .then(() => setSubmitted(true))
            .catch((error) => alert(error))
    }

    const handleChange = (e) => {
        setValues({[e.target.name]: e.target.value});
    }

    const form = submitted ? (<div className="min-w-max font-medium items-center flex mt-4"><p className="my-auto text-center bg-blue p-4 rounded-lg text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg><span>Dzięki za zapis. <br/> Odezwiemy się do Ciebie za chwilkę.</span></p></div>) : (
        <div className="md:ml-8 mt-4">
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="newsletter-akademia" onSubmit={handleSubmit}>
                <input name="bot-field" type="hidden" onChange={handleChange}/>
                <div>
                    <input name="name" id="name" required placeholder="Imie" type="text" onChange={handleChange} className="md:w-input my-2 w-full rounded-lg h-9 px-2 py-3"/>
                </div>
                <div>
                    <input name="email" id="email" required placeholder="Email" type="email" onChange={handleChange} className="md:w-input w-full my-2 h-9 rounded-lg px-2 py-3"/>
                </div>
                <button className="md:w-input w-full bg-blue my-2 h-9 rounded-lg text-white">Zapisz się</button>
            </form>
        </div>
    )

    return (
        <div className="m-auto md:w-container p-8">
            <Box>
                <div className="flex md:flex-row flex-col md:p-4 p-2">
                    <div className="flex flex-col mr-8">
                        <h3 className="mb-4 font-bold md:text-2xl text-lg">Chcesz próbkę naszej pracy?</h3>
                        <p className="md:font-medium md:text-base text-sm">
                            Nasze kursy, szkolenia i warsztaty to dożywotnia inwestycja w samego siebie. Usługi Akademii Rozwoju umożliwiają poznanie nowej perspektywy, zdobycie nowych umiejętności oraz ich podwyższenie.
                            Szkolenia mają charakter doskonalący. Część z nich jest prowadzona w trybie indywidualnym. Naukę możesz rozpocząć w dowolnym momencie i z tempem, jaki jest dla Ciebie najlepszy.
                        </p>
                    </div>
                    {form}
                </div>
                {submitted}
            </Box>
        </div>
    );
};

export default Newsletter;
