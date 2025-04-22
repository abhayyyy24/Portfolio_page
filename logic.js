function toggleMenu(){
    const links = document.getElementById("links")
    links.classList.toggle("active");
}


    const typingElement = document.querySelector('.typing');
    const roles = [
        "AI/ML Engineer.",
        "Full_Stack Developer.",
        "App_Developer."
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = roles[roleIndex];
        const visibleText = currentText.substring(0, charIndex);

        typingElement.textContent = visibleText;

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                // Pause before deleting
                isDeleting = true;
                setTimeout(typeEffect, 1500);
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                setTimeout(typeEffect, 60);
            } else {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeEffect, 500);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", typeEffect);

