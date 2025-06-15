


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
// ~~~~~~~~~~~~~~~~~~~~~~~ SKILL SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
const skill_section = document.getElementById("skill-section");
SKILLS.forEach(e => {
    const elem = create_skill_items(e);
    skill_section.appendChild(elem);
});


// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~ EMAIL SUBMIT  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
const contact_form = document.getElementById('contact-form');
const mail_btn = document.getElementById('mail-submit-btn');
contact_form.addEventListener('submit', (event)=>{
    event.preventDefault();

    if (contact_form.checkValidity()) {
        const params = {
            from_name : document.getElementById("mail-name").value,
            reply_to : document.getElementById("mail-addr").value,
            subject : document.getElementById("mail-sub").value,
            message : document.getElementById("mail-msg").value,
        }
        mail_btn.classList.add('w3-disabled');

        emailjs.send("rid_88738242394", "template_kd2w2wy", params)
        .then(()=>{
            alert("Your mail has been sent!");
            mail_btn.classList.remove('w3-disabled');
            contact_form.reset();
        });
        
    } else {
        alert("Please fill in all required fields correctly.");
    }
    

    
});
// ==================================================================
// ~~~~~~~~~~~~~~~~~~~~~ WINDOW ENENT HANDLER ~~~~~~~~~~~~~~~~~~~~~~~
// ==================================================================
window.addEventListener("load", function () {
    setEqualHeight(work_lists);
});

window.addEventListener("resize", function () {
    setEqualHeight(work_lists);
});