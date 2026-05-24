// Customize or add custom buttons here
const customButtons = [
  {
    name: "Google",
    link: "https://google.com",
    image: "https://picsum.photos/400/600?random=1"
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    image: "https://picsum.photos/400/600?random=2"
  },
  {
    name: "GitHub",
    link: "https://github.com",
    image: "https://picsum.photos/400/600?random=3"
  },
  {
    name: "No Link",
    link: "",
    image: "https://picsum.photos/400/600?random=4"
  }
];

// DOM Element Selectors
const container = document.getElementById("buttons");
const popupBg = document.getElementById("popupBg");
const popupText = document.getElementById("popupText");
const popupCloseBtn = document.getElementById("popupCloseBtn");

// Opens the modal and changes content based on link status
function showPopup(link) {
  popupBg.style.display = "flex";
  popupBg.setAttribute("data-link", link || "");
  
  if (link && link.trim() !== "") {
    popupText.textContent = "Redirecting...";
  } else {
    popupText.textContent = "No link attached!";
  }
}

// Closes modal and redirects if valid link exists
function closePopup() {
  const link = popupBg.getAttribute("data-link");
  popupBg.style.display = "none";

  if (link && link.trim() !== "") {
    window.location.href = link;
  }
}

// Add event listener to modal button instead of inline HTML execution
popupCloseBtn.addEventListener("click", closePopup);

// Dynamic loop generating 50 total elements
for (let i = 0; i < 50; i++) {
  // Use explicit array index elements first, fallback to automatic generic placeholders
  const data = customButtons[i] ? customButtons[i] : {
    name: `Button ${i + 1}`,
    link: "",
    image: `https://picsum.photos/400/600?random=${i + 1}`
  };

  // Create wrapper flex element
  const wrapper = document.createElement("div");
  wrapper.className = "button-wrapper";

  // Create title layer
  const title = document.createElement("div");
  title.className = "button-title";
  title.textContent = data.name;

  // Create interactive clickable background button
  const btn = document.createElement("button");
  btn.className = "big-button";
  btn.style.backgroundImage = `url('${data.image}')`;

  // Bind individual configuration payload
  btn.addEventListener("click", () => {
    showPopup(data.link);
  });

  // Append structures to workspace DOM
  wrapper.appendChild(title);
  wrapper.appendChild(btn);
  container.appendChild(wrapper);
}
