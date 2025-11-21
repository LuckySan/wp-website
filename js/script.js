document.addEventListener("DOMContentLoaded", function() {
    // Article data
    const articles = [
        {
            title: "Beispiel Artikel",
            date: "2025-11-21", // YYYY-MM-DD for easy sorting
            displayDate: "21. November 2025",
            summary: "Dies ist eine kurze Beschreibung des Beispielartikels.",
            link: "artikel/beispiel-artikel.html",
            image: "images/thumbnail/Thumbnails Spaßschießen.jpg",
            keywords: ["Allgemein", "Beispiel"]
        },
        {
            title: "Stimmungsvolles Kirtabaumaufstellen 2025",
            date: "2025-10-18",
            displayDate: "18. Oktober 2025",
            summary: "Bei sonnigem Herbstwetter fand am 18. Oktober 2025 das traditionelle Kirtabaumaufstellen des Schützenvereins Waldeslust Probstberg statt.",
            link: "artikel/kirtabaumaufstellen-2025.html",
            image: "images/thumbnail/Thumbnails Veranstaltungen.jpg",
            keywords: ["Veranstaltung", "Kirta"]
        }
    ];

    const articlesContainer = document.querySelector(".event-cards");
    const sortSelect = document.getElementById("sort-articles");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let currentSort = "date-desc"; // Default sort: newest first
    let currentFilter = "Alle"; // Default filter: all keywords

    function renderArticles(articlesToRender) {
        articlesContainer.innerHTML = ''; // Clear existing articles
        articlesToRender.forEach(article => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                ${article.image ? `<img src="${article.image}" alt="Vorschau ${article.title}" class="card-image">` : ''}
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <p class="event-date">Datum: ${article.displayDate}</p>
                    <p>${article.summary}</p>
                    <a href="${article.link}" class="card-link">Mehr erfahren</a>
                </div>
            `;
            articlesContainer.appendChild(card);
        });
    }

    function filterAndSortArticles() {
        let filteredArticles = [...articles]; // Create a shallow copy

        // Filter
        if (currentFilter !== "Alle") {
            filteredArticles = filteredArticles.filter(article =>
                article.keywords.includes(currentFilter)
            );
        }

        // Sort
        if (currentSort === "date-desc") {
            filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (currentSort === "date-asc") {
            filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        renderArticles(filteredArticles);
    }

    // Event Listeners for Sorting
    sortSelect.addEventListener("change", (event) => {
        currentSort = event.target.value;
        filterAndSortArticles();
    });

    // Event Listeners for Filtering
    filterButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            filterButtons.forEach(btn => btn.classList.remove("active")); // Remove active from all
            event.target.classList.add("active"); // Add active to clicked
            currentFilter = event.target.dataset.keyword;
            filterAndSortArticles();
        });
    });

    // Initial render
    filterAndSortArticles();


    // Get the modal (lightbox functionality)
    const modal = document.getElementById("lightbox-modal");

    // Get the image and insert it inside the modal
    const modalImg = document.getElementById("lightbox-image");
    const images = document.querySelectorAll(".lightbox-trigger");

    images.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close-button")[0];

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    
    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});