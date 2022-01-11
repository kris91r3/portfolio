// Variabler der refererer til henholdsvis ".toggle-btn" og nav
const btn = document.querySelector(".toggle-btn");

const nav = document.querySelector("nav");

// Function, der hedder toggleMenu()
function toggleMenu() {
  // 1. Toggle en klasse på nav
  console.log("nav");
  nav.classList.toggle("nav");
  // 2. Toggle en klasse, der hedder "shown"
  console.log("shown");
  nav.classList.toggle("shown");

  // 1. En variabel, der hedder menuShown, som er lig med nav (variablen), hvis den indeholder klassen "shown" (classList.contains(""))

  const menuShown = nav.classList.contains("shown");
  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown" (burgermenuen er åbnet), sæt da btn.textContent (sætter alt text for btn og dens efterkommere) til "X"
    console.log("X");
    btn.textContent = "x";
  } else {
    // hvis IKKE nav har klassen "shown" (burgermenuen er lukket), sæt da btn.textContent til "≡"
    console.log("≡");
    btn.textContent = "≡";
  }
}

/* klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);
