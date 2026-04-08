document.addEventListener("DOMContentLoaded", () => {
  // Petite signature discrète dans la console
  console.log(
    "%c Portfolio Amsatou Diabel - ESTM 2026 ",
    "background: #6366f1; color: #fff; padding: 5px; border-radius: 3px;",
  );

  /* --- 1. GESTION DU MENU MOBILE --- */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".navbar ul");
  const icon = menuToggle ? menuToggle.querySelector("i") : null;

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Empêche la fermeture immédiate
      navLinks.classList.toggle("mobile-open");

      // Change l'icône de Hamburger à Croix
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    // Fermer le menu si on clique sur un lien ou en dehors du menu
    document.addEventListener("click", (e) => {
      if (
        navLinks.classList.contains("mobile-open") &&
        !navLinks.contains(e.target)
      ) {
        navLinks.classList.remove("mobile-open");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
      }
    });
  }

  /* --- 2. CURSEUR PERSONNALISÉ (UNIQUEMENT SUR PC) --- */
  if (window.innerWidth > 1024) {
    const cursor = document.createElement("div");
    cursor.id = "cursor";
    const follower = document.createElement("div");
    follower.id = "cursor-follower";
    document.body.append(cursor, follower);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      follower.animate(
        {
          left: e.clientX - 11 + "px",
          top: e.clientY - 11 + "px",
        },
        { duration: 500, fill: "forwards" },
      );
    });

    const clickables = document.querySelectorAll("a, button, .card, input");
    clickables.forEach((el) => {
      el.addEventListener(
        "mouseenter",
        () => (follower.style.transform = "scale(1.5)"),
      );
      el.addEventListener(
        "mouseleave",
        () => (follower.style.transform = "scale(1)"),
      );
    });
  }

  /* --- 3. EFFET TYPEWRITER (INDEX) --- */
  const typewriter = document.getElementById("typewriter");
  if (typewriter) {
    const text = typewriter.innerText;
    typewriter.innerText = "";
    let i = 0;
    function type() {
      if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    }
    type();
  }
});
