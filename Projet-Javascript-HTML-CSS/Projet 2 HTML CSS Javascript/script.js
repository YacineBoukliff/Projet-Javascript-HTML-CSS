document.addEventListener("DOMContentLoaded", function () {
  const salahButton = document.getElementById("salah-button");
  const salahCard = document.getElementById("salah-card");
  let isImageShown = false;

  salahButton.addEventListener("click", function () {
    if (!isImageShown) {
      // Sauvegardez le contenu original de la carte
      const originalContent = salahCard.innerHTML;

      // Remplacez le contenu par l'image
      salahCard.innerHTML =
        '<img src="Images/mohamed-salah-profile-headshot-202425.webp"alt="Mohamed Salah" style="width: 100%; height: 100%; object-fit: cover;">';

      // Changez le texte du bouton
      salahButton.textContent = "Retour à la carte";

      isImageShown = true;
    } else {
      // Restaurez le contenu original
      salahCard.innerHTML = originalContent;

      // Remettez le texte original du bouton
      salahButton.textContent = "Mohamed Salah";

      isImageShown = false;
    }
  });
});
