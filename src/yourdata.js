// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// test

// Projects Icon
import pokeGen from "./images/hero-pokegen_bg.svg"
import cockTail from "./images/cocktail_logo.png"
import runBuddy from "./images/hero-bg.jpg"
import weddingPhoto from "./images/Santorini-28.jpg"


// Social Icon
import githubIcon from "./images/github.svg"
// import codepenIcon from "./images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
// import instagramIcon from "./images/instagram.svg"
import linkedInIcon from "./images/LI-In-Bug.png"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jordan ",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Full Stack Web Developer with a decade of experience as a Certified Public Accountant",

  //Contact Email
  contactEmail: "jordanyanev@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "PokeGen", //Project Title - Add Your Project Title Here
      para:
        "A place where users can create their own pokemon cards.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: pokeGen,
      //Project URL - Add Your Project Url Here
      url: "https://desolate-ridge-10974.herokuapp.com/",
    },
    {
      title: "Cocktail Finder", //Project Title - Add Your Project Title Here
      para:
        "Randomly generate a cocktail based on user input of single type of liquor. Great for date nights in or just some inspiration for your next meal.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: cockTail,
        
      //Project URL - Add Your Project Url Here
      url: "https://jyanev01.github.io/Cocktail_Finder/",
    },
    {
      title: "Run Buddy", //Project Title - Add Your Project Title Here
      para:
        "First ever website created; completed with a form input and CSS effects.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        runBuddy,
      //Project URL - Add Your Project Url Here
      url: "https://jyanev01.github.io/Run-Buddy/",
    },
    {
      title: "Zoo Keepr", //Project Title - Add Your Project Title Here
      para:
        "View and add information to your favorite animals. Introduction to server-side CRUD operations; intorduction to Express.js.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://unsplash.com/photos/OLoIfDsPktY",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/jyanev01/zookeepr",
    },
    {
      title: "Biz HTML", //Project Title - Add Your Project Title Here
      para:
        "Refactoring of exisitng webpage for mobile first optimization and asyncronous deployment.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://jyanev01.github.io/Refactoring-of-Biz-HTML/",
    },
    {
      title: "Gregg's List", //Project Title - Add Your Project Title Here
      para:
        "Job posting board using the MERN stack. Final project using user authentication, asynchronous calls, MongoDB, Express.Js, React, Node.JS and Chakra-UI framework.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mtlankenau/gregs-list",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Welcome! I am a new to coding and a recent graduate of University of Richmond's 24 coding bootcamp! This has always been a passion of mine and I recently embarked on this journey to pursue my dreams.",
  aboutParaTwo:
    "Prior to joining the bootcamp, I am a graduate of the University of Richmond with a Bachelors of Science in Accountancy. I am currenlty a Certified Public Accountant who works primarily in high net-worth and small business taxation",
  aboutParaThree:
    "My goal is to demonstrate the skills that I have learned during this bootcamp in the hopes of transitioning to a full time software development role. I am constantly learning and looking to fine- tune the skills I have acquired and grow as a developer",
  aboutImage:
    weddingPhoto,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: designIcon,
      para:
        "WebDesign",
    },
    {
      img: codeIcon,
      para:
        "Full Stack Frameworks",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Passion",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Open to opportunities:",
  social: [
    // Add Or Remove The Link Accordingly
    { 
      img: githubIcon, 
      url: "https://github.com/jyanev01" 
    },
    { 
      img: linkedInIcon, 
      url: "https://www.linkedin.com/in/jordanyanev/" 
    },
    // {
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
