const hamburgericon = document.getElementsByClassName('menuIcon material-icons ')[0];
const closeIcon = document.getElementsByClassName('closeIcon material-icons')[0];
const menu = document.querySelector('.child2');
const checkbtn = document.querySelector('.checkbtn')
checkbtn.addEventListener("click", function () {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        hamburgericon.style.display = "block";
        closeIcon.style.display = "none"


    }
    else {
        menu.classList.add('showMenu');
        hamburgericon.style.display = "none";
        closeIcon.style.display = "block"

    }
});
