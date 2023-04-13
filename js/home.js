function onOffNavBarLink(){
    let NavBarLink = document.getElementById('menu');
    NavBarLink.classList.toggle('active');

}



let toggle1 = document.getElementById('main-menu');
let toggle2 = document.getElementById('search-cart');
let btnToggle = document.getElementById('btn-toggle');

btnToggle.addEventListener('click', function(e){
    toggle1.classList.toggle('active');
    toggle2.classList.toggle('active');
});