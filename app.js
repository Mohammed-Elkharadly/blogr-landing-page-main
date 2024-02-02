// selecting DOM elements
const lists = document.querySelectorAll(".list");
const nestedLists = document.querySelectorAll(".nested-ul");
const iconLight = document.querySelectorAll(".icon-light ");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const navbar = document.querySelector(".second-nav");
const secondLists = document.querySelectorAll(".second-list");
const secondNestedLists = document.querySelectorAll(".second-nested-ul");
const darkIcon = document.querySelectorAll(".dark-icon");
const lis = document.querySelectorAll(".second-nested-ul li");

// Adding click event listener to each "list" element @media  (min-width: 900px)
lists.forEach((list, index) => {
  list.addEventListener("click", () => showNestedList(index));
});

// Adding click event listener to "iconHamburger" element
iconHamburger.addEventListener("click", showNavbar);
// Adding click event listener to "iconClose" element
iconClose.addEventListener("click", hideNavbar);

// Adding click event listener to each "secondList" element
secondLists.forEach((secondList, index) => {
  secondList.addEventListener("click", () => showSecondNestedList(index));
});

// Adding click event listener to each "li" element to hide navbar when clicked
lis.forEach((li) => {
  li.addEventListener("click", () => {
    hideNavbar();
  });
});

// Function to show nested list
function showNestedList(index) {
  nestedLists[index].classList.toggle("block");
  iconLight[index].classList.toggle("rotate");
  nestedLists.forEach((nestedList, i) => {
    if (i !== index) {
      nestedList.classList.remove("block");
      iconLight[i].classList.remove("rotate");
    }
  });
}

// Function to show navbar
function showNavbar() {
  navbar.classList.add("block");
  iconHamburger.classList.add("none");
  iconClose.classList.add("block");
}

// Function to hide navbar
function hideNavbar() {
  navbar.classList.remove("block");
  iconHamburger.classList.remove("none");
  iconClose.classList.remove("block");
}

// Function to show second nested list
function showSecondNestedList(index) {
  secondNestedLists[index].classList.toggle("block");
  darkIcon[index].classList.toggle("rotate");
  secondNestedLists.forEach((secondNestedList, i) => {
    if (i !== index) {
      secondNestedList.classList.remove("block");
      darkIcon[i].classList.remove("rotate");
    }
  });
}
