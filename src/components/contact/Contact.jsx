import React, { useRef, useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [success, setSuccess] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rl696wr', 'template_7n8qcfg', form.current, 'c_u6-urCZFihNSh8B')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleClose = () => {
        setSuccess(false)
    }
  

  return (
    <div className='p-20'>
        <div className='mb-5'>
            <p className='mb-4 pt-10 text-4xl font-extrabold text-center md:text-5xl lg:text-6xl text-white'>Contact Us</p>
            <p className='text-center text-white'>If you have any questions or concerns, please fill out the form below and our team will reach out to you within a few hours.</p>
        </div>
        <div className='p-30'>
            <Card margin="0 auto" padding="50px">
            <form ref={form} onSubmit={sendEmail}>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name='user_email' className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name='firstname' className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name='lastname' className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" name='phone_number' className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" required>Phone number</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name='company' className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" required>Company</label>
                </div>
            </div>
            
            <textarea name="message" rows="4" className="mb-5 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." required></textarea>
            {success && (

                    <div onClick={handleClose} className="cursor-pointer mb-5 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                        <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                        <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
                    </div>
            )}
            <Button type='submit' title="Send Message"/>
            </form>
            </Card>
        </div>
    </div>
  )
}

export default Contact