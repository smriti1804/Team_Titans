// Function to handle user signup
function signup(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve values from input fields
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPasswordId").value;
    
    // Basic validation
    if (username.length < 4) {
        alert("Username must be at least 4 characters long.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }


    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return; // Exit the function if passwords do not match
    }

    // Store the username and password in local storage
    try {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert("Signup successful! You can now log in."); // Notify the user of successful signup
        window.location.href = '/login.html'; // Redirect to home page after successful login
    } catch (error) {
        console.error("Error storing data: ", error);
        alert("An error occurred during signup. Please try again.");
    }
}


// Function to handle user login
function login(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve values from input fields
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    // Basic validation
    if (username.length < 4) {
        alert("Username must be at least 4 characters long.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Retrieve saved username and password from local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // Check if entered credentials match saved credentials
    if (username === savedUsername && password === savedPassword) {
        alert("Login successful!"); // Notify the user of successful login
        window.location.href = '/home.html'; // Redirect to home page after successful login
    } else {
        alert("Incorrect username or password. Please try again."); // More specific error message
    }
}



const mentors = [
    {
        name: "Dr. Birmohan Singh",
        expertise: "Mechanical Engineering",
        experience: "15 years",
        timeSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
        image: "/assets/Dr_Birmohan_Singh.jpg"
    },
    {
        name: "Dr. Damanpreet Singh",
        expertise: "Machine Learning & AI",
        experience: "12 years",
        timeSlots: ["11:00 AM", "3:00 PM", "5:00 PM"],
        image: "/assets/Dr_Damanpreet_Singh.jpg"
    },
    {
        name: "Dr. Major Singh Goraya",
        expertise: "Web Development",
        experience: "10 years",
        timeSlots: ["9:00 AM", "1:00 PM", "3:00 PM"],
        image: "/assets/Dr_Major Singh_Goraya.jpg"
    },
    {
        name: "Dr. Manoj Sachan",
        expertise: "Cyber Security",
        experience: "12 years",
        timeSlots: ["11:00 AM", "3:00 PM", "5:00 PM"],
        image: "/assets/Dr_Manoj_Sachan.jpg"
    },
    {
        name: "Dr. Gurjinder Kaur",
        expertise: "Civil Engineering",
        experience: "12 years",
        timeSlots: ["10:00 AM", "4:00 PM", "7:00 PM"],
        image: "/assets/Dr_Gurjinder_Kaur.jpg"
    },
    {
        name: "Dr. Amar Nath",
        expertise: "Graphic Designer",
        experience: "8 years",
        timeSlots: ["7:00 AM", "11:00 AM", "8:00 PM"],
        image: "/assets/Dr_Amar_Nath.jpg"
    },
    {
        name: "Dr. Jagdeep Singh",
        expertise: "Python",
        experience: "7 years",
        timeSlots: ["8:00 AM", "9:00 AM", "12:00 PM"],
        image: "/assets/Dr_Jagdeep_Singh.jpg"
    },
    {
        name: "Dr. Manminder Singh",
        expertise: "Python",
        experience: "4 years",
        timeSlots: ["10:00 AM", "1:00 PM", "2:00 PM"],
        image: "/assets/Dr_Manminder_Singh.jpg"
    },
    {
        name: "Dr. Preetpal Kaur Buttar",
        expertise: "Javascript",
        experience: "5 years",
        timeSlots: ["10:30 AM", "2:30 PM", "9:00 PM"],
        image: "/assets/Dr_Preetpal_Kaur_Buttar.jpg"
    },
    {
        name: "Dr. Tajinder Singh",
        expertise: "C",
        experience: "12 years",
        timeSlots: ["10:00 AM", "4:00 PM", "7:00 PM"],
        image: "/assets/Dr_Tajinder_Singh.jpg"
    },
    {
        name: "Dr. Utkarsh",
        expertise: "DevOps",
        experience: "9 years",
        timeSlots: ["11:00 AM", "4:30 PM", "7:00 PM"],
        image: "/assets/Dr_Utkarsh.jpg"
    },
    {
        name: "Dr. Vinod Kumar Verma",
        expertise: "MongoDb",
        experience: "5 years",
        timeSlots: ["10:00 AM", "4:00 PM", "7:00 PM"],
        image: "/assets/Dr_Vinod_Kumar_Verma.jpg"
    },
    {
        name: "Jaspal Singh",
        expertise: "Sql",
        experience: "16 years",
        timeSlots: ["7:45 AM", "9:00 AM", "11:40 AM"],
        image: "/assets/Jaspal_Singh.jpg"
    },
    {
        name: "Rahul Gautam",
        expertise: "Sql",
        experience: "6 years",
        timeSlots: ["8:00 AM", "6:30 PM", "9:00 PM"],
        image: "/assets/Rahul_Gautam.jpg"
    },
    {
        name: "Dr_Jatinder_Pal_Singh.jpg",
        expertise: "AWS",
        experience: "15 years",
        timeSlots: ["10:00 AM", "4:00 PM", "7:00 PM"],
        image: "/assets/Dr_Jatinder_Pal_Singh.jpg"
    },
    {
        name: "Sukhpreet Singh",
        expertise: "Azure",
        experience: "4 years",
        timeSlots: ["11:00 AM", "1:45 PM", "4:45 PM"],
        image: "/assets/Sukhpreet_Singh.jpg"
    },
];

// Populate mentor cards in the mentor grid
function populateMentors() {
    const mentorGrid = document.querySelector('.mentor-grid'); // Select the mentor grid element
    mentorGrid.innerHTML = mentors.map(mentor => `
        <div class="mentor-card">
            <img src="${mentor.image}" alt="${mentor.name}" class="mentor-image"> <!-- Display mentor's image -->
            <h3>${mentor.name}</h3>
            <p><strong>Expertise:</strong> ${mentor.expertise}</p>
            <p><strong>Experience:</strong> ${mentor.experience}</p>
            <div class="time-slots">
                ${mentor.timeSlots.map(slot => `
                    <div class="time-slot available" onclick="bookSlot(this)"> <!-- Available slot clickable for booking -->
                        ${slot}
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" style="margin-top: 1rem;" onclick="openChat()">Message</button> <!-- Button to open chat -->
        </div>
    `).join(''); // Generate HTML for each mentor and append it to the mentor grid
}

// Booking functionality for time slots
function bookSlot(element) {
    // Check if the selected time slot is available
    if (element.classList.contains('available')) {
        // Confirm booking with the user
        if (confirm('Would you like to book this slot?')) {
            element.classList.remove('available'); // Mark the slot as booked
            element.classList.add('booked'); // Update the slot's class to reflect booking
            alert('Slot booked successfully!'); // Notify the user of successful booking
        }
    }
}

// Chat functionality to open the chat window
function openChat() {
    document.querySelector('#chat').style.display = 'block'; // Display the chat window
    document.querySelector('#mentors').style.display = 'none'; // Hide the mentors' section
}

// Send a message in the chat
function sendMessage() {
    const input = document.querySelector('#messageInput'); // Get the message input field
    const message = input.value.trim(); // Get and trim the message input

    // Check if the message is not empty
    if (message) {
        const chatMessages = document.querySelector('.chat-messages'); // Select the chat messages container
        const messageElement = document.createElement('div'); // Create a new div for the message
        messageElement.classList.add('message', 'sent'); // Add classes for styling
        messageElement.textContent = message; // Set the message text
        chatMessages.appendChild(messageElement); // Append the new message to the chat messages container
        input.value = ''; // Clear the input field

        // Auto-scroll to the bottom of the chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Initialize the platform by populating mentor cards
populateMentors();

// Event listener for signup form submission
document.querySelector('form[action="/signup"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    signup(); // Call the signup function to handle signup
});

// Event listener for login form submission
document.querySelector('form[action="/home.html"]').addEventListener('submit', login); // Call the login function to handle login