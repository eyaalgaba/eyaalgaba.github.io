// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Default state (assuming light mode initially)
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;

    // Toggle between dark mode and light mode images
    if (isDarkMode) {
        darkModeIcon.src = 'Home/DM.png'; // Path to dark mode image
        darkModeIcon.alt = "Dark Mode Icon";
    } else {
        darkModeIcon.src = 'Home/LM.png'; // Path to light mode image
        darkModeIcon.alt = "Light Mode Icon";
    }
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



// AGENTS.HTML FUNCTIONS
var names = ["Astra", "Breach", "Brimstone", "Chamber", "Cypher", "Clove", "Deadlock", "Fade", "Gekko", "Harbor", "Iso", "Jett", "Kay/O", "Killjoy", "Neon", "Omen", "Pheonix", "Raze", "Reyna", "Sage", "Skye", "Sova", "Viper", "Vyse", "Yoru"];

var roles = ["Role: Initiator", "Role: Initiator", "Role: Controller", "Role: Sentinel", "Role: Sentinel", "Role: Controller", "Role: Sentinel", "Role: Initiator", "Role: Initiator", "Role: Controller", "Role: Duelist", "Role: Duelist", "Role: Initiator", "Role: Sentinel", "Role: Duelist", "Role: Controller", "Role: Duelist", "Role: Duelist", "Role: Duelist", "Role: Sentinel", "Role: Initiator", "Role: Initiator", "Role: Controller", "Role: Sentinel", "Role: Duelist"];

var lines = [" “World divided!” ", " “Off your feet!” ", " “Open up the sky!” ", " “You want to play? Let's play.” ", " “Where is everyone hiding?” ", " “You had your fun, my turn!” ", " “My territory, my rules.” ", " “Nightmare, take them” ", " “Oye, Monster on the loose!” ", " “Let's turn the tide.” ", " “It's you and me!” ", " “Get out of my way!” ", " “You are powerless!” ", " “You should run...” ", " “Hoy! I'm pissed!” ", " “Scatter!” ", " “Joke's over, you're dead!” ", " “Fire in the hole!” ", " “They will cower!” ", " “Your duty is not over!” ", " “I've got your trail.” ", " “I am the hunter!” ", " “Welcome to my world” ", " “Bring me the arsenal!” ", " “Who's next?” "];


var pics = ["Astra.png", "Breach.png", "Brimstone.png", "Chamber.png", "Cypher.png", "Clove.png", "Deadlock.png", "Fade.png", "Gekko.png", 
    "Harbor.png", "Iso.png", "Jett.png", "Kay O.png", "Killjoy.png", "Neon.png", "Omen.png", "Pheonix.png", "Raze.png", "Reyna.png", "Sage.png", "Skye.png", 
    "Sova.png", "Viper.png", "Vyse.png", "Yoru.png",];


// Code has a JS function call to addShadow and removeShadow that gives the unique ids
for (var i = 0; i < names.length; i++) {
    var myContainer = document.getElementById("cardContainer");
    myContainer.innerHTML += "<div class=\"col-xl-3 col-md-4 col-sm-6 col-12\"><div class=\"card my-3\" id=\"c" + i + "\" onmouseover=\"addShadow('c" + i + "')\" onmouseout=\"removeShadow('c" + i + "')\"><img src=\"pictures/" + pics[i] + "\" class=\"card-img-top\"><div class=\"card-body\"><h5 class=\"card-titlen names\">" + names[i] + "</h5><p class=\"card-text roles\">" + roles[i] + "</p><p class=\"card-text lines\">" + lines[i] + "</p></div></div></div>";
}

// Adds a shadow Boostrap class to the element with the given id
function addShadow(id) {
    if (isDarkMode) {
        document.getElementById(id).style.backgroundColor = "#F47A7F"

    }
    else {
        document.getElementById(id).classList.add("shadow");

    }

}

// Removes the shadow Boostrap class to the element with the given id
function removeShadow(id) {
    
    if (isDarkMode) {
        document.getElementById(id).style.backgroundColor = "white";

    }
    else {
        document.getElementById(id).classList.remove("shadow");
    }
    
}


