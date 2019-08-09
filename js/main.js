/*********** VARIABLES ***************/
const hamburgerMenu = document.getElementById('hamburger-menu');

// when hamburgerMenu is clicked, style each nav-item to be right-aligned
// nav-item container should be width: 50%
// style #hamburger-bio

hamburgerMenu.addEventListener('click', updateHamburgerStyles);





/*********** EVENT LISTENERS ***************/

function updateHamburgerStyles() {
  const hamburgerBio = document.getElementById('hamburger-bio');
  const navLinks = document.getElementsByClassName('nav-link');

  hamburgerBio.style.padding = '5% 15%';
  // hamburgerBio.style.textAlign = 'center';
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.textAlign = 'right';
    navLinks[i].background = 'rgb(0,0,0,0.1';
  }
  // console.log('this is updateHamburgerStyles')
}











/*********** FUNCTION DEFINITIONS ***************/
