document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("send-button");
  const messageBox = document.getElementById("message-box");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const overlay = document.getElementById("message-overlay");
  const overlayContent = document.getElementById("overlay-content");

  sendButton.addEventListener("click", async function () {
    const message = messageBox.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();

    if (!message || !email || !subject) {
      overlayContent.textContent = "Please fill out all fields!";
      overlay.style.display = "flex";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 2000);
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/yoshmolato42@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message,
          email: email,
          _subject: subject,
          _captcha: false,
        }),
      });

      if (response.ok) {
        overlayContent.textContent = "Message Sent!";
        overlay.style.display = "flex";
        messageBox.value = "";
        emailInput.value = "";
        subjectInput.value = "";
      } else {
        overlayContent.textContent = "Failed to send message. Try again.";
        overlay.style.display = "flex";
      }
    } catch (error) {
      console.error(error);
      overlayContent.textContent = "An error occurred. Please try again.";
      overlay.style.display = "flex";
    }

    setTimeout(() => {
      overlay.style.display = "none";
    }, 2000);
  });

  document.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll("[data-target]");
  
    navbarLinks.forEach(link => {
      link.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        const offset = parseInt(this.getAttribute("data-offset"), 10) || 0;
  
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          } else {
            entry.target.classList.remove("fade-in-visible");
          }
        });
      },
      { threshold: 0.3 }
    );
  
    fadeElements.forEach((el) => observer.observe(el));
  });

  
