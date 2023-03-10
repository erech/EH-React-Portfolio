import '../css/contact.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './src/pages/navbar.js';

function Contact() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <Navbar />
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" {...register('name')} />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register('email')} />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea id="message" {...register('message')} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;