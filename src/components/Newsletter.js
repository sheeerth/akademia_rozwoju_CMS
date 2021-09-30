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

    return (
        <div className="m-auto w-container p-8">
            <Box>
                <div className="flex flex-row p-4">
                    <div className="flex flex-col mr-8">
                        <h3 className="mb-4 font-bold text-2xl">Chcesz próbkę naszej pracy?</h3>
                        <p className="font-medium text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ac varius risus elementum mi sed turpis. Id eget vitae id proin.
                            Lectus leo, nisi, felis vestibulum quis.
                            Feugiat pellentesque massa sociis praesent ut mi eu velit venenatis.
                        </p>
                    </div>
                    <div className="ml-8">
                        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="newsletter-akademia" onSubmit={handleSubmit}>
                            <input name="bot-field" type="hidden" onChange={handleChange}/>
                            <div>
                                <input name="name" id="name" required placeholder="Imie" type="text" onChange={handleChange} className="w-input my-2 rounded-lg h-9 px-2 py-3"/>
                            </div>
                            <div>
                                <input name="email" id="email" required placeholder="Email" type="email" onChange={handleChange} className="w-input my-2 h-9 rounded-lg px-2 py-3"/>
                            </div>
                            <button className="w-input bg-blue my-2 h-9 rounded-lg text-white">Zapisz się</button>
                        </form>
                    </div>
                </div>
                {submitted}
            </Box>
        </div>
    );
};

export default Newsletter;
