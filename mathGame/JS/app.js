console.log("hello")

////////////////////
////// TABS ///////
//////////////////

const openPage = (pageName, elmnt, color) => {
  // Hide all elements with class="tabcontent" by default */
  let i, content, tabs;
  content = document.getElementsByClassName("content");
  for (let i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  // Remove the background color of all tablinks/buttons
  tabs = document.getElementsByClassName("tabs");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.backgroundColor = "";
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
};
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


$(() => {

    
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
  
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal)


})