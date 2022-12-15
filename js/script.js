{
  ('use strict');

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */

    const activelinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activelinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

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
  const optArticleTagsSelector = '.post-tags .list';
  const optArticleAuthorSelector = '.sidebar .authors';

  const generateTitleLinks = function (customselector = '') {
    /* [DONE] remove text of list of articles */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */

    const articles = document.querySelectorAll(
      optArticleSelector + customselector
    );
    console.log('customSelector', customselector);
    console.log('razem', optArticleSelector + customselector);
    let html = '';
    for (let article of articles) {
      /* [DONE] get id of article*/

      const articleID = article.getAttribute('id');

      /* [DONE] find the title element*/

      const articleTitleElement = article.querySelector(optTitleSelector);

      /* [DONE] get the title from title element */

      const articleTitle = articleTitleElement.innerHTML;

      /* [DONE] create html of article link &  */

      const articleLink =
        '<li><a href="#' +
        articleID +
        '"><span>' +
        articleTitle +
        '</span></a></li>';

      /* [DONE] insert created html to list of title links */

      html = html + articleLink;
    }
    titleList.innerHTML = html;
  };
  generateTitleLinks();

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

  const generateTags = function () {
    /* [DONE] find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* [DONE] START LOOP: for every article: */

    for (let article of articles) {
      /* [DONE] find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      /* [DONE] make html variable with empty string */
      console.log('tagsWrapper', tagsWrapper);
      let html = '';

      /* [DONE] get tags from data-tags attribute */

      const articleTags = article.getAttribute('data-tags');

      /* [DONE] split tags into array */

      const tagsArray = articleTags.split(' ');

      /* [DONE] START LOOP: for each tag */

      for (let tag of tagsArray) {
        /* [DONE] generate HTML of the link */

        const tagHtml = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        /* [DONE] add generated code to html variable */

        html = html + ' ' + tagHtml;

        /* [DONE] END LOOP: for each tag */
      }

      /* [DONE] insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;

      /* [DONE] END LOOP: for every article: */
    }
  };

  generateTags();

  const tagClickHandler = function (event) {
    /* [DONE] prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');
    console.log('tag', tag);

    /* [DONE] find all tag links with class active */

    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

    /* [DONE] START LOOP: for each active tag link */

    for (let activeTag of activeTags) {
      /* [DONE] remove class active */
      activeTag.classList.remove('active');
      /* [DONE] END LOOP: for each active tag link */
    }
    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* [DONE] START LOOP: for each found tag link */

    for (let tagLink of tagLinks) {
      /* [DONE] add class active */
      tagLink.classList.add('active');

      /* [DONE] END LOOP: for each found tag link */
    }

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
  };

  const addClickListenersToTags = function () {
    /* [DONE] find all links to tags */

    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* [DONE] START LOOP: for each link */

    for (let tagLink of tagLinks) {
      /* [DONE] add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', tagClickHandler);

      /* [DONE] END LOOP: for each link */
    }
  };

  addClickListenersToTags();

  const generateAuthors = function () {
    /* [DONE] find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* [DONE] START LOOP: for every article: */
    for (let article of articles) {
      /* [DONE] find author wrapper */

      const authorWrapper = article.querySelector('.post-author');
      console.log('authorWrapper', authorWrapper);

      /* [DONE] make html variable with empty string */

      let html = '';

      /* [DONE] get author from data-author attribute */

      const author = article.getAttribute('data-author');
      console.log('author', author);

      /* [DONE] generate HTML of the link */

      const authorHtml = '<p class="post-author"> by ' + author + '</p>';

      /* [DONE] add generated code to html variable */

      html = html + authorHtml;

      /* [DONE] insert HTML of all the links into the author wrapper */

      authorWrapper.innerHTML = html;

      /* [DONE] END LOOP: for every article: */
    }
  };

  generateAuthors();
}
