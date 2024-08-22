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
    shopify,
    banking,
    carepulse,
    digitalhippo,
    threejs,
    dycode,
    dysign,
    freelancer,
    upwork,
    sushi,
    premium
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
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "React | NextJS Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "DyCode",
      icon: dycode,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Present",
      points: [
        "Proficient in developing and maintaining dynamic web applications using React.JS and a variety of related technologies.",
        "Experienced in collaborating with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality products. ",
        "Skilled in implementing responsive design principles and ensuring seamless cross-browser compatibility. ",
        "Actively engaged in code reviews, offering constructive feedback to enhance overall team performance and product excellence.",
      ],
    },
    {
      title: "NextJS Developer",
      company_name: "Freelancer.com",
      icon: freelancer,
      iconBg: "#383E56",
      date: "Feb 2022 - Present",
      points: [
        "Engineered and upheld web applications using Next.js and relevant technologies, honing expertise within the specialized domain of NextJS development.",
        "Collaborated seamlessly with designers, product managers, and fellow developers to deliver exceptional digital solutions.",
        "Implemented responsive design principles and ensured seamless cross-browser compatibility for enhanced user engagement.",
        "Contributed actively to code reviews, offering insightful feedback to enhance team performance and product quality.",
      ],
    },
    {
      title: "ReactJS Developer",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Present",
      points: [
        "Developed and maintained web applications leveraging React.js and associated technologies, specializing in the intricacies of ReactJS development.",
        "Worked closely with designers, product managers, and fellow developers to produce high-caliber digital solutions.",
        "Implemented responsive design techniques and guaranteed compatibility across various browsers for optimal user satisfaction.",
        "Participated actively in code reviews, providing valuable feedback to enhance team collaboration and code quality.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mar 2020 - Jan 2023",
      points: [
        "Built and maintained web applications on the Shopify platform, harnessing React.js and associated technologies to excel in the realm of Shopify web development.",
        "Worked closely with designers, product managers, and fellow developers to deliver impactful ecommerce solutions.",
        "Ensured seamless user experiences with responsive design implementation and cross-platform compatibility on Shopify.",
        "Actively participated in code reviews, offering valuable insights to enhance team collaboration and optimize Shopify web projects.",
      ],
    },
    {
      title: "UX/UI Designer",
      company_name: "Dysign",
      icon: dysign,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Present",
      points: [
        "Crafted and curated web applications with a keen focus on user experience and interface design, utilizing Figma and related technologies to excel in the realm of UX/UI design.",
        "Collaborated closely with developers, product managers, and cross-functional teams to deliver intuitive and visually appealing digital solutions.",
        "Ensured seamless user interactions through responsive design implementation and cross-browser compatibility.",
        "Contributed to collaborative design reviews, providing valuable insights to enhance user experience and interface design coherence.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Zandra proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Freelancer.com",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Zandra does.",
      name: "Chris Wright",
      designation: "COO",
      company: "Upwork",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Zandra optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "Shopify",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Banking",
      description:
        "Horizon is a modern banking platform for everyone, offering a sleek and user-friendly web-based interface that allows individuals to securely manage their finances, view account details, and perform transactions seamlessly. It provides a comprehensive and efficient solution for everyday banking needs.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Zod",
          color: "green-text-gradient",
        },
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
      ],
      image: banking,
      source_code_link: "https://banking-gamma-wheat.vercel.app/",
    },
    {
      name: "CarePulse",
      description:
        "CarePulse is a modern healthcare platform designed for seamless doctor appointment management. This web-based application allows users to search for healthcare providers, book appointments, and manage their medical visits effortlessly. Additionally, it features an admin side where doctors can accept, reschedule, and cancel appointments, providing a comprehensive solution for both patients and healthcare professionals.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Appwrite",
          color: "blue-text-gradient",
        },
      ],
      image: carepulse,
      source_code_link: "https://carepulse-healthcare-sigma.vercel.app/",
    },
    {
      name: "DigitalHippo: Premium Marketplace for Verified Digital Assets",
      description:
        "DigitalHippo is our marketplace for high-quality digital assets. This web-based platform allows users to browse, purchase, and manage verified digital assets, ensuring each meets our rigorous quality standards. It provides a streamlined and efficient solution for acquiring top-notch digital resources.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Appwrite",
          color: "blue-text-gradient",
        },
      ],
      image: digitalhippo,
      source_code_link: "https://digitalhippo-production-61b4.up.railway.app/",
    },
    {
      name: "Sushi Restaurant: Convenient Online Ordering for Authentic Japanese Cuisine",
      description:
        "Feel the taste of Japanese foods. Our web-based platform allows users to explore, order, and pay for a wide selection of popular Japanese dishes from this restaurant, providing a convenient and efficient solution for enjoying authentic Japanese cuisine anytime, anywhere.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: sushi,
      source_code_link: "https://sushi-restaurant-alpha.vercel.app/",
    },
    {
      name: "Premium Restaurant: Seamless Reservations for Unforgettable Fine Dining",
      description:
        "Chase the new flavor with our web-based platform that allows users to explore, book, and manage reservations at a premium restaurant. Discover the secret to unforgettable fine dining, with every dish crafted to perfection and every moment designed to delight, providing a seamless and refined dining experience.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: premium,
      source_code_link: "https://premium-restaurant.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };