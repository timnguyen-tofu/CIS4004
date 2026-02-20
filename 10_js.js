window.onload = function () {
  document.getElementById("filterContent").style.display = "none";
  document.getElementById("newContent").style.display = "none";
};

function showFilter() {
  document.getElementById("filterContent").style.display = "block";
  document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
  document.getElementById("newContent").style.display = "flex";
  document.getElementById("filterContent").style.display = "none";
}

function filterArticles() {
  var opinionChecked = document.getElementById("opinionCheckbox").checked;
  var recipeChecked = document.getElementById("recipeCheckbox").checked;
  var updateChecked = document.getElementById("updateCheckbox").checked;

  var opinionArticles = document.getElementsByClassName("opinion");
  var recipeArticles = document.getElementsByClassName("recipe");
  var updateArticles = document.getElementsByClassName("update");

  /* opinion */
  for (var i = 0; i < opinionArticles.length; i++) {
    if (opinionChecked) {
      opinionArticles[i].style.display = "";
    } else {
      opinionArticles[i].style.display = "none";
    }
  }

  /* recipe */
  for (var j = 0; j < recipeArticles.length; j++) {
    if (recipeChecked) {
      recipeArticles[j].style.display = "";
    } else {
      recipeArticles[j].style.display = "none";
    }
  }

  /* update */
  for (var k = 0; k < updateArticles.length; k++) {
    if (updateChecked) {
      updateArticles[k].style.display = "";
    } else {
      updateArticles[k].style.display = "none";
    }
  }
}

/* new article to the page */
function addNewArticle() {
  var titleValue = document.getElementById("inputHeader").value;
  var textValue = document.getElementById("inputArticle").value;

  var typeValue = "";
  var markerText = "";

  if (document.getElementById("opinionRadio").checked) {
    typeValue = "opinion";
    markerText = "Opinion";
  } else if (document.getElementById("recipeRadio").checked) {
    typeValue = "recipe";
    markerText = "Recipe";
  } else if (document.getElementById("lifeRadio").checked) {
    typeValue = "update";
    markerText = "Update";
  }

  /* create the article element */
  var newArticle = document.createElement("article");
  newArticle.className = typeValue;

  var marker = document.createElement("span");
  marker.className = "marker";
  marker.textContent = markerText;

  var h2 = document.createElement("h2");
  h2.textContent = titleValue;


  var pText = document.createElement("p");
  pText.textContent = textValue;

  /* read more link */
  var pLink = document.createElement("p");
  var link = document.createElement("a");
  link.href = "moreDetails.html";
  link.textContent = "Read more...";
  pLink.appendChild(link);

 
  newArticle.appendChild(marker);
  newArticle.appendChild(h2);
  newArticle.appendChild(pText);
  newArticle.appendChild(pLink);

  /* new article to the list */
  document.getElementById("articleList").appendChild(newArticle);

  /* apply current filters to the new article */
  filterArticles();
}