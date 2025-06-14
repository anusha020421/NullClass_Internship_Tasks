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
  