const programs = [
    {
        imageUrl: "../img/img1.webp",
        title: "Mindfulness Meditation Retreat",
        duration: "7 days",
        description: "Achieve inner peace and mental clarity through guided meditation sessions, mindful practices, and group discussions.",
        includes: [
            "Guided meditation sessions",
            "Mindfulness workshops",
            "Group discussions"
        ]
    },
    {
        imageUrl: "../img/img2.jpg",
        title: "Digital Detox Retreat",
        duration: "5 days",
        description: "Disconnect from the digital world and cultivate presence and awareness through digital detox workshops and outdoor activities.",
        includes: [
            "Digital detox workshops",
            "Outdoor activities",
            "Mindfulness exercises"
        ]
    },
    {
        imageUrl: "../img/img3.webp",
        title: "Holistic Wellness Retreat",
        duration: "10 days",
        description: "Integrate physical, mental, and spiritual practices for overall health and balance, including yoga, meditation, and nutritional workshops.",
        includes: [
            "Yoga and meditation sessions",
            "Nutritional workshops",
            "Holistic therapies"
        ]
    },
    {
        imageUrl: "../img/img4.jpeg",
        title: "Stress Relief Retreat",
        duration: "3 days",
        description: "Unwind and de-stress with relaxing activities such as massage therapy, stress management workshops, and meditation sessions.",
        includes: [
            "Massage therapy",
            "Stress management workshops",
            "Meditation sessions"
        ]
    },
    {
        imageUrl: "../img/img5.jpg",
        title: "Personal Growth Retreat",
        duration: "7 days",
        description: "Explore your inner self, set personal goals, and develop a greater understanding of your potential and self-discovery activities.",
        includes: [
            "Personal development workshops",
            "Goal-setting activities",
            "Self-discovery exercises"
        ]
    },
    {
        imageUrl: "../img/img6.jpg",
        title: "Yoga and Wellness Retreat",
        duration: "5 days",
        description: "Enhance physical and mental well-being with daily yoga classes, meditation sessions, and nutritional counseling.",
        includes: [
            "Daily yoga classes",
            "Meditation sessions",
            "Nutritional counseling"
        ]
    },
    {
        imageUrl: "../img/img7.jpg",
        title: "Creative Expression Retreat",
        duration: "4 days",
        description: "Unlock creative potential through artistic expression, including art workshops, creative writing sessions, and music classes.",
        includes: [
            "Art workshops",
            "Creative writing sessions",
            "Music classes"
        ]
    },
    {
        imageUrl: "../img/img8.webp",
        title: "Silent Retreat",
        duration: "5 days",
        description: "Experience the profound benefits of silence with silent meditation sessions, mindful walking, and reflection periods.",
        includes: [
            "Silent meditation sessions",
            "Mindful walking",
            "Reflection periods"
        ]
    },
    {
        imageUrl: "../img/img9.webp",
        title: "Wellness for Seniors Retreat",
        duration: "6 days",
        description: "Tailored for seniors, featuring gentle activities like chair yoga, gentle exercise sessions, and health and wellness workshops.",
        includes: [
            "Chair yoga",
            "Gentle exercise sessions",
            "Health and wellness workshops"
        ]
    },
    {
        imageUrl: "../img/img10.jpg",
        title: "Women's Empowerment Retreat",
        duration: "5 days",
        description: "Empowerment workshops, self-defense classes, and group discussions focused on self-discovery and building confidence among women.",
        includes: [
            "Empowerment workshops",
            "Self-defense classes",
            "Group discussions"
        ]
    },
    {
        imageUrl: "../img/img11.jpg",
        title: "Men's Wellness Retreat",
        duration: "4 days",
        description: "Addressing men's unique wellness needs through fitness training, men's health seminars, and outdoor activities.",
        includes: [
            "Fitness training",
            "Men's health seminars",
            "Outdoor activities"
        ]
    },
    {
        imageUrl: "../img/img12.jpg",
        title: "Detox and Cleanse Retreat",
        duration: "7 days",
        description: "Cleanse the body and mind with a detox diet plan, fitness classes, spa treatments, and relaxation techniques.",
        includes: [
            "Detox diet plan",
            "Fitness classes",
            "Spa treatments"
        ]
    },
    {
        imageUrl: "../img/img13.webp",
        title: "Nature Immersion Retreat",
        duration: "6 days",
        description: "Connect with nature through activities like hiking, nature walks, wildlife observation, and outdoor meditation sessions.",
        includes: [
            "Hiking and nature walks",
            "Wildlife observation",
            "Outdoor meditation sessions"
        ]
    },
    {
        imageUrl: "../img/img14.jpeg",
        title: "Digital Wellness Workshops",
        duration: "3 days",
        description: "Educational workshops focusing on maintaining a healthy balance with digital technology, mindfulness apps, digital boundaries, and screen time management.",
        includes: [
            "Mindfulness apps",
            "Digital boundaries",
            "Screen time management"
        ]
    },
    {
        imageUrl: "../img/img15.jpeg",
        title: "Wellness for Parents Retreat",
        duration: "5 days",
        description: "Support for parents with relaxation techniques, parenting workshops, and rejuvenating activities.",
        includes: [
            "Parenting workshops",
            "Relaxation techniques",
            "Rejuvenating activities"
        ]
    }
];
document.addEventListener('DOMContentLoaded', function() {
    createProgramCards(); // Initial display of all programs

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchValue = searchInput.value.toLowerCase();
        const filteredPrograms = programs.filter(program => program.title.toLowerCase().includes(searchValue));
        createProgramCards(filteredPrograms);
    });
});

function createProgramCards(filteredPrograms = programs) {
    const programList = document.getElementById('programList');
    programList.innerHTML = ''; // Clear previous cards

    if (filteredPrograms.length === 0) {
        // Show "Not Found" message
        programList.innerHTML = '<p class="text-center">No results found.</p>';
    } else {
        // Create and display program cards
        filteredPrograms.forEach(program => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'col-sm-6');
            card.setAttribute('data-aos', 'fade-up');

            card.innerHTML = `
                <div class="card" data-aos="fade-up">
                    <img src="${program.imageUrl}" class="card-img-top neon-effect" alt="${program.title}">
                    <div class="card-header" style="font-family: Platypi, serif; font-style: italic;">
                        ${program.title}
                    </div>
                    <div class="card-body">
                        <p><strong>Duration:</strong> ${program.duration}</p>
                        <p>${program.description}</p>
                        <button class="btn btn-success" onclick="showDetails('${program.title.replaceAll(/[^\w\s]/gi, '').replaceAll(' ', '')}')">View More</button>
                    </div>
                </div>
            `;

            programList.appendChild(card);
        });
    }

    AOS.init({
        duration: 800,
        once: true
    });
}

function showDetails(programTitle) {
    const program = programs.find(p => p.title.replaceAll(/[^\w\s]/gi, '').replaceAll(' ', '') === programTitle);
    if (program) {
        document.getElementById('programModalLabel').innerText = program.title;
        document.getElementById('programDuration').innerText = program.duration;
        document.getElementById('programDescription').innerText = program.description;
        const includesList = document.getElementById('programIncludes');
        includesList.innerHTML = '';
        program.includes.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            includesList.appendChild(li);
        });
        // Open the modal
        const modal = new bootstrap.Modal(document.getElementById('programModal'));
        modal.show();
    }
}
