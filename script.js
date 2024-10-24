// Speakers Mock Data
// TODO: Can be replaced with API
const speakersData = [
  {
    "id": 1,
    "name": "John Doe",
    "title": "Chief Marketing Officer",
    "company": "Acme Corp",
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
    "bio": "Monotonectally synergize business communities rather than client-centric convergence.",
    "socials": {
      "twitter": "https://twitter.com/johndoe",
      "linkedin": "https://linkedin.com/in/johndoe"
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "title": "Chief Engagement Officer",
    "company": "Acquia",
    "image": "https://randomuser.me/api/portraits/women/2.jpg",
    "bio": "Assertively unleash cross-platform best practices rather than pandemic total linkage.",
    "socials": {
      "twitter": "https://twitter.com/janesmith",
      "linkedin": "https://linkedin.com/in/janesmith"
    }
  },
  {
    "id": 3,
    "name": "David Brown",
    "title": "Chief Technical Developer",
    "company": "Pantheon",
    "image": "https://randomuser.me/api/portraits/men/3.jpg",
    "bio": "Synergistically monetize parallel infomediaries whereas 2.0 mindshare.",
    "socials": {
      "twitter": "https://twitter.com/davidbrown",
      "linkedin": "https://linkedin.com/in/davidbrown"
    }
  },
  {
    "id": 4,
    "name": "Lucy White",
    "title": "Chief Marketing Officer",
    "company": "Specbee",
    "image": "https://randomuser.me/api/portraits/women/4.jpg",
    "bio": "Dramatically pursue real-time markets through e-business strategic themes.",
    "socials": {
      "twitter": "https://twitter.com/lucywhite",
      "linkedin": "https://linkedin.com/in/lucywhite"
    }
  },
  {
    "id": 5,
    "name": "Mark Black",
    "title": "Chief Innovation Officer",
    "company": "TechWave",
    "image": "https://randomuser.me/api/portraits/men/5.jpg",
    "bio": "Continuously integrate and revolutionize mission-critical mindshare.",
    "socials": {
      "twitter": "https://twitter.com/markblack",
      "linkedin": "https://linkedin.com/in/markblack"
    }
  },
  {
    "id": 6,
    "name": "Alice Green",
    "title": "Chief Product Officer",
    "company": "InnoTech",
    "image": "https://randomuser.me/api/portraits/women/6.jpg",
    "bio": "Proactively leverage scalable metrics and technologies.",
    "socials": {
      "twitter": "https://twitter.com/alicegreen",
      "linkedin": "https://linkedin.com/in/alicegreen"
    }
  }
];

let currentIndex = 0;
const visibleCount = 4;
const speakersCount = speakersData.length;
const speakersContainer = document.getElementById('speakersContainer');
const activeSpeakerDetails = document.getElementById('activeSpeakerDetails');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize speaker cards
const initializeSpeakers = () => {
  speakersContainer.innerHTML = ''; // Clear any existing speakers
  speakersData.forEach((speaker) => {
    const speakerCard = document.createElement('div');
    speakerCard.classList = 'bg-white m-2 p-4 rounded-lg shadow-md w-48 md:w-64 cursor-pointer';
    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" class="w-24 h-24 object-cover rounded-full mx-auto mb-4"/>
      <h3 class="text-lg font-semibold text-center">${speaker.name}</h3>
      <p class="text-gray-600 text-center">${speaker.title}</p>
      <p class="text-sm text-gray-400 text-center">${speaker.company}</p>
    `;
    speakerCard.addEventListener('click', () => openDetails(speaker));
    speakersContainer.appendChild(speakerCard);
  });

  updateCarousel(); // Update the carousel on initialization
};

// Open speaker details
const openDetails = (speaker) => {
  activeSpeakerDetails.classList.remove('hidden');
  activeSpeakerDetails.innerHTML = `
    <button class="absolute top-2 right-2 text-gray-500 font-semibold hover:text-gray-700" onclick="closeDetails()">
      <i class="fas fa-times text-md"></i>
    </button>
    <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <img src="${speaker.image}" alt="${speaker.name}" class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"/>
      <div class="flex flex-col">
        <h3 class="text-xl font-bold">${speaker.name}</h3>
        <p class="text-gray-600">${speaker.title}</p>
        <p class="text-gray-400">${speaker.company}</p>
        <div class="flex space-x-4 mt-4">
          ${speaker.socials.linkedin ? `<a href="${speaker.socials.linkedin}" target="_blank"><i class="fab fa-linkedin text-black hover:text-gray-700"></i></a>` : ''}
          ${speaker.socials.twitter ? `<a href="${speaker.socials.twitter}" target="_blank"><i class="fab fa-twitter text-black hover:text-gray-700"></i></a>` : ''}
        </div>
      </div>
      <div class="border-l border-gray-300 h-40 mx-4 hidden md:block"></div>
      <div class="pr-4">
        <p class="text-gray-500 mt-2">${speaker.bio}</p>
      </div>
    </div>
  `;
};

// Close speaker details
const closeDetails = () => {
  activeSpeakerDetails.classList.add('hidden');
};

// Update carousel based on currentIndex
const updateCarousel = () => {
  const transformPercentage = (currentIndex * (100 / visibleCount));
  speakersContainer.style.transform = `translateX(-${transformPercentage}%)`;
  updateArrows(); // Update arrow buttons
};

// Handle next button click
nextBtn.addEventListener('click', () => {
  if (currentIndex < Math.ceil(speakersCount / visibleCount) - 1) {
    currentIndex += 1;
    updateCarousel();
  }
});

// Handle previous button click
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateCarousel();
  }
});

// Update arrow button states
const updateArrows = () => {
  prevBtn.classList.toggle('opacity-50', currentIndex === 0);
  prevBtn.classList.toggle('cursor-not-allowed', currentIndex === 0);

  const atLastIndex = currentIndex >= Math.ceil(speakersCount / visibleCount) - 1;
  nextBtn.classList.toggle('opacity-50', atLastIndex);
  nextBtn.classList.toggle('cursor-not-allowed', atLastIndex);
};

// Initialize the speakers and carousel
initializeSpeakers();
