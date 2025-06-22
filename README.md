# NullClass_Internship_Tasks

# TASK-3

# Project Title: Interactive Q&A Forum with Notification System

**Project Overview: Messaging App with Notification Feature**

This project enhances a simple **"Messaging App"** by integrating browser-based notifications. It allows users to ask questions, view and reply to conversations, and upvote questions. The key enhancement is a robust notification system that informs users when their questions are answered or upvoted, with full user control over notification preferences.

**Feature Summary: Browser Notifications**
- Real-time Alerts: Users receive pop-up notifications directly from their browser when specific events occur related to their questions.
- Answer Notifications: A notification is triggered when someone answers a question posed by the user. The message clearly states "Someone answered your question."
- Upvote Notifications: Users are also notified when their question receives an upvote, with a message like "Someone upvote your question."
- User Control on Profile Page: A dedicated setting on the "Profile" page allows users to enable or disable these browser notifications at any time.
- Permission Management: The system gracefully handles browser notification permissions, guiding the user to grant permission if needed and informing them of the current status.
  
**Technical Details**
The notification feature is implemented entirely on the frontend using the browser's native Notification API and localStorage for persistence.

**Frontend**

**HTML Structure (Messagigapp3.Html):**
  
- A "Profile" section (id="profile-section") has been added to the main content area, initially hidden. Within the profile section, a     "Notification Settings" subsection contains a label with a custom toggle switch (id="notification-toggle") for enabling/disabling notifications.
- A div with id="notification-status" is present to display the current notification permission status to the user
 (e.g., "Notifications are ON", "Permission Denied").

**CSS Styling (Messagigapp3.css):**

- Styles have been added for the new .profile-settings and .profile-section elements to integrate them seamlessly into the app's design.
- Crucially, specific CSS creates the visual appearance of the toggle switch (.switch, .slider), transforming a standard checkbox into an intuitive on/off button. Styles are defined for both checked (enabled) and unchecked (disabled) states.
      
**JavaScript Logic (Messagigapp3.js):**

**DOM Element References:** Variables are declared to reference the notification toggle, status display, and navigation buttons.
**requestNotificationPermission():**
     Checks if the Notification API is supported by the user's browser. If not, it disables the toggle and informs the user.
**If supported, it checks the current permission status (Notification.permission):**
"default": Prompts the user to requestPermission(). Based on their choice ("granted" or "denied"), it updates the UI and localStorage.
"granted": Updates the status message to "Notifications are ON."
"denied": Informs the user that notifications are off due to browser settings and disables the toggle (as the user must change this in browser settings).
**updateNotificationToggle(isChecked):** A utility function to programmatically set the checked state of the notification toggle.
**loadNotificationPreference():**
Executed on page load (DOMContentLoaded).
Retrieves the user's last saved preference ('notificationsEnabled') from localStorage.
Sets the initial state of the notificationToggle accordingly.
If notifications were previously enabled, it automatically calls requestNotificationPermission() to ensure the permission is still valid.
**showNotification(title, body):**
This is the core function for displaying notifications.
It first checks if notifications are enabled in localStorage and if the browser permission is granted.
If both conditions are met, it creates a new Notification object with the provided title, body, and an icon/badge.
An onclick handler is added to the notification to bring the browser window into focus when the notification is clicked.
**Event Triggers:**
- btn-answer.onclick: After a new reply is successfully added to a conversation, showNotification("New Answer!", ...) is called.
- btn-upvote.onclick: When an upvote button is clicked and the count is incremented, showNotification("Upvote Received!", ...) is called.
- Profile Navigation (navProfileBtn.addEventListener('click', ...)): When the "Profile" tab is clicked, requestNotificationPermission() is explicitly called to ensure the notification status is up-to-date for the user.
**Toggle Switch Event (notificationToggle.addEventListener('change', ...)):**
When the notification toggle is switched, it updates the 'notificationsEnabled' status in localStorage.
If enabling, it triggers requestNotificationPermission().
If disabling, it updates the status message to reflect that notifications are off.

**Persistence localStorage:** The user's preference for enabling/disabling notifications ('notificationsEnabled') is stored locally in the    browser's localStorage, ensuring their choice persists even if they close and reopen the browser.

**Messagigapp3.html**

    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Messaging App - Notifications Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="Messagigapp3.css" />
    </head>

    <body>
    <header>
    <h1>Messaging APP</h1>
    </header>
    <main>
    <nav class="sidebar" aria-label="Main navigation">
      <button id="nav-conversations" aria-controls="conversations-section" aria-selected="true" role="tab" class="active">
        <span class="material-icons" aria-hidden="true">chat_bubble_outline</span> Conversations
      </button>
      <button id="nav-profile" aria-controls="profile-section" aria-selected="false" role="tab">
        <span class="material-icons" aria-hidden="true">person_outline</span> Profile
      </button>
    </nav>

    <section id="conversations-section" class="content" role="tabpanel" tabindex="0" aria-label="Conversation list">
      <h2 style="margin-top:0; font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: #1e293b;">Your Questions</h2>

      <form id="add-question-form" aria-label="Add a new question form">
        <div style="flex:1 1 300px; display:flex; flex-direction: column;">
          <label for="new-question-text">Question</label>
          <input type="text" id="new-question-text" placeholder="Type your question here..." required />
        </div>
        <div style="flex:1 1 400px; display:flex; flex-direction: column;">
          <label for="new-question-desc">Description</label>
          <textarea id="new-question-desc" placeholder="Add a description or context (optional)"></textarea>
        </div>
        <button type="submit" id="add-question-btn" disabled>Add Question</button>
      </form>

      <div class="conversation-list" id="conversation-list" aria-live="polite" aria-relevant="additions">
        </div>
    </section>

    <section id="profile-section" class="content" role="tabpanel" tabindex="0" aria-label="User profile settings" hidden>
      <div class="profile-settings">
        <div class="profile-section">
          <h3>Notification Settings</h3>
          <div class="setting-item">
            <span>Browser Notifications</span>
            <label class="switch">
              <input type="checkbox" id="notification-toggle">
              <span class="slider"></span>
            </label>
          </div>
          <div id="notification-status"></div>
        </div>
      </div>
    </section>
    </main>

    <script src="Messagigapp3.js"></script>
 
    </body>
    </html>


**Messagigapp3.css**

    *, *::before, *::after 
    {
        box-sizing: border-box;
    }

    body 
    {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #ffffff;
      color: #374151;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    header 
    {
      position: sticky;
      top: 0;
      background: #e0e0e0;
      border-bottom: 1px solid #c0c0c0;
      padding: 1rem 2rem;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }

    header h1 
    {
      font-weight: 800;
      font-size: 1.75rem;
      color: #1f2937;
      text-transform: uppercase;
      font-weight: bold;
    }

    main 
    {
      flex: 1;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 0;
      gap: 32px;
      padding: 24px 16px;
      transition: grid-template-columns 0.3s ease;
    }

    @media (min-width: 768px) 
    {
      main 
      {
        grid-template-columns: 280px 1fr;
      }
    }

    nav.sidebar 
    {
      background: #f3f4f6;
      border-radius: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      padding: 24px 12px;
      display: flex;
      flex-direction: column;
    }

    nav.sidebar button 
    {
      background: none;
      border: none;
      color: #374151;
      font-size: 1rem;
      text-align: left;
      padding: 10px 16px;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      transition: background-color 0.2s ease;
    }

    nav.sidebar button:hover,
    nav.sidebar button.active 
    {
      background-color: #e0e7ff;
      color: #4338ca;
    }

    section.content 
    {
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      padding: 24px;
      display: flex;
      flex-direction: column;
      min-height: 400px;
      overflow-y: auto;
    }

    #conversations-section 
    {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    #add-question-form 
    {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: flex-end;
      background: #f9fafb;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      user-select: none;
    }

    #add-question-form label 
    {
      flex-basis: 100%;
      font-weight: 600;
      color: #374151;
      margin-bottom: 6px;
      user-select: text;
    }

    #add-question-form input[type="text"],
    #add-question-form textarea 
    {
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      font-size: 1rem;
      padding: 8px 12px;
      color: #374151;
      font-family: 'Inter', sans-serif;
      resize: vertical;
    }

    #add-question-form input[type="text"] 
    {
      flex: 1 1 300px;
    }

    #add-question-form textarea 
    {
      flex: 1 1 400px;
      min-height: 60px;
      max-height: 150px;
    }

    #add-question-form button 
    {
      background-color: #4338ca;
      color: white;
      border: none;
      border-radius: 12px;
      padding: 10px 24px;
      font-weight: 700;
      cursor: pointer;
      flex-shrink: 0;
      width: 140px;
      transition: background-color 0.3s ease;
      user-select: none;
    }

    #add-question-form button:disabled 
    {
      background-color: #a5b4fc;
      cursor: not-allowed;
    }

    #add-question-form button:hover:not(:disabled) 
    {
      background-color: #6366f1;
    }

    .conversation-list 
    {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-height: 600px;
      overflow-y: auto;
      user-select: none;
    }

    .conversation-card 
    {
      background: #f9fafb;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      display: flex;
      flex-direction: column;
      gap: 8px;
      user-select: none;
    }

    .conversation-title 
    {
      font-weight: 700;
      font-size: 1.125rem;
      color: #1e293b;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .upvote-count 
    {
        font-size: 0.9rem;
        color: #10b981;
        font-weight: 600;
        margin-left: auto;
        padding: 4px 8px;
        background-color: #d1fae5;
        border-radius: 8px;
    }

    .conversation-description 
    {
      font-size: 0.9rem;
      color: #6b7280;
    }

    .actions 
    {
      margin-top: 8px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .btn 
    {
      cursor: pointer;
      border-radius: 12px;
      border: none;
      font-weight: 600;
      padding: 0.45rem 1rem;
      font-size: 0.9rem;
      transition: background-color 0.25s ease;
      display: flex;
      align-items: center;
      gap: 6px;
      user-select: none;
    }

    .btn-answer 
    {
      background-color: #4338ca;
      color: white;
    }

    .btn-answer:hover 
    {
      background-color: #6366f1;
    }

    .btn-upvote 
    {
      background-color: #10b981;
      color: white;
    }

    .btn-upvote:hover 
    {
      background-color: #34d399;
    }

    .btn-toggle-replies 
    {
      background-color: #6b7280;
      color: white;
    }

    .btn-toggle-replies:hover 
    {
      background-color: #4b5563;
    }

    .replies-container 
    {
      margin-top: 12px;
      border-left: 3px solid #4338ca;
      padding-left: 16px;
      max-height: 200px;
      overflow-y: auto;
      border-radius: 0 10px 10px 0;
      background: #eef2ff;
      display: none; 
    }

    .replies-container.show 
    {
        display: block;
    }

    .reply 
    {
      padding: 8px 12px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.07);
      margin-bottom: 10px;
      font-size: 0.9rem;
      color: #334155;
      line-height: 1.3;
      word-break: break-word;
    }

    .reply:last-child 
    {
        margin-bottom: 0;
    }

    .reply-timestamp 
    {
      font-size: 0.75rem;
      color: #94a3b8;
      text-align: right;
      margin-top: 2px;
      user-select: none;
    }

    .reply-input-container 
    {
      margin-top: 12px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .reply-input-container textarea 
    {
      resize: vertical;
      flex: 1 1 auto;
      min-height: 48px;
      max-height: 100px;
      padding: 10px 12px;
      font-size: 0.95rem;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      font-family: 'Inter', sans-serif;
      color: #374151;
      transition: border-color 0.2s ease;
    }

    .reply-input-container textarea:focus 
    {
      outline: none;
      border-color: #4338ca;
      box-shadow: 0 0 4px rgba(67, 56, 202, 0.5);
    }

    .reply-input-container button 
    {
      flex: 0 0 auto;
      background-color: #4338ca;
      color: white;
      border: none;
      border-radius: 12px;
      padding: 10px 20px;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      user-select: none;
    }

    .reply-input-container button:disabled 
    {
      background-color: #a5b4fc;
      cursor: not-allowed;
    }

    .reply-input-container button:hover:not(:disabled) 
    {
      background-color: #6366f1;
    }

    .profile-settings 
    {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .profile-section 
    {
      border-radius: 16px;
      background: #f9fafb;
      padding: 24px 32px;
      box-shadow: 0 1px 5px rgba(0,0,0,0.06);
      user-select: none;
    }

    .profile-section h3 
    {
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 20px;
      color: #1f2937;
      border-bottom: 2px solid #4338ca;
      padding-bottom: 4px;
      max-width: max-content;
    }

    .setting-item 
    {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
      font-size: 1rem;
      color: #374151;
    }

    .setting-item:last-child 
    {
      border-bottom: none;
    }

    .switch 
    {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 28px;
    }

    .switch input 
    {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }

    .slider 
    {
      position: absolute;
      cursor: pointer;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: #d1d5db;
      border-radius: 34px;
      transition: background-color 0.3s ease;
    }

    .slider::before 
    {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    input:checked + .slider 
    {
      background-color: #4338ca;
    }
    input:checked + .slider::before 
    {
      transform: translateX(22px);
    }

    #notification-status 
    {
      font-size: 0.875rem;
      color: #6b7280;
      margin-top: 8px;
      text-align: center;
      min-height: 1.25rem;
      user-select: none;
    }

**Messagigapp3.js**

    let conversations = 
    [
      {
        id: 1,
        question: "How to implement real-time messaging?",
        description: "Looking for best practices to build a scalable chat app.",
        replies: 
        [
          { text: "You could use WebSockets for real-time communication.", timestamp: "06/14/2025 10:05 AM" },
          { text: "Consider a service like Firebase for easy integration.", timestamp: "06/14/2025 10:15 AM" }
        ],
        upvotes: 5
      },
      {
        id: 2,
        question: "What is the best way to secure user data?",
        description: "Security measures and encryption tips are needed.",
        replies: 
        [
          { text: "Always use HTTPS and encrypt sensitive data at rest and in transit.", timestamp: "06/14/2025 10:20 AM" }
        ],
        upvotes: 3
      },
      {
        id: 3,
        question: "How can I add emoji reactions?",
        description: "I want to add emoji support to messages, any libraries?",
        replies: [],
        upvotes: 0
      }
    ];

    const conversationListEl = document.getElementById('conversation-list');
    const addQuestionForm = document.getElementById('add-question-form');
    const newQuestionTextInput = document.getElementById('new-question-text');
    const newQuestionDescInput = document.getElementById('new-question-desc');
    const addQuestionBtn = document.getElementById('add-question-btn');

    const navConversationsBtn = document.getElementById('nav-conversations');
    const navProfileBtn = document.getElementById('nav-profile');
    const conversationsSection = document.getElementById('conversations-section');
    const profileSection = document.getElementById('profile-section');

    const notificationToggle = document.getElementById('notification-toggle');
    const notificationStatusEl = document.getElementById('notification-status');

    function requestNotificationPermission() 
    {
        if (!("Notification" in window)) 
        {
            console.log("This browser does not support desktop notification.");
            notificationStatusEl.textContent = "Your browser does not support notifications.";
            notificationToggle.disabled = true; 
            return;
        }

        if (Notification.permission === "default") 
        {
            Notification.requestPermission().then(permission => 
            {
                if (permission === "granted") 
                {
                    console.log("Notification permission granted.");
                    notificationStatusEl.textContent = "Notifications are ON.";
                    updateNotificationToggle(true);
                } 
                else 
                {
                    console.log("Notification permission denied.");
                    notificationStatusEl.textContent = "Notifications are OFF (permission denied).";
                    updateNotificationToggle(false);
                }
            });
        } 
        else if (Notification.permission === "granted") 
        {
            notificationStatusEl.textContent = "Notifications are ON.";
        } 
        else 
        { 
            notificationStatusEl.textContent = "Notifications are OFF (permission denied by browser settings).";
            updateNotificationToggle(false);
            notificationToggle.disabled = true;
        }
    }

    function updateNotificationToggle(isChecked) 
    {
        if (notificationToggle) 
        {
            notificationToggle.checked = isChecked;
        }
    }

    function loadNotificationPreference() 
    {
        const isEnabled = localStorage.getItem('notificationsEnabled') === 'true';
        notificationToggle.checked = isEnabled;
        if (isEnabled) 
        {
            requestNotificationPermission();
        } 
        else 
        {
             notificationStatusEl.textContent = "Notifications are OFF.";
        }
    }

    function showNotification(title, body) 
    {
        const areNotificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
        if (areNotificationsEnabled && Notification.permission === "granted") 
        {
            const notification = new Notification(title, 
            {
                body: body,
                icon: 'https://cdn-icons-png.flaticon.com/512/685/685317.png',
                badge: 'https://cdn-icons-png.flaticon.com/512/685/685317.png'
            });

            notification.onclick = () => 
            {
                window.focus();
            };
        }
    }

    function renderConversations() 
    {
      conversationListEl.innerHTML = ''; 
      conversations.forEach(conv => 
      {
        const conversationCard = document.createElement('div');
        conversationCard.className = 'conversation-card';
        conversationCard.dataset.id = conv.id;

        const repliesHtml = conv.replies.length > 0
          ? conv.replies.map(reply => `
            <div class="reply">
              ${reply.text}
              <div class="reply-timestamp">${reply.timestamp}</div>
            </div>
          `).join('')
          : '<p style="font-size:0.9rem; color:#6b7280; text-align: center; margin-top: 10px;">No replies yet. Be the first to answer!</p>';

        conversationCard.innerHTML = `
          <div class="conversation-title">
            ${conv.question}
            <span class="upvote-count" data-upvotes="${conv.upvotes}">${conv.upvotes} Upvotes</span>
          </div>

          <div class="conversation-description">${conv.description || 'No description provided.'}</div>

          <div class="actions">
            <button class="btn btn-answer" data-id="${conv.id}">
              <span class="material-icons">reply</span> Answer
            </button>
            <button class="btn btn-upvote" data-id="${conv.id}">
              <span class="material-icons">thumb_up</span> Upvote
            </button>
            ${conv.replies.length > 0 ? `<button class="btn btn-toggle-replies" data-id="${conv.id}">
              <span class="material-icons">comment</span> ${conv.replies.length} Replies
            </button>` : ''}
          </div>

          <div class="replies-container" data-id="${conv.id}">
            ${repliesHtml}
          </div>
        `;
        conversationListEl.appendChild(conversationCard);
      });

      addEventListenersToConversationCards();
    }

    function addEventListenersToConversationCards() 
    {
      document.querySelectorAll('.btn-answer').forEach(button => 
      {
        button.onclick = (e) => 
        {
          const convId = parseInt(e.currentTarget.dataset.id);
          const conversationCard = e.currentTarget.closest('.conversation-card');
          let replyInputContainer = conversationCard.querySelector('.reply-input-container');

          if (replyInputContainer) 
          {
            replyInputContainer.remove();
            return;
          }

          replyInputContainer = document.createElement('div');
          replyInputContainer.className = 'reply-input-container';
          replyInputContainer.innerHTML = `
            <textarea placeholder="Type your reply here..." data-id="${convId}"></textarea>
            <button class="btn-send-reply" data-id="${convId}" disabled>Send</button>
          `;
          conversationCard.appendChild(replyInputContainer);

          const replyTextArea = replyInputContainer.querySelector('textarea');
          const sendReplyButton = replyInputContainer.querySelector('.btn-send-reply');

          replyTextArea.addEventListener('input', () => 
          {
            sendReplyButton.disabled = replyTextArea.value.trim().length === 0;
          });

          sendReplyButton.onclick = () => 
          {
            const replyText = replyTextArea.value.trim();
            if (replyText) 
            {
              const conversation = conversations.find(c => c.id === convId);
              if (conversation) 
              {
                const now = new Date();
                const timestamp = now.toLocaleString('en-US', 
                {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                }).replace(',', ''); 
                conversation.replies.push({ text: replyText, timestamp: timestamp });
                renderConversations();

                showNotification("New Answer!", `Someone answered your question: "${conversation.question}"`);

                replyInputContainer.remove(); 
              }
            }
          };

          const repliesContainer = conversationCard.querySelector('.replies-container');
          if (repliesContainer) 
          {
            repliesContainer.classList.add('show');
          }
          replyTextArea.focus(); 
        };
      });

      document.querySelectorAll('.btn-upvote').forEach(button => 
      {
        button.onclick = (e) => 
        {
          const convId = parseInt(e.currentTarget.dataset.id);
          const conversation = conversations.find(c => c.id === convId);
          if (conversation) 
          {
            conversation.upvotes = (conversation.upvotes || 0) + 1; 
            const upvoteCountSpan = e.currentTarget.closest('.conversation-card').querySelector('.upvote-count');
            if (upvoteCountSpan) 
            {
                upvoteCountSpan.textContent = `${conversation.upvotes} Upvotes`;
                upvoteCountSpan.dataset.upvotes = conversation.upvotes;

                showNotification("Upvote Received!", `Your question "${conversation.question}" just received an upvote!`);
            }
          }
        };
      });

      document.querySelectorAll('.btn-toggle-replies').forEach(button => 
      {
        button.onclick = (e) => 
        {
          const convId = parseInt(e.currentTarget.dataset.id);
          const conversationCard = e.currentTarget.closest('.conversation-card');
          const repliesContainer = conversationCard.querySelector(`.replies-container[data-id="${convId}"]`);
          if (repliesContainer) 
          {
            repliesContainer.classList.toggle('show'); 
          }
        };
      });
    }

    function validateAddQuestionForm() 
    {
      addQuestionBtn.disabled = newQuestionTextInput.value.trim().length === 0;
    }

    newQuestionTextInput.addEventListener('input', validateAddQuestionForm);

    addQuestionForm.addEventListener('submit', (e) => 
    {
      e.preventDefault(); 
      const newQuestion = 
      {
        id: conversations.length > 0 ? Math.max(...conversations.map(c => c.id)) + 1 : 1, 
        question: newQuestionTextInput.value.trim(),
        description: newQuestionDescInput.value.trim(),
        replies: [],
        upvotes: 0
      };

      if (newQuestion.question) 
      {
        conversations.unshift(newQuestion); 
        renderConversations(); 
        newQuestionTextInput.value = ''; 
        newQuestionDescInput.value = '';
        validateAddQuestionForm(); 
      }
    });

    navConversationsBtn.addEventListener('click', () => 
    {
      navConversationsBtn.classList.add('active');
      navProfileBtn.classList.remove('active');
      conversationsSection.hidden = false;
      profileSection.hidden = true;
    });

    navProfileBtn.addEventListener('click', () => 
    {
      navProfileBtn.classList.add('active');
      navConversationsBtn.classList.remove('active');
      profileSection.hidden = false;
      conversationsSection.hidden = true;
      requestNotificationPermission();
    });

    notificationToggle.addEventListener('change', (event) => 
    {
        const isChecked = event.target.checked;
        localStorage.setItem('notificationsEnabled', isChecked);

        if (isChecked) 
        {
            requestNotificationPermission();
        } 
        else 
        {
            notificationStatusEl.textContent = "Notifications are OFF. You can re-enable them anytime.";
            console.log("Notifications disabled by user preference.");
        }
    });

    document.addEventListener('DOMContentLoaded', () => 
    {
      renderConversations(); 
      validateAddQuestionForm(); 
      loadNotificationPreference(); 

      conversationsSection.hidden = false;
      profileSection.hidden = true;
      navConversationsBtn.classList.add('active');
      navProfileBtn.classList.remove('active');
    });
  
