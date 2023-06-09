import {useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../Styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const VITE_APP_TO_EMAIL = import.meta.env.VITE_APP_TO_EMAIL;
const VITE_APP_MY_NAME = import.meta.env.VITE_APP_MY_NAME;
const VITE_APP_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const VITE_APP_EMAILJS_GMAIL_SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_GMAIL_SERVICE_ID;
const VITE_APP_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      VITE_APP_EMAILJS_GMAIL_SERVICE_ID,
      VITE_APP_EMAILJS_TEMPLATE_ID, 
      {
        from_name: form.name,
        to_name: VITE_APP_MY_NAME,
        from_email: form.email,
        to_email: VITE_APP_TO_EMAIL,
        message: form.message.concat(' | '+form.email)
      },
      VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank You. I will get back to you ASAP. Trust me.");

        setForm({
          name: "",
          email: "",
          message: ""
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Uh Oh, Something Went Wrong.");
      });
  };


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in Touch
        </p>
        <h4 className={styles.sectionHeadText}>Contact.</h4>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
                outlined-none border-none font-medium'
            /> 
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
                outlined-none border-none font-medium'
            /> 
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7' 
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Write a Message."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
                outlined-none border-none font-medium'
            /> 
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
             shadow-md shadow-primary rounded-xl' 
          >
            {loading ? "Whhheeeeee...(sending)" : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")