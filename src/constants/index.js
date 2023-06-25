import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ihx,
    cryptether,
    hosalot,
    covidtracker
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "IHX Private Limited",
      icon: ihx,
      iconBg: "#383E56",
      date: "January 2023 - May 2023",
      points: [
        "Created and implemented Web APIs for SMS OTP triggering enabling 2FA OTP for Login in website leading to increased security.",
        "Implemented single-time Email Verification popup for login for user authorization reducing security risks.",  
        "Created and implemented wrapper Web APIs for verification and downloading Co-Win certificate for users"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CryptEthers",
      description:
        "Web3 platform that allows users to Send and receive Ethereum. The Project is coded in ReactJs, Solidity and NodeJs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "black-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: cryptether,
      source_code_link: "https://github.com/PankajSharma0308/CryptEthers",
    },
    {
      name: "Hosalot",
      description:
        "University website for streamlined hostel management. Frontend designed with HTML, CSS, and JavaScript, connected to Node.js using Express",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: hosalot,
      source_code_link: "https://github.com/PankajSharma0308/Hosalot",
    },
    {
      name: "Covid Tracker",
      description:
        "WebApp made using EJS, Nodejs and css+html. WebApp is containerized using docker and is deployed in the AWS Elastic Beanstalk.",
      tags: [
        {
          name: "Ejs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: covidtracker,
      source_code_link: "https://github.com/PankajSharma0308/covidTracker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };