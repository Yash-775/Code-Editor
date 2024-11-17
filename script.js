function run(){
    let htmlcode= document.getElementById("html-code");
    let csscode= document.getElementById("css-code");
    let javascript= document.getElementById("javascript-code");

    let output= document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlcode.value + "<style>" +csscode.value + "</style>";
    output.contentWindow.eval(javascript.value);
}

function copy(){
    let text= document.getElementById("html-code");

    text.select();

    navigator.clipboard.writeText(text.value);
    
}

function copy2(){
    let text= document.getElementById("css-code");

    text.select();

    navigator.clipboard.writeText(text.value);
}
function copy3(){
    let text= document.getElementById("javascript-code");

    text.select();

    navigator.clipboard.writeText(text.value);
}
