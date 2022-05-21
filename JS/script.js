/* function chengeRight() {
    let review = document.getElementsByClassName('review');

    for (let i = 0; i < review.length ; i++) {

        if(review[i] == 'active')
        {
            console.log(review[i])
        }
        
    }

    // for (const elements of review) {
        // if(elements.className == 'active'){
        //     console.log(elements)
        // }
    //     console.log(elements)
    // }
}

chengeRight(); */



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function scroll(){
    /* let navUnderline = document.getElementsByClassName("nav-underline");
    navUnderline.style.width = "100px" */

    let lastScrollTop = 0;
    let navbar = document.getElementById("menus");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop)
    {
        navbar.style.top = "-150px";
    }
    else{
        navbar.style.top = "150px";
    }
    lastScrollTop = scrollTop;
}

