const searchBar = document.getElementById("searchBar");
const posts = document.getElementsByClassName("post");
const postSearchString = [];

console.log(posts);

//Create an array of objects that links post number with the searchable textcontent in the post.
//My thought behind this is that I'll only have to do this once per load, instead of everytime the search changes.
for (let i = 0; i < posts.length; i++){
    //Create the string
    let postString = "";

    //Chack if it's the info post and leave the string empty in that case
    if (posts[i].id==="info"){
        postSearchString.push({nr: i, string: postString.toLowerCase()});

    } else if (posts[i].classList.contains("completed")) {    
        postString += "completed";
        //Add the post title
        postString += posts[i].children[0].textContent;
        //Push the object into postSearchString
        postSearchString.push({nr: i, string: postString.toLowerCase()});
    } else {   
        //Add the post title
        postString += posts[i].children[0].textContent;
        //Add the text content of the tabs excluding "Description"
        for (let j = 1; j < posts[i].children[2].children.length; j++){
            postString += posts[i].children[2].children[j].textContent;
        }
        //Push the object into postSearchString
        postSearchString.push({nr: i, string: postString.toLowerCase()});
    }
};

console.log(postSearchString);

searchBar.addEventListener('keyup', (evt)=> {
    //Show all posts
    for (let post of posts){
        post.classList.remove("hidden")
    }
    //Get the search string
    let searchString = evt.target.value.toLowerCase();

    //Hide all posts that don't contain the search 
    for (let pair of postSearchString){
        if (!pair.string.includes(searchString)){
            posts[pair.nr].classList.add("hidden");
        }
    }
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


