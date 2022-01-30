// *** GLOBAL VARIABLES ***
// Projects section to access description
const projects = document.querySelector(".projects-col");

// Access body to stop scrolling behavior
const body = document.querySelector("body");

// Header section 
const header = document.querySelector(".header");

// View footer when last project is scrolled to
const footer = document.querySelector(".footer");
const lastProject = document.getElementById("last-project");



// *** FUNCTIONS ***

//*** Footer opens at bottom after scrolling through projects ****/
const obs = new IntersectionObserver(
    function(entries) {
        // Select the element that we're observing
        const ent = entries[0];
        // if the element is in view, show the footer
        if (ent.isIntersecting) {
            footer.classList.remove("hidden");
        }
        else {
            footer.classList.add("hidden");
        };
}, 
{
    // start by observing root (window) in the viewport 
    root: null,
    // event (footer shows) happens  when all of the last project is in view
    threshold: 0.5,
});

obs.observe(lastProject);


// Open Description
const openDescription = (element, closeBtn, projDesc, projectBox) => {
    element.classList.add("description");
    body.classList.add("no-scroll"); 
    window.scrollTo(0, 0);
    projectBox.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    projDesc.classList.remove("hidden");
}


// Close Description
const closeDescription = (element, closeBtn, projDesc, projectBox) => {
    element.classList.remove("description");
    closeBtn.classList.add("hidden");
    projectBox.classList.remove("hidden");
    projDesc.classList.add("hidden");
    element.scrollIntoView({block: "center"});
    body.classList.remove("no-scroll");   
}


// ***** Events *****

// Click event on description in project  - add try catch block
projects.addEventListener('click', function(e) {
    const desc = e.target;
    const currentNode = desc.parentNode.parentNode;

    if (desc.matches("h2")) {
        // get elements to toggle
        const closeButton = currentNode.querySelector(".btn-close");
        const projectDesc = currentNode.querySelector(".project-description");
        const projectBox = currentNode.querySelector(".project-box");
        // Back to portfolio button
        const backBtn = currentNode.querySelector(".back");

        // If user clicks on "description ->", open description section
        openDescription(currentNode, closeButton, projectDesc, projectBox);

        // Close description if header link is clicked
        header.addEventListener("click", function(e) {
            if (e.target.matches("a") || e.target.matches("p")) {
                closeDescription(currentNode, closeButton, projectDesc, projectBox);
            }
        })

        // Close description if 'back to portfolio' btn is clicked
        backBtn.addEventListener("click", function(e) {
            closeDescription(currentNode, closeButton, projectDesc, projectBox);
        })

        // Close description section if x is clicked
        closeButton.addEventListener("click", function(e) {
            closeDescription(currentNode, closeButton, projectDesc, projectBox);

        })
    }
});



