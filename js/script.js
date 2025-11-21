document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
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
