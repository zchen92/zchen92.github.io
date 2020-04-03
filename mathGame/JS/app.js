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
        content[i].style.display = "none";      //everything in contents hidden initially
    } 
    tabs = document.getElementsByClassName("tabs");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.backgroundColor = "";   //all tabs default to no background color
    }
    document.getElementById(page).style.display = "block"; // shows page content
    element.style.backgroundColor = color;    // shows color when the page is in block view
};
document.getElementById("defaultOpen").click(); //calling the elements in id default open when clicked

////////////////////////
/////   MODAL   ///////
//////////////////////

// Grabbing About the Game button
const $openBtn = $('#openModal'); //create openbtn div id
const $modal = $('#modal');     // create modal div id
const $closeBtn = $('#close');  // declare closeBtn div ID

const openModal = () => {
    $modal.css('display', 'block'); //shows up block when open
}

const closeModal = () => {
    $modal.css('display', 'none'); //shows none when closed
}

$(() => {


    $openBtn.on('click', openModal);  // runs open modal when the button is clicked
    $closeBtn.on('click', closeModal)  // runs close modal when button is clicked


})