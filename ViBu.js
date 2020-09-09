function selectComment (evt, commentId) {
    //Declare variables
    let i, tabContent, tabLink, id;

    //Get all elements with class tabcontent and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++){
        tabContent[i].classList.add("hidden");
    };

    //Get all elements with class tabLink
    tabLink = document.getElementsByClassName("tabLink");
    console.log(tabLink);
    for (i = 0; tabLink.length; i++) {
        tabLink[i].classList.remove("active");
    };

    //Show current tab and activate the button
    id = document.getElementById(commentId);
    console.log(commentId);
    id.classList.remove("hidden");
    evt.currentTarget.className += " active";
}


