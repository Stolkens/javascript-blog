'use strict';
{
  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */
    const activelinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activelinks) activeLink.classList.remove('active');

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .post');
    for (let activeArticle of activeArticles)
      activeArticle.classList.remove('active');

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* [DONE]add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  const generateTitleLinks = function () {
    /* remove text of list of articles */
    const titleList = document.querySelector('.titles');
    titleList.innerHTML = '';
    /* for each article */

    const articles = document.querySelectorAll('.post');
    let html = '';
    for (let article of articles) {
      /* get id of article*/
      const articleID = article.getAttribute('id');
      /* find the title element*/
      const articleTitleElement = article.querySelector('.post-title');
      // console.log(articleTitleElement)
      /* get the title from title element */
      const articleTitle = articleTitleElement.innerHTML;
      /* create html of article link &  */
      const articleLink =
        '<li><a href="#' +
        articleID +
        '"><span>' +
        articleTitle +
        '</span></a></li>';
      /* insert created html to list of title links */
      html = html + articleLink;
    }
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };
  generateTitleLinks();
}
