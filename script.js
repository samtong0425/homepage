document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector("#darkModeToggle");

    // Function to set the theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
        if (darkModeToggle) {
            darkModeToggle.checked = theme === "dark";
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Add event listener for the toggle switch
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", () => {
            const newTheme = darkModeToggle.checked ? "dark" : "light";
            setTheme(newTheme);
        });
    }
});
