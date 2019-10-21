# My Portfolio

- [View deployed site](http://eloiseressbarrow.com/)
- [Read about my process](https://medium.com/@eloiseressbarrow/building-your-first-website-or-battling-your-inner-demogorgon-40803c82ec25)

## Requirements

- Use semantic markup for HTML and CSS, adhering to best practices.
- Use Flexbox to create a multi-column layout.
- Must be responsive for mobile, tablet and desktop
- Include at least one HTML, one CSS and one JavaScript files.
- Stick with the KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles.
- Use JavaScript for DOM manipulation.
- Be deployed and accessible online.
- Must pull in projects via API call from google sheet

## Project Description

My portfolio will be built using HTML, CSS, and JavaScript. It will incorporate Bootstrap frameworks - which I'll teach myself in the process - to enhance the site's layout and streamline the build process.

Here's how I started:

Mobile wireframe:

https://res.cloudinary.com/eloise/image/upload/v1565271868/portfolio_images/mobile.jpg

Desktop wireframe:

https://res.cloudinary.com/eloise/image/upload/v1565271862/portfolio_images/desktop.jpg

I'm starting by building the basic layout and adding placeholder content. Once that's in place, I'll add interactive elements such as a carousel for my projects, a contact form, and scrolling functionality that will be connected to the nav bar. I'll also include links to my projects using the Google Sheets API.

**UPDATE** Carousel was removed and replaced by cards.

My reach goals are to add a customized logo to the mobile version and revise past projects to ensure they're portfolio-ready.

## MVP

- Mobile first design + desktop layout
- Add functional effects e.g. hamburger menu for nav bar, scrolling functionality that will be connected to the nav bar, and carousel to display projects
- Connect projects to portfolio using Google Sheets API
- Link to LinkedIn and GitHub
- Contact form functionality

## PostMVP

- Update to prior projects
- Add name logo to mobile layout

## Component time frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Layout and Structure | H |  3hrs |            |          6hrs |
| Hamburger Menu | H |         1hr |            |          4hrs |
| Scrolling/nav  | H |        2hrs |            |          3hrs |
| Carousel       | H |        3hrs |            |          4hrs |
| Google Sheets API | H |     2hrs |            |          4hrs |
| Links to social | H |     0.5hrs |            |        30mins |
| Form functionality | H |     3hr |            |        10mins |
| Prior projects | M |        6hrs |            |             - |
| Name logo | L |             2hrs |            |           1hr |
| Total |       H |        22.5hrs|             |  22hrs 40mins |

## Additional Libraries
  For this project I used the following libraries & packages:

  Bootstrap - provided navbar, 'Projects' carousel, scrollyspy functionality and contact form.
  Formspree - provided form functionality.
  Fontawesome - provided images of Github and Linkedin logos.

## Code Snippet

I was proud of the code snippet below - it retracts the hamburger menu once a link is clicked. Initially I struggled trying to use the forEach method so I switched to using a for loop and got it working. Once it worked, I refactored my initial function into two different bitesize functions so that I can reuse one or the other if needed (perhaps to loop through the navLinks, for example).   

```
function removeHamburgerMenu() {
  const navLinks = document.getElementsByClassName('nav-link');

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
      removeHamburgerStyles();
    })
  }
}

function removeHamburgerStyles() {
  const navCollapse = document.querySelector('.navbar-collapse');
  const hamburgerMenu = document.getElementById('hamburger-menu');

  hamburgerMenu.classList.add('collapsed');
  hamburgerMenu.setAttribute('aria-expanded', 'false');
  navCollapse.classList.remove('show');
}
```

## Issues and Resolutions

**ERROR**: Scrollspy recognized 'active' class on only one element.
**RESOLUTION**: I was applying the data- tags to my 'main' div but had to apply them to the 'body' tag.

**ERROR**: Carousel images 'jumped' down each time a new one loaded.
**RESOLUTION**: I had to add a max-height to each carousel images' container & to each container's parent container.
