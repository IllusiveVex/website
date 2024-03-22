document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll(".project-image");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("close");

  projects.forEach((project, index) => {
    project.addEventListener("click", function() {
      const imgSrc = this.querySelector("img").src;
      modalImg.src = imgSrc;
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent scrolling background
    });
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  });

  // Close modal on outside click
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Restore scrolling
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Toggle menu visibility when menu toggle button is clicked
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Close menu when clicking outside of it
    window.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");

    function updateMenuPosition() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const menuHeight = menu.offsetHeight;

        // Calculate the vertical position of the menu
        let newTop = (windowHeight - menuHeight) / 2;

        // Adjust the top position based on scrolling
        newTop -= scrollTop;

        // Ensure the menu stays within the window bounds
        if (newTop < 0) {
            newTop = 0;
        }

        // Set the new top position of the menu
        menu.style.top = `${newTop}px`;
    }

    // Initial positioning of the menu
    updateMenuPosition();

    // Update menu position when scrolling
    window.addEventListener("scroll", updateMenuPosition);

    // Update menu position when clicking menu links
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const targetOffset = targetSection.offsetTop;
                window.scrollTo({
                    top: targetOffset,
                    behavior: "smooth"
                });
            }
        });
    });
});
