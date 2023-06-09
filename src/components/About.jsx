import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../Styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from "../hoc/SectionWrapper";



const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
        className='w-full green-pink-gardient p-[1px] rounded-[2px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h3 className={styles.sectionHeadText}>Overview.</h3>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have always been curious and excited to learn and apply my knowledge in new 
        and upcoming technologies and finance from childhood. I always knew that I wanted to be in the tech domain.
        Throughout my internship and academic projects, I have had the opportunity to work on diverse projects that
        have honed my technical expertise. Be it new and upcoming technologies like blockchain, cryptocurrency, 
        IoT or more fundamental skills like C# and .NET. These experiences taught me the power of effective 
        communication and teamwork, allowing me to seamlessly integrate into cross-functional teams and deliver results. 
        As an engineer, I thrive in environments that encourage innovation and continuous learning.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")