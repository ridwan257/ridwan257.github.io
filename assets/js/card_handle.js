// get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~ LOAD CONTENT FUNCTION ~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
function loadContent(id) {
    const contentDiv = document.getElementById('content');

    fetch(`./assets/db/${id}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Content not found');
      }
      return response.text();
    })
    .then(html => {
        contentDiv.innerHTML = html;
    })
    .catch(error => {
        contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
    });
}


// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
const title_heading = document.getElementById("page-title");
const itemId = getUrlParameter('id');
const title = getUrlParameter('title');


// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~ WINDOW ENENT HANDLER ~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
window.addEventListener('load', ()=>{
    title_heading.innerText = title;
    loadContent(itemId);
});