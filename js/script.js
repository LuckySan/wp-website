document.addEventListener("DOMContentLoaded", function() {
    const articlesContainer = document.querySelector(".event-cards");

    // --- Homepage Article Logic ---
    if (articlesContainer) {
        const articles = [
            {
                title: "Rückblick: Christbaumversteigerung 2025",
                date: "2025-12-06",
                displayDate: "06. Dezember 2025",
                summary: "Ein gelungener Abend! Danke an alle Spender.",
                link: "artikel/christbaumversteigerung-rueckblick-2025.html",
                image: "images/archiv/2025-12-Christbaumversteigerung/Christbaumversteigerung.png",
                keywords: ["Bericht", "Allgemein"]
            },
            {
                title: "Rückblick: Christkindlmarkt 2025",
                date: "2025-11-30",
                displayDate: "30. November 2025",
                summary: "Am 29. und 30. November waren wir mit einem Stand vertreten. Glühwein, Knackersemmeln und gute Stimmung zum Jahresausklang.",
                link: "artikel/christkindlmarkt-2025.html",
                image: "images/archiv/2025-11-Weihnachtsmarkt/BildChristkindlmarktRobin2025.jpg",
                keywords: ["Veranstaltung", "Allgemein"]
            },
            {
                title: "Einladung zur Christbaumversteigerung am 6. Dezember 2025",
                date: "2025-12-01",
                displayDate: "01. Dezember 2025",
                summary: "Wir laden herzlich zu unserer traditionellen Christbaumversteigerung ein! Ein geselliger Abend mit spannenden Versteigerungen und Tombola.",
                link: "artikel/christbaumversteigerung-2025.html",
                image: "images/archiv/2025-12-Christbaumversteigerung/Christbaumversteigerung.png",
                keywords: ["Ankündigung", "Allgemein"]
            },
            {
                title: "Wir sind dabei: Adventsmarkt Wenzenbach 2025",
                date: "2025-11-24",
                displayDate: "22. November 2025",
                summary: "Der Schützenverein Waldeslust Probstberg ist auf dem Adventsmarkt in Wenzenbach vertreten. Besuchen Sie unseren Stand!",
                link: "artikel/adventsmarkt-wenzenbach-2025.html",
                image: "images/archiv/2025-11-Weihnachtsmarkt/Weihnachtsmarkt.png",
                keywords: ["Ankündigung", "Allgemein"]
            },
            {
                title: "Glanzvolle Königsfeier 2025",
                date: "2025-11-21",
                displayDate: "21. November 2025",
                summary: "Der Höhepunkt des Schützenjahres: Die feierliche Proklamation der neuen Schützenkönige in festlicher Atmosphäre.",
                link: "artikel/koenigsfeier-2025.html",
                image: "images/archiv/2025-11-Koenigsfeier/Die Gewinner.jpg",
                keywords: ["Veranstaltung", "Allgemein"]
            },
            {
                title: "Stimmungsvolles Kirtabaumaufstellen 2025",
                date: "2025-10-18",
                displayDate: "18. Oktober 2025",
                summary: "Bei sonnigem Herbstwetter fand am 18. Oktober 2025 das traditionelle Kirtabaumaufstellen des Schützenvereins Waldeslust Probstberg statt.",
                link: "artikel/kirtabaumaufstellen-2025.html",
                image: "images/archiv/2025-10-Kirta/2025-Kirta-BaumAufstellen.jpg",
                keywords: ["Veranstaltung", "Kirta"]
            }
        ];

        const sortSelect = document.getElementById("sort-articles");
        const filterButtons = document.querySelectorAll(".filter-btn");
        let currentSort = "date-desc";
        let currentFilter = "Alle";

        function renderArticles(articlesToRender) {
            articlesContainer.innerHTML = '';
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
            let filteredArticles = [...articles];
            if (currentFilter !== "Alle") {
                filteredArticles = filteredArticles.filter(article => article.keywords.includes(currentFilter));
            }
            if (currentSort === "date-desc") {
                filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (currentSort === "date-asc") {
                filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
            }
            renderArticles(filteredArticles);
        }

        sortSelect.addEventListener("change", (event) => {
            currentSort = event.target.value;
            filterAndSortArticles();
        });

        filterButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                event.target.classList.add("active");
                currentFilter = event.target.dataset.keyword;
                filterAndSortArticles();
            });
        });

        filterAndSortArticles();
    }


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

    // --- Photo Archive Year Filter ---
    const yearFilterContainer = document.getElementById('year-filter');
    if (yearFilterContainer) {
        const filterButtons = yearFilterContainer.querySelectorAll('.filter-btn');
        const galleries = document.querySelectorAll('.archive-gallery');

        function filterGalleries(year) {
            galleries.forEach(gallery => {
                if (gallery.dataset.year === year) {
                    gallery.style.display = 'block';
                } else {
                    gallery.style.display = 'none';
                }
            });
        }

        filterButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');

                // Filter the galleries
                const selectedYear = event.target.dataset.year;
                filterGalleries(selectedYear);
            });
        });

        // Initial filter on page load (for the default active year)
        const initialYear = yearFilterContainer.querySelector('.filter-btn.active').dataset.year;
        filterGalleries(initialYear);
    }

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdowns = document.querySelectorAll('.nav-dropdown > a');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
            mainNav.classList.toggle('nav-active');
            navToggle.classList.toggle('nav-active');
        });
    }

    // Handle dropdown clicks on mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 992 && mainNav.classList.contains('nav-active')) {
                e.preventDefault();
                dropdown.parentElement.classList.toggle('dropdown-open');
            }
        });
    });
});