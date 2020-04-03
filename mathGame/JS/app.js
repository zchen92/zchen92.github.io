console.log("hello")

////////////////////
////// TABS ///////
//////////////////

const openPage = (page, element, color) => {
  let i;
  let content;
  let tabs;
  content = document.getElementsByClassName("content");
  for (let i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  tabs = document.getElementsByClassName("tabs");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.backgroundColor = "";
  }
  document.getElementById(page).style.display = "block";
  element.style.backgroundColor = color;
};
document.getElementById("defaultOpen").click();


// MODAL //

// Grabbing About the Game button
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');

const openModal = () => {
    $modal.css('display', 'block');
}

const closeModal = () => {
    $modal.css('display', 'none');
}

$(() => {


$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal)


})