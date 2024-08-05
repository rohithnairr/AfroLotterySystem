"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xqazqnyd");
    if (state.succeeded) {
        return <p className='text-white font-mono pt-24 text-4xl'>Thanks for your application. We shall get in touch with you soon.</p>;
    }
    return (
        <form className='text-white font-light' onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-1 gap-4 lg:mt-16 mt-16 sm:grid-cols-1 md:grid-cols-2 text-grey-900 border border-red-500 max-w-100 p-2 rounded-lg lg:p-12">
                <label>
                    Full Name
                </label>
                <input className='text-black py-2 mb-4 rounded-lg'
                    id="full_name"
                    type="text"
                    name="full_name"
                    required
                />
                <label>
                    Email Address
                </label>
                <input className='text-black py-2 mb-4 rounded-lg'
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label>
                    Contact Number
                </label>
                <input className='text-black py-2 mb-4 rounded-lg'
                    id="contact_number"
                    name="contact_number"
                    type="tel"
                    pattern="[0-9]+"
                    required
                />
                <ValidationError
                    prefix="Contact Number"
                    field="contact_number"
                    errors={state.errors}
                />
                <label>
                    Business name
                </label>
                <textarea className='text-black py-2 mb-4 rounded-lg'
                    id="Business Name"
                    name="Business Name"
                />
                <ValidationError
                    prefix="Contact Number"
                    field="Contact Number"
                    errors={state.errors}
                />

                <label>
                    Any previous experience in Sales, Gaming or any other relevant field, please describe?
                </label>
                <textarea className='text-black py-2 mb-4 rounded-lg'
                    id="Answer1"
                    name="Answer1"
                />
                <label>
                    Residential address
                </label>
                <textarea className='text-black py-2 mb-4 rounded-lg'
                    id="Residential"
                    name="Residential"
                />

                <label>
                    Are you interested in 
                </label>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="state_cordinator"
                        name="role_interest"
                        value="state_cordinator"
                        className="text-red-500"
                    />
                    <label htmlFor="state_cordinator" className="ml-2">State Cordinator &#40; responsible for a whole or part of a state &#41;</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="super_agent"
                        name="role_interest"
                        value="super_agent"
                        className="text-red-500"
                    />
                    <label htmlFor="super_agent" className="ml-2">Super Agent &#40; responsible for designated area/kiosks &#41;</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="kiosk_operator"
                        name="role_interest"
                        value="kiosk_operator"
                        className="text-red-500"
                    />
                    <label htmlFor="kiosk_operator" className="ml-2">Kiosk operator &#40; responsible for operating out game terminals and offline plays &#41;</label>
                </div>

                <button className='text-red-500 mt-4 font-bold text-center px-4 py-4 border max-w-72 rounded-3xl border-red-500 hover:bg-red-500 hover:text-white' type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </div>
        </form>
    );
}
