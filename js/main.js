// *** GLOBAL VARIABLES ***
// Projects section to access description
const projects = document.querySelector(".projects-col");

// Access body to stop scrolling behavior
const body = document.querySelector("body");

// Header section 
const header = document.querySelector(".header");

// *** FUNCTIONS ***

// Open Description
const openDescription = (element, desc, closeBtn, projBtn, projDesc) => {
    element.classList.add("description");
    body.classList.add("no-scroll"); 
    window.scrollTo(0, 0);
    projBtn.classList.add("hidden");
    desc.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    projDesc.classList.remove("hidden");
}


// Close Description
const closeDescription = (element, desc, closeBtn, projBtn, projDesc) => {
    element.classList.remove("description");
    closeBtn.classList.add("hidden");
    projBtn.classList.remove("hidden");
    desc.classList.remove("hidden");
    projDesc.classList.add("hidden");
    element.scrollIntoView({block: "center"});
    body.classList.remove("no-scroll");
    
}


// ***** Events *****

// Click event on description in project  - add try catch block
projects.addEventListener('click', function(e) {
    const desc = e.target;
    const currentNode = desc.parentNode;

    if (desc.matches("h2")) {
        // get elements to toggle
        const closeButton = currentNode.querySelector(".btn-close");
        const projectImage = currentNode.querySelector(".project-img");
        const projectDesc = currentNode.querySelector(".project-description");
        // Back to portfolio button
        const backBtn = currentNode.querySelector(".back");

        // If user clicks on "description ->", open description section
        openDescription(currentNode, desc, closeButton, projectImage, projectDesc);

        // Close description if header link is clicked
        header.addEventListener("click", function(e) {
            if (e.target.matches("a") || e.target.matches("p")) {
                closeDescription(currentNode, desc, closeButton, projectImage, projectDesc);
            }
        })

        // Close description if 'back to portfolio' btn is clicked
        backBtn.addEventListener("click", function(e) {
            closeDescription(currentNode, desc, closeButton, projectImage, projectDesc);
        })

        // Close description section if x is clicked
        closeButton.addEventListener("click", function(e) {
            closeDescription(currentNode, desc, closeButton, projectImage, projectDesc);
        })
    }
});




// // toggle Description - not working on close
// const toggleDescription = (openClose, element, desc, closeBtn, projBtn, projDesc) => {
//     if (openClose === "open") {
//         window.scrollTo(0, 0);
//     } else if (openClose === "close") {
//         element.scrollIntoView({block: "center"});
//     }
//     // no idea why this code is breaking when closing
//     // description multiple times??
//     toggleClass(element, "description");
    
//     // X button
//     toggleClass(closeBtn, "hidden");

//     // phone image & description header
//     toggleClass(projBtn, "hidden");
//     toggleClass(desc, "hidden");

//     // description div
//     toggleClass(projDesc, "hidden");

//     toggleClass(body, "no-scroll"); 
// }


// // Toggle classes
// const toggleClass = (element, className) => {
//     if (element.classList.contains(className)) {
//         element.classList.remove(className);
//     } else {
//         element.classList.add(className);
//     }
// }






