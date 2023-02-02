let siteName = document.getElementById("siteName");
let siteURL = document.getElementById("siteURL");


let link;

if (localStorage.link != null){
    link = JSON.parse(localStorage.link);
    displaylink();
}else{
    link = [];
}

// CRUD Operator >>>

// Create
function addbookmark() {
    
    var bookmark = {
        name : siteName.value,
        url : siteURL.value,
    };

    if (siteName.value == "" || siteURL.value == "") {
        document.getElementById("fill").style.display = "block";
    } else {
        link.push(bookmark);
        localStorage.setItem('link', JSON.stringify(link));
        displaylink();
        document.getElementById("fill").style.display = "none";
        siteName.value = '';
        siteURL.value = '';
    }
};

// Read
function displaylink(){
    var display = '';

    for (let i = 0; i < link.length; i++) {
        display += `<div id="newWeb" class="newWeb">
        <h4 class="col-5 float-start text-black fw-bold m-0 ps-4">${link[i].name}</h4>
        <button onclick="openWebsite(${i})" class="btn btn-outline-primary me-2">Visist</button>
        <button onclick="deleteLink(${i})" class="btn btn-outline-danger">Delete</button>
    </div>`;
    }

    document.getElementById("link").innerHTML = display;
}

//Visit
function openWebsite(i) {
    window.open(link[i].url, "_blank");
}

//Delete
function deleteLink(i) {
    link.splice(i, 1)
    localStorage.setItem('link', JSON.stringify(link));
    displaylink();
}