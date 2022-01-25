// *** GLOBAL VARIABLES ***
// Projects section to access description
const projects = document.querySelector(".projects-col");

// Access body to stop scrolling behavior
const body = document.querySelector("body");

// ***** Events *****

// Click event on description in project  - add try catch block
projects.addEventListener('click', function(e) {
    const desc = e.target;
    const currentNode = desc.parentNode;
    if (desc.matches("h2")) {
        currentNode.classList.add("description");
        body.classList.add("no-scroll"); 
        window.scrollTo(0, 0);

        // add 'X' button
        const closeButton = currentNode.querySelector(".btn-close");
        const projectImage = currentNode.querySelector(".project-img");

        // hide image and description link
        projectImage.classList.add("hidden");
        desc.classList.add("hidden");
        closeButton.classList.remove("hidden");

        // open project description section
        const projectDesc = currentNode.querySelector(".project-description");
        projectDesc.classList.remove("hidden");

        // Close description section if x is clicked
        closeButton.addEventListener("click", function(e) {
            // 1st close description
            currentNode.classList.remove("description");

            closeButton.classList.add("hidden");
            projectImage.classList.remove("hidden");
            desc.classList.remove("hidden");
            projectDesc.classList.add("hidden");
            body.classList.add("no-scroll");
            currentNode.scrollIntoView({block: "center"});
        })
    } else if (body.classList.contains("no-scroll")) {
        body.classList.remove("no-scroll");
    }
});









