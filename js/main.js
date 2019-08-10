/*********** VARIABLES ***************/
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementsByClassName('nav-link');

/************* LINKING GOOGLE SHEETS **********/
let originalURL =
'https://docs.google.com/spreadsheets/d/1NydoL_oDQr2cmgVhuqgbiOQpwQCJZmI5-VkcVMgmJ5Q/edit#gid=0'

// ID COMES FROM THE URL THAT IS IN THE ADDRESS BAR ONCE THE SHEET HAS BEEN CREATED/SHARED
let id =  '1NydoL_oDQr2cmgVhuqgbiOQpwQCJZmI5-VkcVMgmJ5Q'

// BELOW URL IS HOW GOOGLE ALLOWS US TO ACCESS THE SHARED FILE AS JSON
let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

// FETCH GOOGLE SHEETS API
fetch(source)
  .then (res => res.json())
  .then (data => {

     let projects = data.feed.entry.map( d => {
       return {
          title: d.gsx$title.$t,
          image: d.gsx$image.$t,
          description: d.gsx$description.$t
       }
     })
     // console.log('this is  projects', projects)
     createCards(projects)
})

/*********** EVENT LISTENERS & FUNCTION CALLS ***************/
hamburgerMenu.addEventListener('click', updateHamburgerStyles);
// removeHamburgerMenu();

/*********** FUNCTION DEFINITIONS ***************/

function updateHamburgerStyles() {
  const hamburgerBio = document.getElementById('hamburger-bio');

  hamburgerBio.style.padding = '5% 15%';
  hamburgerBio.style.textAlign = 'center';
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.textAlign = 'center';
  }
}

// function removeHamburgerMenu() {
//   // grab nav links
//   // if a nav link is clicked, toggle the hamburger menu
//   const navCollapse = document.querySelector('.navbar-collapse');
//   console.log('this is navCollapse', navCollapse)
//   navLinks.forEach( (e, i) => {
//     e.addEventListener('click', () => {
//       hamburgerMenu.classList.add('collapsed');
//       hamburgerMenu.setAttribute('aria-expanded', 'false');
//       navCollapse.classList.remove('show');
//     })
//   })
// }

/********* CREATE CAROUSEL CARDS **********/
class Card {
  constructor(obj) {
    this.title = obj.title
    this.image = obj.image
    this.description = obj.description
  }

  render() {
// target carousel-inner (container for all carousel-items) & create div that will hold each image
    const carouselInner = document.querySelector('.carousel-inner');
    console.log(carouselInner);
  // create div that holds each carousel image
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('carousel-item');
    cardContainer.setAttribute('data-touch', 'true');
// create img element for & add current image
    const image  = document.createElement('img')
    image.setAttribute('src', this.image)
    image.classList.add('d-block', 'w-100')
// creates class for content and adds current card description to it
    const cardContent = new CardContent(this.description)
    console.log('this is cardContent: ', cardContent)
// appends img element to div element .card-image
    cardContainer.appendChild(image)
// renders and appends class card (description) to div element card
    cardContainer.appendChild(cardContent.render())
// appends div element card to div element container
    carouselInner.appendChild(cardContainer)
// returns div element container
    return cardContainer;
  } // end of render()
} // end of class Card

class CardContent {
  constructor(desc) {
    this.desc = desc
  }
  render() {
    // console.log('this is description: ', this.desc)
    // creates a div for card content (description of project)
    const cardContent = document.createElement('div')
// adds class card-content to above div
    cardContent.classList.add('card-content');

// creates p tag to add description text
    const paragraph = document.createElement('p')
    paragraph.innerText = this.desc

    cardContent.appendChild(paragraph)
    return cardContent
  } // end of render()
} // end of class CardContent

function createCards(projects) {
  const projectDiv = document.querySelector('.carousel-inner')
  projects.forEach( obj => {
    let card = new Card(obj)
    // console.log('this is card', card)
    projectDiv.appendChild(card.render())
  })
  document.querySelectorAll('.carousel-item')[0].classList.add('active');
}
