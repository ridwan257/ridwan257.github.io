


// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~ CARD VIEW SECTION ~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
function open_card_viewer(card_name){
    window.location.href = `card-viewer.html?id=${card_name}`;
}




// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~ TIMELINE SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================

let my_journey = [
    {
        title : "Started Master's Degree",
        subtitle : [
            "<strong>Major:</strong> Genetic Engineering and Biotechnology",
            "University of Dhaka"
        ],
        date : "Sep, 2023"
    },
    {
        title : "Completed Undergraduation",
        subtitle : [
            "<strong>Major:</strong> Genetic Engineering and Biotechnology",
            "University of Dhaka"
        ],
        date : "Jul, 2023"
    },
    {
        title : "Enrolled to Undergraduate Course",
        subtitle : [
            "<strong>Major:</strong> Genetic Engineering and Biotechnology",
            "University of Dhaka"
        ],
        date : "Jan, 2019"
    }
]


const timeline_table = document.querySelector("#timeline table");
let node_dir = 'left';
my_journey.forEach(e => {
    let x = create_timeline_item(e, node_dir);
    timeline_table.append(x);
    node_dir = (node_dir == 'left') ? 'right' : 'left';
})