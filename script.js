/* Menu burger */

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const menuOverlay = document.querySelector(".menu-overlay");

  burger.addEventListener("click", function () {
      menuOverlay.classList.toggle("open");
      burger.classList.toggle("active"); // Transforme le burger en croix
  });
});

/* Defilement */

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const body = document.body;
  const navHeight = nav.offsetHeight;

  window.addEventListener("scroll", function () {
      if (window.scrollY > 100 && window.scrollY <= 200) {
          nav.classList.add("fixed");
          nav.classList.remove("hidden");
          body.style.paddingTop = `${navHeight}px`; // Ajoute un espace sous la navbar
      } else if (window.scrollY > 200) {
          nav.classList.add("hidden"); // Cache la navbar après 200px
      } else {
          nav.classList.remove("fixed", "hidden"); // Réinitialise si on revient en haut
          body.style.paddingTop = "0px"; // Supprime l’espace quand la navbar redevient normale
      }
  });
});

/* Inscription */

document.addEventListener("DOMContentLoaded", function () {
  const connexionDiv = document.getElementById("connexion");
  const inscriptionDiv = document.getElementById("inscription");
  const showInscription = document.getElementById("show-inscription");
  const showConnexion = document.getElementById("show-connexion");

  showInscription.addEventListener("click", function () {
      connexionDiv.classList.add("hidden");
      inscriptionDiv.classList.remove("hidden");
  });

  showConnexion.addEventListener("click", function () {
      inscriptionDiv.classList.add("hidden");
      connexionDiv.classList.remove("hidden");
  });
});

/* Formulaire */

document.addEventListener("DOMContentLoaded", function () {
  const connexionDiv = document.getElementById("connexion");
  const inscriptionDiv = document.getElementById("inscription");
  const showInscription = document.getElementById("show-inscription");
  const showConnexion = document.getElementById("show-connexion");

  const connexionForm = document.getElementById("btn-connexion");
  const inscriptionForm = document.getElementById("btn-inscription");

  showInscription.addEventListener("click", function () {
      connexionDiv.classList.add("hidden");
      inscriptionDiv.classList.remove("hidden");
  });

  showConnexion.addEventListener("click", function () {
      inscriptionDiv.classList.add("hidden");
      connexionDiv.classList.remove("hidden");
  });

  // Regex pour validation de l'email
  function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
  }

  // Regex pour validation du mot de passe
  function validatePassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
  }

  // Validation du formulaire de connexion
  connexionForm.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire
      const email = document.querySelector("#connexion input[type='email']").value;
      const password = document.querySelector("#connexion input[type='password']").value;

      if (!validateEmail(email)) {
          alert("Veuillez entrer un email valide.");

          return;
      }

      if (!validatePassword(password)) {
          alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
          return;
      }

      alert("Connexion réussie !");
  });

  // Validation du formulaire d'inscription
  inscriptionForm.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire
      const email = document.querySelector("#inscription input[type='email']").value;
      const password = document.querySelector("#inscription input[type='password']").value;
      const erreur = document.getElementsByiD("erreur");
      const confirmPassword = document.querySelector("#inscription input[placeholder='Confirmez le mot de passe']").value;

      if (!validateEmail(email)) {
          alert("Veuillez entrer un email valide.");
          erreur.style.display("block");
          return;
      }

      if (!validatePassword(password)) {
          alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
          erreur.style.display("block");
          return;
      }

      if (password !== confirmPassword) {
          alert("Les mots de passe ne correspondent pas.");
          return;
      }

      alert("Inscription réussie !");
  });
});
