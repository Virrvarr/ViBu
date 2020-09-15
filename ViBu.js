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
    

function selectComment (evt, commentId) {
    //Declare variables
    let tabContent, tabLink, id;

    //Get all elements with class tabcontent and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabContent.length; i++){
        tabContent[i].classList.add("hidden");
    };

    //Get all elements with class tabLink and deactivate them
    tabLink = document.getElementsByClassName("tabLink");
    for (let i = 0; i < tabLink.length; i++) {
        tabLink[i].classList.remove("active");
    };

    //Show current tab and activate the button
    id = document.getElementById(commentId);
    console.log(commentId);
    id.classList.remove("hidden");
    evt.currentTarget.className += " active";
}


