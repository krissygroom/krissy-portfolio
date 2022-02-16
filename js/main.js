// *** GLOBAL VARIABLES ***
// Projects section to access description
const projects = document.querySelector(".projects-col");

// Access body & html to stop scrolling behavior
const body = document.querySelector("body");
const html = document.querySelector("html");

// View footer when last project is scrolled to
const footer = document.querySelector(".footer");
const lastProject = document.getElementById("last-project");

// *** FUNCTIONS ***

//*** Footer opens at bottom after scrolling through projects ****/
const obs = new IntersectionObserver(
  function (entries) {
    // Select the element that we're observing
    const ent = entries[0];
    // if the element is in view, show the footer
    if (ent.isIntersecting) {
      footer.classList.remove("hidden");
    } else {
      footer.classList.add("hidden");
    }
  },
  {
    // observe root (window) in the viewport
    root: null,
    // event (footer shows) happens  when all of the last project is in view
    threshold: 0.5,
  }
);

obs.observe(lastProject);

// Open Description
const openDescription = (projDesc, projectBox) => {
  projectBox.classList.add("hidden");
  projDesc.classList.add("open-description");
};

// Close Description
const closeDescription = (projDesc, projectBox) => {
  projectBox.classList.remove("hidden");
  projDesc.classList.remove("open-description");
};

// ***** Events *****

// Click event on description in project
projects.addEventListener("click", function (e) {
  const desc = e.target;
  const currentNode = desc.parentNode.parentNode;

  if (desc.matches("h2")) {
    // get elements to toggle off and on
    const projectDesc = currentNode.querySelector(".project-description");
    const projectBox = currentNode.querySelector(".project-box");
    // Back to portfolio button
    const backBtn = currentNode.querySelector(".back");

    // If user clicks on "description ->", open description section
    openDescription(projectDesc, projectBox);

    // Close description if 'back to project' btn is clicked
    backBtn.addEventListener("click", function (e) {
      closeDescription(projectDesc, projectBox);
    });
  }
});
