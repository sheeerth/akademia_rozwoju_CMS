import React, {useReducer, useState} from 'react';
import Box from "../UI/Box";

const Newsletter = () => {
    const initialValue = {
        name: '',
        email: ''
    }

    const reducer = (currentValue, nextState) => ({...currentValue, ...nextState});
    const [values, setValues] = useReducer(reducer, initialValue);

    const onChange = (e) => {
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
                        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="newsletter-akademia">
                            <input name="bot-field" type="hidden" />
                            <input name="name" required placeholder="Imie" type="text" className="w-input my-2 rounded-lg h-9 px-2 py-3"/>
                            <input name="email" required placeholder="Email" type="email" className="w-input my-2 h-9 rounded-lg px-2 py-3"/>
                            <button className="w-input bg-blue my-2 h-9 rounded-lg text-white">Zapisz się</button>
                        </form>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Newsletter;
