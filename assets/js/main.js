


// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~ CARD VIEW SECTION ~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
function open_card_viewer(card_name, title){
    const encoded_card_name = encodeURIComponent(card_name);
    const encoded_title = encodeURIComponent(title);
    
    window.location.href = `card-viewer.html?id=${encoded_card_name}&title=${encoded_title}`;
}


const recent_work_div = document.getElementById("recent-works")
RECENT_WORKS.forEach(e=>{
    const x = create_project_items(e);
    recent_work_div.appendChild(x);
});
const work_lists = document.getElementsByClassName("r_content");


// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~ TIMELINE SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
const timeline_table = document.querySelector("#timeline table");
let node_dir = 'left';
MY_JOURNEY.forEach(e => {
    let x = create_timeline_item(e, node_dir);
    timeline_table.appendChild(x);
    node_dir = (node_dir == 'left') ? 'right' : 'left';
})




// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~ WINDOW ENENT HANDLER ~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
window.addEventListener("load", function () {
    setEqualHeight(work_lists);
});

window.addEventListener("resize", function () {
    setEqualHeight(work_lists);
});