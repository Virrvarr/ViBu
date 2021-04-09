const searchBar = document.getElementById("searchBar");

function getPostContentPart (post, part) {
    //const elements = post.querySelectorAll(`[data-${part}]`)
    const elements = post.querySelectorAll('[data-' + part + ']')
    return Array.from(elements)
        .map(element => element.textContent)
        .join('')
}

const posts = Array.from(document.getElementsByClassName("post"))
  .map(post => ({
    element: post,
    string: (
      (post.classList.contains("completed") ? "completed" : "") +
      getPostContentPart(post, 'title') +
      getPostContentPart(post, 'tab')
    ).toLowerCase()
  }))

// Setup tabs
for (let post of posts) {
    const tabs = post.element.querySelectorAll('.tab > button')
    const tabContents = post.element.querySelectorAll('.tabContent')
    
    for (let tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
        tabs[tabIndex].addEventListener('click', () => {
            for (let tabContentIndex = 0; tabContentIndex < tabContents.length; tabContentIndex++) {
                /*if (tabContentIndex !== tabIndex) {
                    tabContents[tabIndex].classList.add('hidden')
                } else [
                    tabContents[tabIndex].classList.remove('hidden')
                }*/
                tabs[tabIndex].classList.toggleClass('active', tabContentIndex === tabIndex)
                tabContents[tabIndex].classList.toggleClass('hidden', tabContentIndex !== tabIndex)
            }
        })
    }
}

function showAllPosts () {
    for (let post of posts) {
        post.element.classList.remove("hidden")
    }
}

function hidePostsNotContainingSearchQuery (query) {
    for (let post of posts){
        if (!post.string.includes(query)){
            post.element.classList.add("hidden");
        }
    }
}

searchBar.addEventListener('keyup', (evt)=> {
    showAllPosts()
    hidePostsNotContainingSearchQuery(evt.target.value.toLowerCase())
})
