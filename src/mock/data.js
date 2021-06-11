import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tosin | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Tosin's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Tosin',
  subtitle: "I'm a Fullstack Developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Tosin.jpg',
  paragraphOne:
    "I'm a self-taught full-stack developer, with dynamic problem-solving skills and approaches.",
  paragraphTwo:
    'Always ready to adapt to project specifications, very particular about optimized performance, highly responsive app, and best user experience.',
  paragraphThree: "I'm driven by passion and willingness to learn.",
  resume:
    'https://firebasestorage.googleapis.com/v0/b/tosinport.appspot.com/o/Tosin-Ojo-Resume.pdf?alt=media&token=6675f913-53cb-4215-a7db-b49fa8476740', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Agrochainer',
    info:
      'E-commerce for shopping various agro-allied products, with fully functional authentication.',
    info2: 'Built with ReactJs, Paystack, and firebase authentication.',
    url: 'https://agrochainer.firebaseapp.com/',
    repo: 'https://github.com/Tosin-Ojo/Agrochainer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Chat App',
    info: 'A simple web app for real-time messaging.',
    info2: 'Built with NodeJs, ExpressJs, Handlebars, Socket.io, Mustache and Heroku.',
    url: 'http://tosin-node-v3-chat-app.herokuapp.com/',
    repo: 'https://github.com/Tosin-Ojo/node-v3-chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Dry Me',
    info: 'Through API calls the weather forecast of input location is returned.',
    info2: 'Built with NodeJs, ExpressJs, Handlebars, and Heroku.',
    url: 'http://tosin-weather-application.herokuapp.com/',
    repo: 'https://github.com/Tosin-Ojo/node3-weather-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Emesher',
    info: 'A dynamic and sociable web app for buyers and sellers.',
    info2: 'Technologies: ReactJs, firebase storage, and authentication.',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'tosinojo1996@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/t0sin0j0',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/oluwatosin-adebayo-5b34831a6/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Tosin-Ojo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
