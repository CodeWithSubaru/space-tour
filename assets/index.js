const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close__inner");
const activeLink = document.querySelectorAll("[data-active-link]");
const carousels = document.querySelectorAll(".carousel-item");
const main = document.querySelector("main");

// console.log("HII");
// let touchStartX = 0;
// let touchEndX = 0;

// function gesture() {
//   if (touchEndX < touchStartX) console.log("SWIPE to left");
//   else console.log("SWIPE to left");
// }

// main.addEventListener("touchstart", (e) => {
//   touchStartX = e.changedTouches[0].screenX;

//   gesture();
// });

// main.addEventListener("touchend", (e) => {
//   touchEndX = e.changedTouches[0].screenX;

//   gesture();
// });

// main.addEventListener("mousedown", (event) => {
//   touchStartX = event.screenX;
// });

// main.addEventListener("mouseup", (event) => {
//   touchEndX = event.screenX;
//   gesture();
// });

const crew = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./assets/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./assets/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

// Clicking events
document.addEventListener("click", (e) => {
  if (e.target === menu) {
    nav.classList.add("show");
  }

  if (e.target === close) {
    nav.classList.add("closing-ani");

    nav.addEventListener(
      "animationend",
      () => {
        nav.classList.remove("closing-ani", "show");
      },
      { once: true }
    );
  }
});

const paths = ["", "destination", "crew", "technology"];

// Searching for path
paths.forEach((path, i) => {
  const pathname = !path ? "/" : `/${path}.html`;

  if (window.location.pathname === pathname) {
    activeLink[i].dataset.activeLink = "true";
  }
});

// Carousel
carousels.forEach((carousel) => {
  const currentCarouselTech =
    document.querySelector(".carousel").dataset.name === "technology";
  if (currentCarouselTech) {
    setTechnology(technology[0]);
  } else {
    setCrew(crew[0]);
  }

  carousel.addEventListener("click", (e) => {
    const activeNum = +e.currentTarget.dataset.num;

    if (currentCarouselTech) {
      setTechnology(technology[activeNum - 1]);
    } else {
      setCrew(crew[activeNum - 1]);
    }

    carousels.forEach((carousel) => {
      if (carousel.classList.contains("active")) {
        carousel.classList.remove("active");
      }
    });

    e.currentTarget.classList.add("active");
  });
});

function setCrew(activeCrew) {
  document.querySelector(".crew-job").textContent = activeCrew.role;
  document.querySelector(".crew-name").textContent = activeCrew.name;
  document.querySelector(".crew-bio").textContent = activeCrew.bio;
  document.querySelector(".crew-img").src = activeCrew.images.webp;
}

function setTechnology(activeTechnology) {
  document.querySelector(".tech-name").textContent = activeTechnology.name;
  document.querySelector(".tech-description").textContent =
    activeTechnology.description;
  document.querySelector(".tech-img").src = activeTechnology.images.portrait;
}
