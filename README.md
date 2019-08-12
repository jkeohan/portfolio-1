# Portfolio Project

#### Requirements

- Use semantic markup for HTML and CSS, adhering to best practices.
- Use Flexbox to create a multi-column layout.
- Must be responsive for mobile, tablet and desktop
- Include at least one HTML, one CSS and one JavaScript files.
- Stick with the KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles.
- Use JavaScript for DOM manipulation.
- Be deployed and accessible online.
- Must pull in projects via API call from google sheet

#### Necessary Deliverables
- A `README.md` file with the following:
  - Link to wireframe images
  - Technologies used.
  - Your process/approach.
  - Unsolved problems.
  - Your biggest wins and challenges.
- Screenshots of the snippets of code you used to solve particularly interesting problems (think code highlights).
- An in-class demo of the site that shows off the interactions you worked on.
- A carousel whose images slide to the side on a timer, along with indicators that the user can click to navigate to a particular project.

## The Beginning

My portfolio will be built using HTML, CSS, and JavaScript. It will incorporate Bootstrap frameworks - which I'll teach myself in the process - to enhance the site's layout and streamline the build process.

Here's how I started:

Mobile wireframe:

https://res.cloudinary.com/eloise/image/upload/v1565271868/portfolio_images/mobile.jpg

Desktop wireframe:

https://res.cloudinary.com/eloise/image/upload/v1565271862/portfolio_images/desktop.jpg

I'm starting by building the basic layout and adding placeholder content. Once that's in place, I'll add interactive elements such as a carousel for my projects, a contact form, and scrolling functionality that will be connected to the nav bar. I'll also include links to my projects using the Google Sheets API.

My reach goals are to add a customized logo to the mobile version and revise past projects to ensure they're portfolio-ready.

## Here we go:

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Ongoing
|Day 6| Present | Incomplete

## MOSCOW Map

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Mobile first design + desktop layout
- Add functional effects e.g. hamburger menu for nav bar, scrolling functionality that will be connected to the nav bar, and carousel to display projects
- Connect projects to portfolio using Google Sheets API
- Link to LinkedIn and GitHub
- Contact form functionality

#### PostMVP

- Update to prior projects
- Add name logo to mobile layout

## Time frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Layout and Structure | H |  3hrs|           3hrs |          5hrs |
| Hamburger Menu | H |        1hr |       0.5hrs - |        0.5hrs |
| Scrolling/nav  | H |        2hrs |               |         2mins |
| Carousel       | H |        3hrs |              - |       0.5hrs |
| Google Sheets API | H |     2hrs |              - |         2hrs |
| Links to social | H |       0.5hrs |              - |     30mins |
| Form functionality | H |    3hr |              - |        10mins |
| Prior projects | M |       6hrs |              - |            - |
| Name logo | L |             2hrs |              1hr |        1hr |
| Total |       H |        6hrs|             5hrs |           5hrs |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. I'll use this section to document all helper functions I use.

| Function | Description |
| --- | :---: |  
| Example | Example |

## Additional Libraries
  For this project I used the following libraries & packages:

  Bootstrap - provided navbar, 'Projects' carousel, scrollyspy functionality and contact form.
  Formspree - provided form functionality.
  Fontawesome - provided images of Github and Linkedin logos.

## Code Snippet

Code snippet (functionality and description) that I am proud of:

The code snippet below retracts the hamburger menu once a link is clicked. Initially I struggled trying to use the forEach method so I switched to using a for loop and got it working. Once it worked, I refactored my initial function into two different bitesize functions so that I can reuse one or the other if needed (perhaps to loop through the navLinks, for example).   

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

## Change Log

Here I will document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions

Here I will list of all major issues encountered and their resolutions.

**ERROR**: Scrollspy recognized 'active' class on only one element.
**RESOLUTION**: I was applying the data- tags to my 'main' div but had to apply them to the 'body' tag.

**ERROR**: Carousel images 'jumped' down each time a new one loaded.
**RESOLUTION**: I had to add a max-height to each carousel images' container & to the images' parent container.
