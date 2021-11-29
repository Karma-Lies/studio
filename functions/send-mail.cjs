const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { validateEmail, validateLength } = require('./helpers/validations.cjs');

const NAME_MIN_LENGTH = 1;
const NAME_MAX_LENGTH = 200;
const DETAILS_MAX_LENGTH = 1e5;

exports.handler = async (event) => {
	console.log(event);

	const body = JSON.parse(event.body);

	try {
		validateLength('Name', body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH);
	} catch (error) {
		return {
			statusCode: 403,
			body: JSON.stringify({
				message: error.message,
			}),
		};
	}

	try {
		validateEmail('Email', body.email);
	} catch (error) {
		return {
			statusCode: 403,
			body: JSON.stringify({
				message: error.message,
			}),
		};
	}

	try {
		validateLength('Details', body.details, DETAILS_MAX_LENGTH);
	} catch (error) {
		return {
			statusCode: 403,
			body: JSON.stringify({
				message: error.message,
			}),
		};
	}

	// Email schema forming
	const message = {
		to: 'tony@karmalies.studio',
		from: 'tony@karmalies.studio', // Verified sender
		subject: `${body.name} - submitted contact form`,
		text: `${body.details}\n\n---\nname: ${body.name}\nemail: ${body.email}\nphone: ${body.phone}\nservices: ${body.selectedServices}`,
	};

	try {
		// Try to send the email
		await sgMail.send(message);
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: 'We received your message, thanks for reaching out!',
			}),
		};
	} catch (error) {
		// Wallow in pain
		console.error(error);

		if (error.response) {
			console.error(error.response.body);
		}

		return {
			statusCode: 500,
			body: JSON.stringify({
				message: 'Whoops! Funky server error :(',
			}),
		};
	}
};
