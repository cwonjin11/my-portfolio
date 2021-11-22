// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Wonjin Cho",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me and Skills 🖥";
const about = {
  paragraph:
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. ",
    [
    `Flatiron School : Software Engineering (2021) 📓`, 
    `UMBC : Financial Economics(BS) (2011) 🎓`,
    `Former Project manager & Finance analyst 🏦`,
    `Love to learn new things ✏️`,
    `Responsibility is my everything 🚨`
    ]
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Ruby on Rails",
    // svg: '',
    faClass: "fas fa-gem",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js-square",
    // <FontAwesomeIcon icon="fa-brands fa-js-square" />
  },
  {
    name: "React.js",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Bootstrap",
    // svg: '',
    faClass: "fab fa-bootstrap",
  },
  {
    name: "SQL",
    // svg: '',
    faClass: "fas fa-database",
  },
  


];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects 🗃";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Lego Displayer",
    skills: ["React, Ruby on Rails, Javascript, HTML, CSS"],
    url: "https://drive.google.com/file/d/12tC1mxwQ1V_FhXtfgZ-8R8ry3aLe0ocW/view?usp=sharing",
    github: "https://github.com/cwonjin11/React-Redux-Project-lego-displayer-frontend",
    // image: "https://drive.google.com/drive/folders/1ps5U7YwIS9qEt90uhu8TNFbbu1GShaTe?usp=sharing",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Dinosaur Flash Card",
    skills: ["Javascript, Ruby on Rails, HTML, CSS"],
    url: "https://drive.google.com/file/d/1K6elB_7EcpeyMndoADfOWIe2EH-KV9u3/view",
    github: "https://github.com/cwonjin11/JS-Rails-Project-Frontend",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Rate my Hairstylist",
    skills: ["Ruby on Rails, HTML, CSS, JS"],
    url: "https://drive.google.com/file/d/1Qe1-ygtGggFIlaVsYm8m4GS6fW96FGp3/view",
    github: "https://github.com/cwonjin11/rate-my-hairstylist",
    
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Vehicle Organizer",
    skills: ["Ruby, Sinatra, HTML, CSS, JS"],
    url: "https://drive.google.com/file/d/1LP8sa1N1waOHuNjtfv_SAXtvKReinEiO/view?usp=sharing",
    github: "https://github.com/cwonjin11/vehicles-organizer-sinatra",
  }
  // {
  //   // Add image in './styles/images.css' in #project5
  //   id: "project5",
  //   name: "Project 5",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  //   github: "https://github.com/cwonjin11/React-Redux-Project-lego-displayer-frontend",
  // },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Misc Projects 🗂";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Log Parser : Ruby on Rails web app",
    url: "https://github.com/cwonjin11/log-parser",
  }
  // {
  //   // Add image in './styles/images.css' in #misc2
  //   id: "misc2",
  //   name: "Miscellaneous 2",
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #misc3
  //   id: "misc3",
  //   name: "Miscellaneous 3",
  //   url: "https://github.com/kaustubhai",
  // },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch 📱";
const contact = {
  pitch:
    [
    "Please feel free to email me to get connected.", 
    "Click LinkedIn and Github icons for more details!",
    "Review my resume and let's get in touch!"
    ], 
  copyright: "Wonjin Cho",
  contactUrl: "https://formspree.io/f/mdoyqblz",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/cwonjin11",
  linkedin: "https://www.linkedin.com/in/wonjin-cho-987b4219b/",
  resume: "https://drive.google.com/file/d/1Df4NYOjnBnFf7UqHJW4KRxcHY7XZswCk/view?usp=sharing"
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
