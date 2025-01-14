// const punycode = require('punycode/');
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
				publicKey: 'YOUR_PUBLIC_KEY',
			})
			.then(
				() => {
					console.log('Success!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Telephone</label>
			<input type="tel" name="user_telephone" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	);
};
