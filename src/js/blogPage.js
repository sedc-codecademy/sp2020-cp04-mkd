// let singleBlogPage = document.getElementById("mainSingleBlogDiv");
// let toStoryButton = document.getElementById("toStoryButton");
// let mainBlogPage = document.getElementById("mainPage");




// toStoryButton = addEventListener("click", function(){

//     mainBlogPage.classList.remove("visibleClass");
//     mainBlogPage.classList.add("noneVisible");
//     singleBlogPage.classList.remove("noneVisible");
//     singleBlogPage.classList.add("visibleClass");

// });

// Navigation links
const navigationLinks = {
    storyButton: document.getElementById("toStoryButton"),
}

//Pages
const pages = {
    singleBlogPage: document.getElementById("mainSingleBlogDiv"),
    mainHomePage: document.getElementById("mainPage"),
}



const setEventListeners = () =>{
    for (const link in navigationLinks) {
        console.log(navigationLinks[link])
        navigationLinks[link].addEventListener("click", (event)=>{
          
            showPage("singleBlogPage")
        })
    }
}

let showPage = (page) =>{
    
    for (const pageKey in pages) {
        
        console.log(pageKey)
        pages[pageKey].classList.add("noneVisible")
    
    }
     
   pages[page].classList.remove("noneVisible")
}


setEventListeners();
console.log(setEventListeners())
showPage('mainHomePage');