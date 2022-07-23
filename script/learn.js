import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import footer from "../component/footer.js"
document.querySelector(".footer").innerHTML=footer();


let Register=document.querySelectorAll('button');
Register.forEach(e => {
    e.addEventListener('click',function(){
        window.location.href="./signup.html"
    });
});