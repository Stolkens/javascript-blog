'use strict';

const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
    
  
    /* [DONE] remove class 'active' from all article links  */
    const activelinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activelinks)
        activeLink.classList.remove('active');
  
    /* [IN PROGRESS] add class 'active' to the clicked link */
    console.log('clickedElement:' + clickedElement);
    this.classList.add('active')
  
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .post');
    for(let activeArticle of activeArticles)
        activeArticle.classList.remove('active');
  
    /* get 'href' attribute from the clicked link */
    
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    /* add class 'active' to the correct article */

    }
  
    const links = document.querySelectorAll('.titles a');
  
    for(let link of links){
        link.addEventListener('click', titleClickHandler);
  }