document.addEventListener("DOMContentLoaded", function () {
    function setupToggle(buttonId, containerId) {
      const toggleBtn = document.getElementById(buttonId);
      const content = document.getElementById(containerId);

      toggleBtn.addEventListener("click", () => {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        toggleBtn.textContent = isVisible ? "Tampilkan" : "Sembunyikan";
      });
    }

    // Aktifkan toggle untuk masing-masing bagian
    setupToggle("toggleProjects", "projects-container");
    setupToggle("toggleExperience", "experienceContent");
  });