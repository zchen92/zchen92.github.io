console.log("hello")

////////////////////
////// TABS ///////
//////////////////

const openPage = (pageName, elmnt, color) => {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
};
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
