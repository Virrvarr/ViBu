
//Get the searchbar
let searchBar = document.getElementsByClassName("search");
//Execute function when user scrolls the page
window.onscroll = checkSticky();
console.log(searchBar);

function checkSticky (){  
    console.log("Cheacking!"); 
    let searchBarOffset = searchBar.offsetTop;
    if (window.pageYOffset >= searchBarOffset){
        searchBar.classList.add("searchSticky");
    } else {
        searchBar.classList.remove("searchSticky");
    }
};
    

function selectComment (evt, tabNum, postNum, user) {
    //Declare variables
    let postContent, tabLink, clicked, classCombine;


    //Get all elements with class postNum and hide them 
    postContent = document.getElementsByClassName(postNum);
    for (let i = 0; i < postContent.length; i++){
        postContent[i].classList.add("hidden");
    };

    //Get all elements with class tabNum and deactivate them
    tabLink = document.getElementsByClassName(tabNum);
    for (let i = 0; i < tabLink.length; i++) {
        tabLink[i].classList.remove("active");
    };

    //Show clicked tab and activate the link
    classCombine = `${postNum} ${user}`;
    clicked = document.getElementsByClassName(classCombine);
    clicked[0].classList.remove("hidden");
    evt.currentTarget.className += " active";
}


