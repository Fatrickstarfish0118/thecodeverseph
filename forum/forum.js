// Sample data structure to store threads
let threads = [];

// Function to display threads on the page
function displayThreads() {
  const threadsContainer = document.getElementById('threadsContainer');
  threadsContainer.innerHTML = '';

  threads.forEach((thread, index) => {
    let threadDiv = document.createElement('div');
    threadDiv.classList.add('thread');
    
    // Display the thread title and content
    threadDiv.innerHTML = `
      <h3>${thread.title}</h3>
      <p>${thread.content}</p>
      <button onclick="toggleReplyForm(${index})">Reply</button>
      
      <!-- Container for replies -->
      <div class="replies-container" id="replies-${index}">
        <!-- Replies will be injected here -->
      </div>

      <!-- Form to post a reply -->
      <form id="replyForm-${index}" class="reply-form" style="display: none;">
        <textarea id="replyContent-${index}" placeholder="Your reply"></textarea>
        <button type="button" onclick="postReply(${index})">Post Reply</button>
      </form>
    `;

    // Append the thread to the container
    threadsContainer.appendChild(threadDiv);
    displayReplies(index);
  });
}

// Function to post a new thread
document.getElementById('threadForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  threads.push({ title, content, replies: [] });

  // Clear the input fields
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

  displayThreads();
});

// Function to display replies for a specific thread
function displayReplies(threadIndex) {
  const repliesContainer = document.getElementById(`replies-${threadIndex}`);
  repliesContainer.innerHTML = ''; // Clear any previous replies

  // Loop through the replies array and append each reply
  threads[threadIndex].replies.forEach(reply => {
    const replyDiv = document.createElement('div');
    replyDiv.classList.add('reply');
    replyDiv.innerHTML = `<p>${reply}</p>`;
    repliesContainer.appendChild(replyDiv);
  });
}

// Function to toggle the reply form visibility
function toggleReplyForm(index) {
  const replyForm = document.getElementById(`replyForm-${index}`);
  replyForm.style.display = replyForm.style.display === 'none' ? 'block' : 'none';
}

// Function to post a reply to a specific thread
function postReply(index) {
  const replyContent = document.getElementById(`replyContent-${index}`).value;
  if (replyContent.trim() !== '') {
    threads[index].replies.push(replyContent); // Add reply to the thread's replies array
    document.getElementById(`replyContent-${index}`).value = ''; // Clear the reply input
    displayReplies(index); // Update the replies display
  }
}
