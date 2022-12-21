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
  const optArticleAuthorSelector = '.post-author';
  const optTagsListSelector = '.tags';
  const optCloudClassCount = '5';
  const optCloudClassPrefix = 'tag-size-' ;

  const generateTitleLinks = function (customselector = '') {
    /* [DONE] remove text of list of articles */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */

    const articles = document.querySelectorAll(
      optArticleSelector + customselector
    );
    
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
  const calculateTagsParams = function (tags) {
    const params = {max:0, min:99999};
    for(let tag in tags) {
      console.log(tag + ' is used ' + tags[tag] + ' times');
      if (tags[tag]>params.max) {
        params.max = tags[tag];
      }
      else if (tags[tag]<params.min) {
        params.min = tags[tag];
      }
    }
    return params;
  };

  const calculateTagCLass = function (count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount/normalizedMax;
    const classNumber = Math.floor(percentage* (optCloudClassCount -1)+1);

    return optCloudClassPrefix + classNumber;


  };

  const generateTags = function () {
    

    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};
    /* [DONE] find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* [DONE] START LOOP: for every article: */

    for (let article of articles) {
      /* [DONE] find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      /* [DONE] make html variable with empty string */
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

        /* [NEW] check if this link is NOT already in allTags */

        if(!allTags[tag]) {

          /* [NEW] add tag to allTags object */

          allTags[tag] = 1;
        }
        else {
          allTags[tag]++;
        }
        /* [DONE] END LOOP: for each tag */
      }
      console.log('alltags', allTags);

      /* [DONE] insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;

      /* [DONE] END LOOP: for every article: */
    }
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(optTagsListSelector);
    
    const tagsParams = calculateTagsParams(allTags);
    console.log(tagsParams);

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
      /* [NEW] generate code of a link and add it to allTagsHTML */
      allTagsHTML +='<li><a href="#tag-' + tag + '"class="' + calculateTagCLass(allTags[tag], tagsParams) + '">' + tag +'</a></li>';
    }
    /* [NEW] END LOOP: for each tag in allTags: */
    
    console.log('allTags', allTags);
    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
    console.log('taglist', tagList);
    
    
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

      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      /* [DONE] make html variable with empty string */

      let html = '';

      /* [DONE] get author from data-author attribute */

      const articleAuthor = article.getAttribute('data-author');

      /* [DONE] generate HTML of the link */
                          
      const authorHtml = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';

      /* [DONE] add generated code to html variable */

      html = html + authorHtml;

      /* [DONE] insert HTML of all the links into the author wrapper */

      authorWrapper.innerHTML = html;

      /* [DONE] END LOOP: for every article: */
    }
  };

  generateAuthors();

  const authorClickHandler = function(event) {
    /* [DONE] prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log('authorHref', href);

    /* [DONE] make a new constant "#" and extract author from the "href" constant */

    const author = href.replace('#author-', '');
    console.log('author', author);

    /* [DONE] find all author links with class active */

    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
    console.log('activeAuthors', activeAuthors);

    /* [DONE] START LOOP: for each active author link */
    for (let activeAuthor of activeAuthors) {
    
      /* [DONE] remove class active */
      activeAuthor.classList.remove('active');
      /* [DONE] END LOOP: for each active author link */
    }
    /* [DONE] find all author links with "href" attribute equal to the "href" constant */

    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log('authorLinks', authorLinks);

    /* [DONE] START LOOP: for each found author link */
    for(let authorLink of authorLinks) {

    
    
      /* [DONE] add class active */
      authorLink.classList.add('active'); 

      /* [DONE] END LOOP: for each found author link */
    }

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author ="' + author + '"]');
  };

  const addClickListenersToAuthors = function () {
    /* [DONE] find all links to authors */
    const authorLinks = document.querySelectorAll('.post-author a');
    console.log('authorLinks', authorLinks);

    /* [DONE] START LOOP: for each link */

    for (let authorLink of authorLinks) {

      /* [DONE] add authorClickHandler as event listener for that link */

      authorLink.addEventListener('click', authorClickHandler);

      /* [DONE] END LOOP: for each link */
    }
    
  };
  addClickListenersToAuthors();
}
