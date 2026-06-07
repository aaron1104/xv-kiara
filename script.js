/*
  Datos editables de la invitacion.
  Cambia estos valores y la pagina se actualizara automaticamente.
*/
const invitationData = {
  name: "Kiara",
  signature: "Kiara",
  dateLabel: "Viernes, 31 de julio de 2026",
  dateShort: "31 Julio \u00b7 6:30 PM",
  timeLabel: "6:30 p.m.",
  eventDate: "2026-07-31T18:30:00",
  parents: "Aaron Melgar y Noelia Taramona",
  godparents: "",
  rsvpDeadline: "15 de julio",

  ceremonyPlace: "Centro Aeron\u00e1utico de la FAP - Sal\u00f3n Revoredo",
  ceremonyTime: "6:30 p.m.",
  ceremonyAddress: "Av. Javier Prado Oeste 1081, San Isidro 15073",
  ceremonyMap: "https://maps.google.com/?q=Av.%20Javier%20Prado%20Oeste%201081%2C%20San%20Isidro%2015073",

  receptionPlace: "Centro Aeron\u00e1utico de la FAP - Sal\u00f3n Revoredo",
  receptionTime: "6:30 p.m.",
  receptionAddress: "Av. Javier Prado Oeste 1081, San Isidro 15073",
  receptionMap: "https://maps.google.com/?q=Av.%20Javier%20Prado%20Oeste%201081%2C%20San%20Isidro%2015073",

  formLink: "https://forms.gle/",
  songFormLink: "https://open.spotify.com/playlist/6cbHeqECJxBfpfkUmXrtZA?si=8afaed1fe09c4dca&pt=3e3dc187d6f09602584899435189fa54",

  spotifyUrl: "https://open.spotify.com/playlist/6cbHeqECJxBfpfkUmXrtZA",
  spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/6cbHeqECJxBfpfkUmXrtZA?utm_source=generator"
};

const intro = document.getElementById("intro");
const landing = document.getElementById("landing");
const openButton = document.getElementById("openInvitation");
const lanternCelebration = document.getElementById("lanternCelebration");
const revealItems = document.querySelectorAll(".reveal");
const parallaxItems = document.querySelectorAll(".parallax");
const countdownValues = {};

function applyInvitationData() {
  document.querySelectorAll("[data-config]").forEach((element) => {
    const key = element.dataset.config;
    if (invitationData[key]) {
      element.textContent = invitationData[key];
    }
  });

  setEditableLink("ceremonyMap", invitationData.ceremonyMap);
  setEditableLink("receptionMap", invitationData.receptionMap);
  setEditableLink("form", invitationData.formLink);
  setEditableLink("songForm", invitationData.songFormLink);
  setEditableLink("spotify", invitationData.spotifyUrl);

  const spotifyEmbed = document.getElementById("spotifyEmbed");
  spotifyEmbed.innerHTML = `
    <iframe
      style="border-radius:8px"
      src="${invitationData.spotifyEmbedUrl}"
      width="100%"
      height="352"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  `;
}

function setEditableLink(linkName, href) {
  const link = document.querySelector(`[data-link="${linkName}"]`);
  if (link && href) {
    link.href = href;
  }
}

function openInvitation() {
  openButton.disabled = true;
  intro.classList.add("is-opening");
  createLanternCelebration();

  window.setTimeout(() => {
    intro.classList.add("is-hidden");
    document.body.classList.remove("is-locked");
    landing.classList.add("is-visible");
    landing.removeAttribute("aria-hidden");
    revealItems[0]?.classList.add("is-visible");
  }, 2800);
}

function createLanternCelebration() {
  if (!lanternCelebration) return;

  lanternCelebration.innerHTML = "";
  lanternCelebration.classList.add("is-active");

  const lanterns = 14;

  for (let index = 0; index < lanterns; index++) {
    const lantern = document.createElement("span");
    const size = 34 + Math.random() * 42;
    const x = -220 + Math.random() * 440;
    const y = -260 - Math.random() * 420;
    const delay = Math.random() * 0.45;

    lantern.style.width = `${size}px`;
    lantern.style.height = `${size}px`;
    lantern.style.setProperty("--x", `${x}px`);
    lantern.style.setProperty("--y", `${y}px`);
    lantern.style.animationDelay = `${delay}s`;

    lanternCelebration.appendChild(lantern);
  }

  window.setTimeout(() => {
    lanternCelebration.classList.remove("is-active");
    lanternCelebration.innerHTML = "";
  }, 3400);
}

function updateCountdown() {
  const eventTime = new Date(invitationData.eventDate).getTime();
  const now = Date.now();
  const distance = eventTime - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (Number.isNaN(eventTime) || distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  setCountdownValue(daysEl, "days", String(days).padStart(2, "0"));
  setCountdownValue(hoursEl, "hours", String(hours).padStart(2, "0"));
  setCountdownValue(minutesEl, "minutes", String(minutes).padStart(2, "0"));
  setCountdownValue(secondsEl, "seconds", String(seconds).padStart(2, "0"));
}

function setCountdownValue(element, key, value) {
  if (countdownValues[key] === value) return;

  element.textContent = value;

  if (countdownValues[key] !== undefined) {
    element.classList.remove("is-flipping");
    void element.offsetWidth;
    element.classList.add("is-flipping");
  }

  countdownValues[key] = value;
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
}

function updateParallax() {
  const scrollY = window.scrollY;

  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.speed || 0.12);
    item.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });
}

applyInvitationData();
setupRevealAnimations();
updateCountdown();
setInterval(updateCountdown, 1000);

openButton.addEventListener("click", openInvitation);
window.addEventListener("scroll", updateParallax, { passive: true });
