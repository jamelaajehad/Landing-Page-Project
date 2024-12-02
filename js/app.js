/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Select all sections in the document
const pageSections = document.querySelectorAll('section');

// Select the navigation menu container
const navigationMenu = document.getElementById('navbar__list');

/**
 * Function to dynamically generate the navigation menu
 */
const generateNavbar = () => {
  pageSections.forEach(section => {
    const sectionID = section.id;
    const sectionName = section.getAttribute('data-nav');

      // Create a list item for the navigation menu
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${sectionID}" class="menu__link">${sectionName}</a>`;
    navigationMenu.appendChild(listItem);
  });
};


/**
 * Function to highlight the active section and its corresponding navigation link
 */
const highlightActiveSection = () => {
  pageSections.forEach(section => {
    const sectionRect = section.getBoundingClientRect();

    
    if (sectionRect.top >= 0 && sectionRect.top < window.innerHeight / 2) {
     
      pageSections.forEach(sec => sec.classList.remove('your-active-class'));
      section.classList.add('your-active-class');

      
      const links = document.querySelectorAll('.menu__link');
      links.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
};

/**
 * Function to add smooth scrolling behavior to navigation links
 */
const smoothScroll = () => {
  navigationMenu.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
      const targetSection = document.querySelector(event.target.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

generateNavbar(); 
// Add a scroll event listener to highlight the active section
document.addEventListener('scroll', highlightActiveSection);
smoothScroll(); 