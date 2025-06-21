const users = 
[
            { id: 1, name: "Akash", initials: "AK", points: 320 },
            { id: 2, name: "Vijaya", initials: "VI", points: 180 },
            { id: 3, name: "Sravani", initials: "SR", points: 450 },
            { id: 4, name: "Sathwica", initials: "SA", points: 275 },
            { id: 5, name: "Veera", initials: "VR", points: 90 }
];
        
let currentUser = 
{
    id: 0,
    name: "Gayam Anusha",
    initials: "GA",
    points: 125
};

const transactions = 
[
            { date: "Today, 10:30 AM", type: "Credit", description: "Answered question", amount: "+5", balance: 125 },
            { date: "Yesterday, 3:45 PM", type: "Credit", description: "Answer upvoted (5 votes)", amount: "+5", balance: 120 },
            { date: "3 days ago", type: "Debit", description: "Answer removed", amount: "-5", balance: 115 },
            { date: "1 week ago", type: "Credit", description: "Answered question", amount: "+5", balance: 120 }
];

const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');
const profileLink = document.getElementById('profileLink');
const settingsLink = document.getElementById('settingsLink');
const userPointsElement = document.getElementById('userPoints');
        
const activityTab = document.getElementById('activityTab');
const leaderboardTab = document.getElementById('leaderboardTab');
const transactionsTab = document.getElementById('transactionsTab');
const activityContent = document.getElementById('activityContent');
const leaderboardContent = document.getElementById('leaderboardContent');
const transactionsContent = document.getElementById('transactionsContent');
        
const transferBtn = document.getElementById('transferBtn');
const transferModal = document.getElementById('transferModal');
const closeTransferModal = document.getElementById('closeTransferModal');
const cancelTransfer = document.getElementById('cancelTransfer');
const userSearch = document.getElementById('userSearch');
const searchResults = document.getElementById('searchResults');
const transferAmount = document.getElementById('transferAmount');
const transferError = document.getElementById('transferError');
const confirmTransfer = document.getElementById('confirmTransfer');
        
const settingsModal = document.getElementById('settingsModal');
const closeSettingsModal = document.getElementById('closeSettingsModal');
const cancelSettings = document.getElementById('cancelSettings');
const saveSettings = document.getElementById('saveSettings');
        
const successToast = document.getElementById('successToast');
const toastMessage = document.getElementById('toastMessage');

profileBtn.addEventListener('click', toggleProfileDropdown);
profileLink.addEventListener('click', (e) => 
{
    e.preventDefault();
    showTab('activity');
    toggleProfileDropdown();
});

settingsLink.addEventListener('click', (e) => 
{
    e.preventDefault();
    openSettingsModal();
    toggleProfileDropdown();
});
        
activityTab.addEventListener('click', () => showTab('activity'));
leaderboardTab.addEventListener('click', () => showTab('leaderboard'));
transactionsTab.addEventListener('click', () => showTab('transactions'));
        
transferBtn.addEventListener('click', openTransferModal);
closeTransferModal.addEventListener('click', closeModal);
cancelTransfer.addEventListener('click', closeModal);
userSearch.addEventListener('input', handleUserSearch);
transferAmount.addEventListener('input', validateTransfer);
confirmTransfer.addEventListener('click', processTransfer);
        
closeSettingsModal.addEventListener('click', closeSettings);
cancelSettings.addEventListener('click', closeSettings);
saveSettings.addEventListener('click', saveSettingsChanges);

function toggleProfileDropdown() 
{
    profileDropdown.classList.toggle('hidden');
}

function showTab(tabName) 
{
    activityContent.classList.add('hidden');
    leaderboardContent.classList.add('hidden');
    transactionsContent.classList.add('hidden');
            
    activityTab.classList.remove('tab-active');
    leaderboardTab.classList.remove('tab-active');
    transactionsTab.classList.remove('tab-active');
            
    switch(tabName) 
    {
        case 'activity':
            activityContent.classList.remove('hidden');
            activityTab.classList.add('tab-active');
            break;
        case 'leaderboard':
            leaderboardContent.classList.remove('hidden');
            leaderboardTab.classList.add('tab-active');
            break;
        case 'transactions':
            transactionsContent.classList.remove('hidden');
            transactionsTab.classList.add('tab-active');
            break;
    }
}

function openTransferModal() 
{
    if (currentUser.points < 10) 
    {
        transferError.classList.remove('hidden');
        transferError.textContent = "You must have at least 10 points to transfer.";
        confirmTransfer.disabled = true;
    } 
    else 
    {
        transferError.classList.add('hidden');
    }
    transferModal.classList.remove('hidden');
}

function closeModal() 
{
    transferModal.classList.add('hidden');
    userSearch.value = "";
    transferAmount.value = "";
    searchResults.classList.add('hidden');
    searchResults.innerHTML = "";
    confirmTransfer.disabled = true;
}

function openSettingsModal() 
{
    settingsModal.classList.remove('hidden');
}

function closeSettings() 
{
    settingsModal.classList.add('hidden');
}

function saveSettingsChanges() 
{
    showToast("Settings saved successfully");
    settingsModal.classList.add('hidden');
}

function handleUserSearch() 
{
    const query = userSearch.value.toLowerCase();
            
    if (query.length < 1) 
    {
        searchResults.classList.add('hidden');
        return;
    }
            
    const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(query) && user.id !== currentUser.id
    );
            
    if (filteredUsers.length === 0) 
    {
        searchResults.innerHTML = '<div class="p-3 text-gray-500">No users found</div>';
        searchResults.classList.remove('hidden');
        return;
    }
            
    searchResults.innerHTML = filteredUsers.map(user => `
        <div class="p-3 hover:bg-indigo-50 cursor-pointer flex items-center justify-between" data-user-id="${user.id}">
            <div class="flex items-center">
                <div class="avatar mr-3">${user.initials}</div>
                    <span>${user.name}</span>
            </div>
                <span class="text-sm text-gray-500">${user.points} pts</span>
        </div>
    `).join('');
            
    searchResults.classList.remove('hidden');      
    document.querySelectorAll('#searchResults div[data-user-id]').forEach(item => 
    {
        item.addEventListener('click', () => 
        {
            const userId = parseInt(item.getAttribute('data-user-id'));
            const selectedUser = users.find(u => u.id === userId);
            userSearch.value = selectedUser.name;
            searchResults.classList.add('hidden');
            validateTransfer();
        });
    });
}

function validateTransfer() 
{
    const amount = parseInt(transferAmount.value);
    const hasRecipient = userSearch.value.trim().length > 0;
            
    if (currentUser.points < 10) 
    {
        transferError.classList.remove('hidden');
        transferError.textContent = "You must have at least 10 points to transfer.";
        confirmTransfer.disabled = true;
        return;
    }
            
    if (!amount || amount <= 0) 
    {
        transferError.classList.remove('hidden');
        transferError.textContent = "Please enter a valid amount.";
        confirmTransfer.disabled = true;
        return;
    }
            
    if (amount > currentUser.points) 
    {
        transferError.classList.remove('hidden');
        transferError.textContent = "You don't have enough points.";
        confirmTransfer.disabled = true;
        return;
    }
            
    if (!hasRecipient) 
    {
        transferError.classList.remove('hidden');
        transferError.textContent = "Please select a recipient.";
        confirmTransfer.disabled = true;
        return;
    }       
    transferError.classList.add('hidden');
    confirmTransfer.disabled = false;
}

function processTransfer() 
{
    const amount = parseInt(transferAmount.value);
    const recipientName = userSearch.value.trim();
    const recipient = users.find(u => u.name === recipientName);
            
    if (!recipient) 
    {
        transferError.classList.remove('hidden');
        transferError.textContent = "Recipient not found.";
        return;
    }
            
    currentUser.points -= amount;
    recipient.points += amount;       
    transactions.unshift(
    {
        date: "Just now",
        type: "Debit",
        description: `Transfer to ${recipientName}`,
        amount: `-${amount}`,
        balance: currentUser.points
    });        
    userPointsElement.textContent = currentUser.points;
            
        showToast(`${amount} points transferred to ${recipientName}`);
        closeModal();
}

function showToast(message) 
{     
    toastMessage.textContent = message;
    successToast.classList.remove('hidden');
            
    setTimeout(() => 
    {
        successToast.classList.add('hidden');
    }, 3000);
}
 
document.addEventListener('click', (e) => 
{
    if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) 
    {
        profileDropdown.classList.add('hidden');
    }
});
showTab('activity');
