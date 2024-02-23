
document.addEventListener("DOMContentLoaded", (e)=> {
function loadContent(topic) {

    var xhr = new XMLHttpRequest();
    xhr.open("get", "content/" + topic + ".html", true); // Assuming content files are HTML files stored in a 'content' directory
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("main-content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

let sideContent = document.querySelector("#content-list");


sideContent.addEventListener("click", (e)=> {
    if(e.target.tagName == "LI" && e.target.id) {
        
        let topic  = e.target.id;
        
        loadContent(topic);
    }
    
})
})


