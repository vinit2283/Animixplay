gsap.to("#navbar", {
    height: "100px",
    backgroundColor: "rgba(213, 3, 232, 0.65)",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#navbar",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
});
// Replace with your actual API endpoint
const apiEndpoint = "https://api.jikan.moe/v4/top/anime?season=spring&year=2025";

// Fetch the anime data from the API
async function fetchAnimeList() {
    const response = await fetch(apiEndpoint);
    const animeList = await response.json();
    displayAnimeList(animeList.data);
}

// Function to display the anime list
function displayAnimeList(animeList) {
    const cardListContainer = document.querySelector(".card-list");
    cardListContainer.innerHTML = ""; // Clear existing content
    
    animeList.forEach(anime => {
        // Create a card for each anime
        const card = document.createElement("div");
        card.className = "card";
        
        const img = document.createElement("img");
        img.src = anime.images.jpg.image_url
        // img.alt = anime.titles || "Anime Image";
        
        //add event listener to open trailer link in new window
        img.addEventListener("click",()=>{
            const traileUrl = anime.trailer.embed_url;
            window.open(traileUrl);
        });
        
        const genr = document.createElement("p");
        let gener = "Geners: " + anime.genres[0].name;
        for (let i = 1; i < anime.genres.length; i++) {
            gener += ", " + anime.genres[i].name;
        };
        if(gener.length > 25){
            gener = gener.substring(0, 20) + "...";
        }
        // genr.textContent = anime.genres.map(genre => genre.name).join(", ");
        genr.textContent = gener;
        
        const title = document.createElement("p");
        let fulltitle = anime.titles[0].title; //it will select 1st title type from all the titles 
        title.addEventListener("click",() =>{
            const traileUrl = anime.trailer.embed_url;
            window.open(traileUrl);
        })
        if (fulltitle.length > 30) {
            title.textContent = fulltitle.substring(0, 20) + "..."
        } else {
            title.textContent = fulltitle
        }
        
        
        // Append image and title to the card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(genr);

        // Append the card to the card list container
        cardListContainer.appendChild(card);
    });
}

// Call the fetchAnimeList function on page load
fetchAnimeList();

