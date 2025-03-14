// Your code goes here
document.addEventListener("DOMContentLoaded",function() {
console.log("The DOM has loaded");
});
console.log(
    "Before DOMContentLoaded"
        
)
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('p')
    .textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";
    console.log("JavaScript is so cool. It lets me add text to my page programmatically.");
    document.querySelector('p')
    .textContent = "This is really cool!";
});