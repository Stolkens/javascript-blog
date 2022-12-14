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

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  const generateTitleLinks = function () {
    /* remove text of list of articles */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    for (let article of articles) {
      /* get id of article*/
      const articleID = article.getAttribute('id');
      /* find the title element*/
      const articleTitleElement = article.querySelector(optTitleSelector);
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
  const optArticleTagsSelector = '.post-tags .list';
  const generateTags = function () {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const tagsArray = articleTags.split(' ');
      // console.log(tags);
      /* START LOOP: for each tag */
      for (let tag of tagsArray) {
        /* generate HTML of the link */
        // console.log(tag);
        const tagHtml = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        /* add generated code to html variable */
        // console.log(tagHtml);
        html = html + ' ' + tagHtml;
        console.log(html);

        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;

      /* END LOOP: for every article: */
    }
  };

  generateTags();
}
