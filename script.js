// Customize or add your downloadable file links here
const customButtons = [
  {
    name: "Setup Game 1",
    link: "https://example.com/files/game1_setup.exe", // Replace with real download links
    image: "https://picsum.photos/400/600?random=1"
  },
  {
    name: "Mod Pack ZIP",
    link: "https://example.com/files/modpack.zip",
    image: "https://picsum.photos/400/600?random=2"
  },
  {
    name: "Wallpaper HD",
    link: "https://example.com/files/wallpaper.png",
    image: "https://picsum.photos/400/600?random=3"
  },
  {
    name: "Empty File",
    link: "", // Test item with no link attached
    image: "https://picsum.photos/400/600?random=4"
  }
];

const container = document.getElementById("buttons");
const popupBg = document.getElementById("popupBg");
const popupText = document.getElementById("popupText");
const popupCloseBtn = document.getElementById("popupCloseBtn");

// Opens modal window
function showPopup(link) {
  popupBg.style.display = "flex";
  popupBg.setAttribute("data-link", link || "");
  
  if (link && link.trim() !== "") {
    popupText.textContent = "Your download is starting!";
  } else {
    popupText.textContent = "No file link attached to this button.";
  }
}

// Closes modal and triggers silent background download
function closePopup() {
  const link = popupBg.getAttribute("data-link");
  popupBg.style.display = "none";

  if (link && link.trim() !== "") {
    // Standard web method to safely trigger file downloads without changing the web page
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = link;
    downloadAnchor.setAttribute("download", ""); // Tells browser to fetch file instead of open it
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  }
}

popupCloseBtn.addEventListener("click", closePopup);

// Dynamic generator loops exactly 50 total elements
for (let i = 0; i < 50; i++) {
  const data = customButtons[i] ? customButtons[i] : {
    name: `File Payload ${i + 1}`,
    link: "",
    image: `https://picsum.photos/400/600?random=${i + 1}`
  };

  const wrapper = document.createElement("div");
  wrapper.className = "button-wrapper";

  const title = document.createElement("div");
  title.className = "button-title";
  title.textContent = data.name;

  const btn = document.createElement("button");
  btn.className = "big-button";
  btn.style.backgroundImage = `url('${data.image}')`;

  btn.addEventListener("click", () => {
    showPopup(data.link);
  });

  wrapper.appendChild(title);
  wrapper.appendChild(btn);
  container.appendChild(wrapper);
}
