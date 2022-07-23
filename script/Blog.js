import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import footer from "../component/footer.js"
document.querySelector("footer").innerHTML=footer();


let blogPage1=document.querySelectorAll('button');
blogPage1.forEach(e => {
    e.addEventListener('click',function(){
        window.location.href="./learn.html"
    });
});