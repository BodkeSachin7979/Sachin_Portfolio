// Floating code animation
function createFloatingCode() {
  const container = document.getElementById("floatingCode");
  const codeLines = [
    "import pandas as pd",
    "df = pd.read_csv('data.csv')",
    "model.fit(X_train, y_train)",
    "def predict(model, data):",
    "from django.urls import path",
    "app = FastAPI()",
    "sns.heatmap(corr_matrix)",
    "plt.plot(x, y)",
    "class CustomerSegmentation:",
    "return jsonify(results)",
    "docker-compose up -d",
    "git push origin main",
    "📊",
    "🗃️",
    "🤖",
    "🎯",
    "🌐",
    "⚡",
    "📈",
    "📉",
    "👥",
    "🔗",
    "🐳",
    "🚀",
    "💬", // Communication
    "🎉", // Celebration/Happiness
    "🚀", // Progress/Success
    "🌟", // Excellence
    "🤝", // Collaboration
    "💡", // Ideas/Innovation
    "🎯", // Focus/Goals
    "✨", // Magic/Great results
    "🔥", // Awesome performance
    "😊", // Happiness/Satisfaction
    "✅", // Completion/Success
    "🏆", // Achievement
    "👏", // Appreciation
    "🎊", // Celebration
    "❤️", // Passion/Love for work
    "🦄", // Unique/Magical solutions
    "🌈", // Diversity/Creativity
    "⚡", // Speed/Efficiency
    "💫", // Wow factor
    "🎨", // Creativity
  ];

  codeLines.forEach((line, index) => {
    const codeLine = document.createElement("div");
    codeLine.classList.add("code-line");
    codeLine.textContent = line;

    // Random position
    codeLine.style.left = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 15 + 10;
    codeLine.style.animationDuration = `${duration}s`;

    // Random animation delay
    const delay = Math.random() * 5;
    codeLine.style.animationDelay = `${delay}s`;

    container.appendChild(codeLine);
  });
}

// Project category filtering
function setupProjectFiltering() {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const projectCards = document.querySelectorAll(".project-card");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      // Show/hide projects based on category
      projectCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("visible");

      // Animate skill bars
      if (element.classList.contains("skill-progress")) {
        const width = element.getAttribute("data-width");
        // Set a small timeout to ensure the animation triggers
        setTimeout(() => {
          element.style.width = `${width}%`;
        }, 100);
      }
    }
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile menu toggle
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Form submission
function setupForm() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Show success message (in a real app, you would send this to a server)
    alert(
      `Thank you, ${name}! Your message has been sent. I'll get back to you at ${email} soon.`
    );

    // Reset form
    contactForm.reset();
  });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        const navLinks = document.getElementById("navLinks");
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("active");
        }

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createFloatingCode();
  setupProjectFiltering();
  setupMobileMenu();
  setupForm();
  setupSmoothScrolling();

  // Initial check for animations
  handleScrollAnimations();

  // Event listeners
  window.addEventListener("scroll", () => {
    handleNavbarScroll();
    handleScrollAnimations();
  });

  // Trigger skill bar animations on page load
  setTimeout(() => {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = `${width}%`;
    });
  }, 500);
});
