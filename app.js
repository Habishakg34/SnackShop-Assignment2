document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector('#mobile-menu')
        const hamburgerLinks = document.querySelector('.navigationbar_Menu') //This is to select the hamburger menu icon and selects the navigation bar to show and use the items

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('is-functional'); //This is to show or hide the menu
        hamburgerLinks.classList.toggle('functional');//This is to show the links 
    });

    const video = document.querySelector('video'); //This selects the first video and then plays the video when it paused
    video.addEventListener('pause', function(){
        video.play(); 
    });


    const buyNowButton=document.querySelectorAll('.buyNow'); //This is for the Buy Now button alert box
    buyNowButton.forEach(button=> {
        button.addEventListener('click', function() {
            const snack_Name = button.parentElement.querySelector('h3').textContent;
            alert(snack_Name + " has been added to cart");
        });
    });
});