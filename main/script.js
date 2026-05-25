const projects = [
  {
    title: "Distributed Systems Reliability Framework",
    subtitle: "Stripe · Software Engineering Intern · 2025",
    description: [
      "Built a Golang regression testing framework for evaluating reliability across distributed services.",
      "Integrated AWS-based fault injection, smoke testing, and Prometheus observability into deployment workflows.",
      "Reduced manual engineering effort by ~300 hours annually through automated deploy-time validation."
    ]
  },
  {
    title: "Large-Scale AI Training Simulation",
    subtitle: "Lenovo · AI Infrastructure Intern · 2024",
    description: [
      "Designed a simulation framework for ML training across 4,096 GPUs to analyze scalability and network performance.",
      "Generated synthetic PyTorch training traces for reproducible benchmarking without physical cluster deployment.",
      "Developed visualization tools that reduced experimentation costs by 90% while preserving research-grade fidelity."
    ]
  },
  {
    title: "LLMs for Neural Decoding",
    subtitle: "Neuroscience Research · Duke University · 2025–Present",
    description: [
      "Investigate whether large language models can predict zebrafish behavior from neural activity.",
      "Benchmarked multiple LLMs and established standardized evaluation protocols for cross-model comparison.",
      "Co-authored work submitted to NeurIPS exploring strengths and limitations of LLMs in neuroscience."
    ]
  }
];

function renderProjects() {
  const container = document.getElementById("project-list");
  const template = document.getElementById("project-card-template");
  if (!container || !template) return;

  container.replaceChildren();

  projects.forEach((project) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".project-title").textContent = project.title;
    card.querySelector(".project-meta").textContent = project.subtitle;

    const list = card.querySelector(".project-description");
    project.description.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    container.appendChild(card);
  });
}

function setYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
}

function setupScrollSpy() {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const links = Array.from(document.querySelectorAll(".nav-link"));

  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");
        links.forEach((link) => {
          const isMatch = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", isMatch);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setYear();
  setupScrollSpy();
});
