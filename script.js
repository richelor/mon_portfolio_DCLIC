/* =============================================================
   Objet représentant le propriétaire du portfolio
   ============================================================= */
const portfolioOwner = {
    name: "Richelor POLYNICE",
    title: "Économiste – Gestionnaire – Diplomatie & Coopération Internationale",
    email: "richelorpolynice@gmail.com",
    location: "Haïti"
};

console.log("Portfolio chargé pour :", portfolioOwner.name);

/* =============================================================
   Attendre que le HTML soit entièrement chargé
   ============================================================= */
document.addEventListener("DOMContentLoaded", () => {

    /* =============================================================
       1) Animation des barres de compétences (Skill Bars)
       ============================================================= */

    const skillBars = document.querySelectorAll(".skill-fill");

    skillBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width + "%";
        }, 300);  // délai léger pour une animation fluide
    });


    /* =============================================================
       2) Effet de survol sur les cartes projets
       ============================================================= */

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });
    });


    /* =============================================================
       3) Validation du formulaire de contact (index.html)
       ============================================================= */

    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Inputs réels  :
            const prenomInput = document.getElementById("prenom");
            const nomInput = document.getElementById("nom");
            const sujetInput = document.getElementById("sujet");
            const messageInput = document.getElementById("message");

            // Zones d’erreur
            const prenomError = document.getElementById("prenom-error");
            const nomError = document.getElementById("nom-error");
            const messageError = document.getElementById("message-error");
            const successMessage = document.getElementById("form-success");

            // Réinitialisation
            if (prenomError) prenomError.textContent = "";
            if (nomError) nomError.textContent = "";
            if (messageError) messageError.textContent = "";
            if (successMessage) successMessage.textContent = "";

            let isValid = true;

            if (!prenomInput.value.trim()) {
                prenomError.textContent = "Veuillez saisir votre prénom.";
                isValid = false;
            }

            if (!nomInput.value.trim()) {
                nomError.textContent = "Veuillez saisir votre nom.";
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                messageError.textContent = "Veuillez écrire un message.";
                isValid = false;
            }

            if (isValid) {
                successMessage.textContent =
                    "Merci pour votre message, je vous répondrai dans les meilleurs délais.";

                form.reset();
            }
        });
    }

});
