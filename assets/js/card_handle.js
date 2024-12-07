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

    if (itemId === 'mountains') {
        contentDiv.innerHTML = `
            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            <img src="./images/mountains.jpg" alt="Mountains" style="width:100%">
        `;
    }
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