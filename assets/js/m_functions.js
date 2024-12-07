

function setEqualHeight(class_list) {
    let max_height = 0;

    for (let i = 0; i < class_list.length; i++) {
        class_list[i].style.height = 'auto';
    }

    for (let i = 0; i < class_list.length; i++) {
        let h = class_list[i].offsetHeight;
        if (h > max_height) {
            max_height = h;
        }
    }

    for (let i = 0; i < class_list.length; i++) {
        class_list[i].style.height = max_height + 'px';
    }
}


function create_project_items(item_object) {
    // <div class="w3-third w3-container w3-margin-bottom">
    //   <div class="r_content w3-white">
    //     <img src="./images/mountains.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
    //     <div class="w3-container">
    //       <p><b>Lorem Ipsum</b></p>
    //       <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
    //     </div>
    //   </div>
    // </div>

    const main_div = document.createElement('div');
    main_div.classList.add("w3-third", "w3-container", "w3-margin-bottom");

    const f_div = document.createElement('div');
    f_div.classList.add("r_content", "w3-white", "w3-hover-shadow");
    f_div.onclick = () => open_card_viewer(item_object.id, item_object.title);


    const img = document.createElement('img');
    img.src = item_object.src;
    img.classList.add("w3-hover-opacity");
    img.style.width = "100%";
    img.alt = "Img";
    f_div.appendChild(img); // flushing

    const content_div = document.createElement('div');
    content_div.classList.add("w3-container");
    // content_div.onclick = () => open_card_viewer(item_object.id, item_object.title);

    const h5 = document.createElement('h5');
    h5.innerHTML = item_object.title;
    content_div.appendChild(h5); // flushing

    item_object.desc.forEach(e => {
        const p = document.createElement('p');
        p.innerHTML = e;
        content_div.appendChild(p);
    });

    f_div.appendChild(content_div);
    main_div.appendChild(f_div);

    return main_div;
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


function send_mail(){
    const params = {
        from_name : document.getElementById("mail-name").value,
        reply_to : document.getElementById("mail-addr").value,
        subject : document.getElementById("mail-sub").value,
        message : document.getElementById("mail-msg").value,
    }
    // console.log(params);
    emailjs.send("rid_88738242394", "template_kd2w2wy", params)
    .then( ()=>{
        alert("Mail has been Sent!")
    })
}


