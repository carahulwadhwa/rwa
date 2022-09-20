import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone";

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

const FormSchema = Yup.object().shape({
	fullName: Yup.string().min(2, "Must be at least 2 characters").max(50, "Must be no longer than 50 characters").required("Full Name is required"),
	email: Yup.string().email("Enter a valid email address").required("Email is required"),
	phone: Yup.string().phone("IN", false, "Enter a valid phone number").required("Phone number is required"),
	message: Yup.string().notRequired(),
});

const AppointmentForm = ({ bg, text }) => {
	let successClasses = "mr-6 my-4 p-4 bg-success-100 text-success-900 rounded-tl-2xl rounded-br-2xl hidden";

	return (
		<Formik
			initialValues={{ fullName: "", email: "", phone: "", message: "" }}
			validationSchema={FormSchema}
			onSubmit={(values, actions) => {
				fetch("/", {
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
					body: encode({ "form-name": "Request Appointment", ...values }),
				})
					.then(() => {
						successClasses += " !block";
						actions.resetForm();
					})
					.catch((err) => {
						actions.setStatus({
							sent: false,
							msg: `Something went wrong... please fix ${err}`,
						});
					})
					.finally(() => actions.setSubmitting(false));
			}}>
			{() => (
				<Form
					name='Request Appointment'
					data-netlify='true'
					data-netlify-honeypot='bot-field'>
					<Field
						type='hidden'
						name='form-name'
					/>
					<Field
						type='hidden'
						name='bot-field'
					/>

					<div className={successClasses}>Thank you! We'll get in touch with you soon.</div>

					<span className='flex flex-col basis-full max-w-full my-6 md:mb-0'>
						<Field
							name='fullName'
							className={`border-b-2 border-solid border-${text} mr-8 bg-${bg} text-${text}`}
						/>
						<label
							className={`font-bold text-${text} text-sm`}
							htmlFor='fullName'>
							Name
						</label>
						<ErrorMessage
							className='bg-error-300 text-sm text-error-900 mr-6 mt-2 p-2'
							component='div'
							name='fullName'
						/>
					</span>

					<span className='flex flex-col basis-full max-w-full my-6 md:mb-0'>
						<Field
							name='email'
							type='email'
							className={`border-b-2 border-solid border-${text} mr-6 bg-${bg} text-${text}`}
						/>
						<label
							className={`font-bold text-${text} text-sm`}
							htmlFor='email'>
							Email
						</label>
						<ErrorMessage
							className='bg-error-300 text-sm text-error-900 mr-6 mt-2 p-2'
							component='div'
							name='email'
						/>
					</span>

					<span className='flex flex-col basis-full max-w-full my-6 md:mb-0'>
						<Field
							name='phone'
							className={`border-b-2 border-solid border-${text} mr-6 bg-${bg} text-${text}`}
						/>
						<label
							className={`font-bold text-${text} text-sm`}
							htmlFor='phone'>
							Phone
						</label>
						<ErrorMessage
							className='bg-error-300 text-sm text-error-900 mr-6 mt-2 p-2'
							component='div'
							name='phone'
						/>
					</span>
					<span className='flex flex-col basis-full max-w-full my-6 md:mb-0'>
						<Field
							name='message'
							as='textarea'
							className={`border-b-2 border-solid border-${text} mr-6 bg-${bg} text-${text}`}
						/>
						<label
							className={`font-bold text-${text} text-sm`}
							htmlFor='message'>
							Message
						</label>
					</span>
					<div className='mt-8 text-center'>
						<button
							className='py-2 px-4 duration-700 bg-green text-white font-bold rounded-tl-xl rounded-br-xl border-2 border-green border-solid hover:bg-white hover:text-green'
							type='submit'
							value='Request an Appointment'>
							Request an Appointment
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AppointmentForm;
