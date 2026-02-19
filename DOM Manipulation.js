"use strict";

function showFilter() {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  // Filter 
  filterForm.style.display = "block";
  newForm.style.display = "none";
}

function showAddNew() {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  // Filter 2
  newForm.style.display = "flex";
  filterForm.style.display = "none";
}

function filterArticles() {
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  const showRecipe = document.getElementById("recipeCheckbox").checked;
  const showUpdate = document.getElementById("updateCheckbox").checked;

  // Opinion
  document.querySelectorAll("article.opinion").forEach((a) => {
    a.style.display = showOpinion ? "" : "none";
  });

  // Recipe
  document.querySelectorAll("article.recipe").forEach((a) => {
    a.style.display = showRecipe ? "" : "none";
  });

  // Update
  document.querySelectorAll("article.update").forEach((a) => {
    a.style.display = showUpdate ? "" : "none";
  });
}

function addNewArticle() {
  const titleEl = document.getElementById("inputHeader");
  const textEl = document.getElementById("inputArticle");

  const title = (titleEl.value || "").trim();
  const text = (textEl.value || "").trim();

  // Radios
  const opinionRadio = document.getElementById("opinionRadio");
  const recipeRadio = document.getElementById("recipeRadio");
  const lifeRadio = document.getElementById("lifeRadio");

  let typeClass = "";
  let markerText = "";

  if (opinionRadio.checked) {
    typeClass = "opinion";
    markerText = "Opinion";
  } else if (recipeRadio.checked) {
    typeClass = "recipe";
    markerText = "Recipe";
  } else if (lifeRadio.checked) {
    typeClass = "update";    
    markerText = "Update";    
  }

  // Validation
  if (!title) {
    alert("Please enter a Title.");
    titleEl.focus();
    return;
  }
  if (!typeClass) {
    alert("Please select an article Type.");
    return;
  }
  if (!text) {
    alert("Please enter article Text.");
    textEl.focus();
    return;
  }

  const list = document.getElementById("articleList");
  const nextIdNum = list.querySelectorAll("article").length + 1;
  const newId = "a" + nextIdNum;
  const article = document.createElement("article");
  article.className = typeClass;
  article.id = newId;

  const marker = document.createElement("span");
  marker.className = "marker";
  marker.textContent = markerText;

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const pText = document.createElement("p");
  pText.textContent = text;

  const pLink = document.createElement("p");
  const a = document.createElement("a");
  a.href = "moreDetails.html";
  a.textContent = "Read more...";
  pLink.appendChild(a);

  article.appendChild(marker);
  article.appendChild(h2);
  article.appendChild(pText);
  article.appendChild(pLink);
  list.prepend(article);
  filterArticles();

  titleEl.value = "";
  textEl.value = "";
  opinionRadio.checked = false;
  recipeRadio.checked = false;
  lifeRadio.checked = false;

  showFilter();
}

document.addEventListener("DOMContentLoaded", () => {
  filterArticles();
});
