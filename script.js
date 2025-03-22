// Ensure GSAP is loaded in your project (via CDN or npm)

// Wait for the webpage to fully load
window.onload = () => {
  // Select the body or any specific element you want to animate
  gsap.fromTo(
    "article", // Target element(s)
    { opacity: 0 }, // Starting state
    { opacity: 1, duration: 3, ease: "power2.out" } // Ending state
  );
};