import { motion } from "framer-motion";
import { styles } from "../Styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div className="">
          <h2 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className="text-[#915eff]">Pankaj</span></h2>
          <p className={`${styles.heroSubText} mt-2 text-white-50`}>
            A Full Stack Developer, love to build and develop<br className="sm:block hidden"/>
            novel, creative, and innovative Web Applications :)
          </p>
        </div>
      </div>

      <ComputersCanvas />

    <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-10">
      <a href="#about">
        <div className="w-[30px] h-[48px] rounded-3xl border-4 border-secondary flex flex-row justify-center items-start p-2">
          <motion.div 
            animate={{
              y:[0,20,0]
            }}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>

    </section>
  )
}

export default Hero