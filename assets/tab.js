const destinations = [
  {
    id: 1,
    name: "Moon",
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    avgDistance: "384,400 km",
    travelTime: "3 days",
  },
  {
    id: 2,
    name: "Mars",
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
  `,
    avgDistance: " 225 mil. km",
    travelTime: " 9 months",
  },

  {
    id: 3,
    name: "Europa",
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    avgDistance: "628 mil. km",
    travelTime: "3 years",
  },

  {
    id: 4,
    name: "Titan",
    description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    avgDistance: "1.6 bil. km",
    travelTime: "7 years",
  },
];

const tabs = document.querySelectorAll(".tab");

// Tabs
tabs.forEach((tab) => {
  setDestination(destinations[0]);
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      if (tab.classList.contains("active")) {
        tab.classList.remove("active");
      }
    });

    tab.classList.add("active");

    const destinationNum = +e.currentTarget.dataset.destination;

    const activeDestination = destinations.find(
      (destination) => destinationNum === destination.id
    );

    setDestination(activeDestination);
  });
});

function setDestination(activeDestination) {
  document.querySelector(
    ".destination img"
  ).src = `assets/destination/image-${activeDestination.name.toLowerCase()}.webp`;

  document.querySelector(".destination .title").textContent =
    activeDestination.name;

  document.querySelector(".destination .intro").textContent =
    activeDestination.description;

  document.querySelector(".destination .avg-distance").textContent =
    activeDestination.avgDistance;

  document.querySelector(".destination .travel-time").textContent =
    activeDestination.travelTime;
}
