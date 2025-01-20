// Get DOM elements
const feedbackForm = document.getElementById('feedback-form');
const feedbackMessages = document.getElementById('feedback-messages');

// Feedback data (simulated with localStorage)
let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

// Function to render feedback messages
function renderFeedbackMessages() {
    feedbackMessages.innerHTML = '';
    feedbacks.forEach((feedback, index) => {
        const feedbackElement = document.createElement('div');
        feedbackElement.classList.add('message');
        feedbackElement.innerHTML = `
            <strong>${feedback.name} (Section: ${feedback.section})</strong>
            <p>${feedback.message}</p>
            <button onclick="deleteFeedback(${index})"><i class="fas fa-trash"></i></button>
        `;
        feedbackMessages.appendChild(feedbackElement);
    });
}

// Handle form submission
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value.trim();
    const section = document.getElementById('section').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && section && message) {
        feedbacks.push({ name, section, message });
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        renderFeedbackMessages();
        feedbackForm.reset(); // Clear form fields
    } else {
        alert('Please fill in all fields.');
    }
});

// Delete feedback
function deleteFeedback(index) {
    feedbacks.splice(index, 1);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    renderFeedbackMessages();
}

// Initial render
renderFeedbackMessages();
