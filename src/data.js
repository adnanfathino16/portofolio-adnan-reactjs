// portfolio image
import bookingApp from "./assets/img/portfolio/Booking-App-adnbng.png";
import mernchat from "./assets/img/portfolio/mern-chat.jpg";
import landingPage3 from "./assets/img/portfolio/products-landing-page3.jpg";
import estateWeb from "./assets/img/portfolio/estate-web.jpg";
import landingPage2 from "./assets/img/portfolio/products-landing-page2.jpg";
import mernCrudImage from "./assets/img/portfolio/mern-crud-image.jpg";
import mernCrud from "./assets/img/portfolio/mern-crud.jpg";
import landingPage1 from "./assets/img/portfolio/kopinangkau.jpg";

// skills image
import html from "./assets/img/skills/HTML.svg.webp";
import css from "./assets/img/skills/css.svg.webp";
import typescript from "./assets/img/skills/Typescript_logo_2020.svg.png";
import javascript from "./assets/img/skills/js.svg.webp";
import tailwindcss from "./assets/img/skills/Tailwindcss.svg.webp";
import vite from "./assets/img/skills/Vitejs-logo.svg.png";
import reactjs from "./assets/img/skills/React-icon.svg.png";
import figma from "./assets/img/skills/Figma-logo.svg";
import nodejs from "./assets/img/skills/nodejs.svg.webp";
import npm from "./assets/img/skills/2560px-Npm-logo.svg.png";
import expressjs from "./assets/img/skills/Expressjs.svg.webp";
import mongodb from "./assets/img/skills/Mongodb.svg.webp";
import github from "./assets/img/skills/github.svg.webp";
import git from "./assets/img/skills/Git.svg.webp";
import bootstrap from "./assets/img/skills/Bootstrap.svg.webp";

export const navData = [
  {
    list: "Beranda",
    link: "#home",
  },
  {
    list: "About Me",
    link: "#about",
  },
  {
    list: "Portfolio",
    link: "#portfolio",
  },
  {
    list: "Skills",
    link: "#skills",
  },
  {
    list: "Contact",
    link: "#contact",
  },
];

export const portfolioData = [
  {
    link: "https://adn-booking-app.vercel.app",
    image: bookingApp,
    name: "MERN Booking App",
    fitur: "auth login jwt, crud plus image, Booked",
    teknologi: "Frontend (ReactJS, TailwindCSS, Axios). Backend (MongoDB Atlas, Mongoose, ExpressJS, Bcrypt, Cookie-parser, CORS, dotenv, JWT, image-downloader)",
    github: "https://github.com/adnanfathino16/MERN_Booking_App",
    visit: true,
    delay: 400,
  },
  {
    link: "#",
    image: mernchat,
    name: "MERN Chat",
    fitur: "auth login jwt, chat realtime, send text and picture, notifikasi online and offline user.",
    teknologi: "Frontend (Vite ReactJS, NodeJS, TailwindCSS, Axios, Lodash). Backend ( MongoDB Atlas, ExpressJS, Bcrypt, Cookie-parser, CORS, dotenv, JWT, Mongoose, Websocket (ws))",
    github: "https://github.com/adnanfathino16/MERN_Chat",
    visit: false,
    delay: 600,
  },
  {
    link: "https://products-landing-page-eight.vercel.app/",
    image: landingPage3,
    name: "Products Landing Page 3",
    fitur: "Website single page untuk mempromosikan suatu produk.",
    teknologi: "Vite ReactJS, TailwindCSS, Figma, React-icons, Swiper, AOS, undraw.co",
    github: "https://github.com/adnanfathino16/Products-landing-page",
    visit: true,
    delay: 400,
  },
  {
    link: "https://sewrum.vercel.app/",
    image: estateWeb,
    name: "Estate Website",
    fitur: "Website yang mempromosikan rumah dan apartment sesuai keinginan user mulai dari negara, jenis dan harga.",
    teknologi: "React.JS dan TailwindCSS",
    github: "https://github.com/adnanfathino16/sewa-rumah-web",
    visit: true,
    delay: 600,
  },
  {
    link: "https://adnanbank.vercel.app/",
    image: landingPage2,
    name: "Products Landing Page 2",
    fitur: "Website single page untuk mempromosikan suatu produk",
    teknologi: "React.JS dan TailwindCSS",
    github: "https://github.com/adnanfathino16/landing-page-hookbank",
    visit: true,
    delay: 400,
  },
  {
    link: "https://adn-crud-image.vercel.app/",
    image: mernCrudImage,
    name: "MERN CRUD Image",
    fitur: "Website CRUD + image",
    teknologi: "MERN stack dan TailwindCSS",
    github: "https://github.com/adnanfathino16/client-crud-image",
    visit: true,
    delay: 600,
  },
  {
    link: "https://adn-mern-crud.vercel.app/",
    image: mernCrud,
    name: "MERN CRUD",
    fitur: "Website CRUD",
    teknologi: "MERN stack dan TailwindCSS",
    github: "https://github.com/adnanfathino16/MERN_CRUD",
    visit: true,
    delay: 400,
  },
  {
    link: "https://adnan-kopinangkau.vercel.app/",
    image: landingPage1,
    name: "Landing Page CoffeeShop",
    fitur: "Website single page untuk mempromosikan suatu produk",
    teknologi: "HTML, CSS, dan Javascipt",
    github: "https://github.com/adnanfathino16/kedai-kopi-nangkau",
    visit: true,
    delay: 600,
  },
];

export const skillData = [
  { image: html, name: "html", delay: 100 },
  { image: css, name: "css", delay: 300 },
  { image: typescript, name: "typescript", delay: 500 },
  { image: javascript, name: "javascript", delay: 700 },
  { image: tailwindcss, name: "tailwindcss", delay: 900 },
  { image: vite, name: "vite", delay: 1100 },
  { image: reactjs, name: "reactjs", delay: 1300 },
  { image: figma, name: "figma", delay: 1500 },
  { image: nodejs, name: "nodejs", delay: 1700 },
  { image: npm, name: "npm", delay: 1900 },
  { image: expressjs, name: "expressjs", delay: 2100 },
  { image: mongodb, name: "mongodb", delay: 2300 },
  { image: github, name: "github", delay: 2500 },
  { image: git, name: "git", delay: 2700 },
  { image: bootstrap, name: "bootstrap", delay: 2900 },
];
