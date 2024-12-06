function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}



function create_timeline_item(item_object, node_dir){
    // <tr>
    //     <td class="w3-border-right w3-right-align">
    //         <p class="timeline-title">Started Master's Degree</p>
    //         <p class="timeline-subtitle"><strong>Major:</strong> Genetic Engineering and Biotechnology</p>
    //         <p class="timeline-subtitle">University of Dhaka</p>
    //         <p class="timeline-date">Sep, 2023</p>
    //     </td>
    //     <td></td>
    // </tr>

    const class_dir = (node_dir == 'left') ? 'right' : 'left';
  
    const tr = document.createElement('tr');
    const item_node = document.createElement('td');
    item_node.classList.add(`w3-border-${class_dir}`, `w3-${class_dir}-align`);

    let p_elem = document.createElement('p');
    
    p_elem.classList.add("timeline-title")
    p_elem.innerHTML = item_object.title;
    item_node.appendChild(p_elem);

    item_object.subtitle.forEach(e => {
        let p_elem = document.createElement('p');
        p_elem.classList.add("timeline-subtitle");
        p_elem.innerHTML = e;
        item_node.appendChild(p_elem);
    });

    p_elem = document.createElement('p');
    p_elem.classList.add("timeline-date")
    p_elem.innerHTML = item_object.date;
    item_node.appendChild(p_elem);

    if(node_dir == 'left'){
        tr.appendChild(item_node);
        tr.appendChild(document.createElement('td'));
    } else{
        tr.appendChild(document.createElement('td'));
        tr.appendChild(item_node);
    }
    
    return tr;
}