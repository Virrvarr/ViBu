const searchBar = document.getElementById("searchBar");
const posts = document.getElementsByClassName("post");

console.log(posts);

for (post in posts){
    console.log(post.children[1].textcontent);
};

searchBar.addEventListener('keyup', (evt)=> {
    let searchString = evt.target.value.toLowerCase();
    console.log(searchString)
})

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


