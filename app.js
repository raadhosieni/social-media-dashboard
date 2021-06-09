//select toggle button
const toggleBtn = document.querySelector('.toggle input');

console.log(document.getElementsByTagName("link").item(3));
toggleBtn.onchange = function() {
    if (this.checked) {
        changeCss('dark.css', 3);  
    } else {
        changeCss('light.css', 3);    
    }
    
}



function changeCss(cssFile, cssLinkIndex) {
    var link = document.getElementsByTagName("link").item(cssLinkIndex);
    link.setAttribute('href', cssFile);
}