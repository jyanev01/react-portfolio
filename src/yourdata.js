// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// test

// Projects Icon
// import pokeGen from "./images/hero-pokegen_bg.svg"
// import cockTail from "./images/cocktail_logo.svg"
// import runBuddy from "./images/hero-bg.jpg"
// import weddingPhoto from "./images/Santorini-28.jpg"


// Social Icon
import githubIcon from "./images/github.svg"
// import codepenIcon from "./images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
// import instagramIcon from "./images/instagram.svg"
import linkedInIcon from "./images/LI-In-Bug.png"
import twitterIcon from "./images/icons8-twitter.svg"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jordan ",
  headerTagline: [
    //Line 1 For Header
    "Looking,",
    //Line 2 For Header
    "Learning,",
    //Line 3 For Header
    "Excited to code",
  ],
  //   Header Paragraph
  headerParagraph:
    "Full Stack Web Developer with a decade of experience as a CPA.",

  //Contact Email
  contactEmail: "jordanyanev@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Gregg's List", //Project Title - Add Your Project Title Here
      para:
        "Job posting board using the MERN stack. Final project using user authentication, asynchronous calls, MongoDB, Express.Js, React, Node.JS and Chakra-UI framework.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://media.istockphoto.com/photos/top-view-of-a-white-desktop-concept-job-search-picture-id1279104620?k=20&m=1279104620&s=612x612&w=0&h=Lit4OzCRPW6Z5Pq1L4b9ZjUJvx6McLJySTLnUjJsECE=",
      //Project URL - Add Your Project Url Here
      url: "https://gregs-list-1.herokuapp.com/",
    },
    {
      title: "PokeGen", //Project Title - Add Your Project Title Here
      para:
        "A place where users can create their own pokemon cards.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
      //Project URL - Add Your Project Url Here
      url: "https://desolate-ridge-10974.herokuapp.com/",
    },
    {
      title: "Cocktail Finder", //Project Title - Add Your Project Title Here
      para:
        "Randomly generate a cocktail based on user input of single type of liquor. Great for date nights in or just some inspiration for your next meal.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/22/13/gin-cocktails.jpg?quality=75&width=982&height=726&auto=webp",
        
      //Project URL - Add Your Project Url Here
      url: "https://jyanev01.github.io/Cocktail_Finder/",
    },
    {
      title: "Run Buddy", //Project Title - Add Your Project Title Here
      para:
        "First ever website created; completed with a form input and CSS effects.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s.abcnews.com/images/Health/GTY_two_runners_as_151204_16x9_992.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://jyanev01.github.io/Run-Buddy/",
    },
    {
      title: "Zoo Keepr", //Project Title - Add Your Project Title Here
      para:
        "View and add information to your favorite animals. Introduction to server-side CRUD operations; intorduction to Express.js.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://nationalzoo.si.edu/sites/default/files/newsroom/meixiang.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/jyanev01/zookeepr",
    },
    {
      title: "Biz HTML", //Project Title - Add Your Project Title Here
      para:
        "Refactoring of exisitng webpage for mobile first optimization and asyncronous deployment.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/pasted-image-0.png?resize=549%2C240&ssl=1",
      //Project URL - Add Your Project Url Here
      url: "https://jyanev01.github.io/Refactoring-of-Biz-HTML/",
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
    "Welcome! I am new to coding and a recent graduate of University of Richmond's 24-week coding bootcamp! This has always been a passion of mine and I recently embarked on this journey to pursue my dreams.",
  aboutParaTwo:
    "Prior to joining the bootcamp, I am a graduate of the University of Richmond with a Bachelors of Science in Accountancy. I am currenlty a Certified Public Accountant who works primarily in high net-worth and small business taxation",
  aboutParaThree:
    "My goal is to demonstrate the skills that I have learned during this bootcamp in the hopes of transitioning to a full time software development role. I am constantly learning and looking to fine- tune the skills I have acquired and grow as a developer",
  aboutImage:
    "https://media-exp1.licdn.com/dms/image/C5603AQEQcsV9JoY3Sg/profile-displayphoto-shrink_400_400/0/1638198667686?e=1649894400&v=beta&t=3ffgAg7Wy9n3CUtXOtBWODOWP897aDPh-gLU252F5FQ",

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
    "I am very passionate about technology as it can change our future. I firmly belive that coding is the future and want to actively challenge all professionals to help develop the next generation of professional coders. As our society progresses into being ever more reliant on technology to solve our most pressing issues. Outside of work I love hiking, biking and traveling to new places.",
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
    {
      img: twitterIcon,
      url: "https://twitter.com/home",
    },
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
