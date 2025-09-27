// Dummy data for posts
let posts = [{
    id: '1',
    userId: 'user-001',
    userName: "Mohan",
    content: "Just enjoying a beautiful day in Mumbai! The monsoon rains have made everything so green. Can't wait for a cup of hot chai.",
    likes: 12,
    likedBy: ['user-001', 'user-002', 'user-003'],
    commentCount: 5,
    shareCount: 2,
    image: 'https://placehold.co/600x400/5c6ac4/white?text=Mumbai+Rains',
    timestamp: new Date('2023-10-27T10:00:00')
}, {
    id: '2',
    userId: 'user-002',
    userName: "Priya",
    content: "So excited for the upcoming Diwali festival! The decorations are already up everywhere. What's your favorite part of the festival?",
    likes: 5,
    likedBy: ['user-001', 'user-004'],
    commentCount: 1,
    shareCount: 0,
    image: 'https://placehold.co/600x400/4CAF50/white?text=Diwali+Festival',
    timestamp: new Date('2023-10-27T09:30:00')
}, {
    id: '3',
    userId: 'user-003',
    userName: "Ravi",
    content: "Just finished watching the India-Pakistan cricket match. What a thrilling finish! Any cricket fans here?",
    likes: 20,
    likedBy: ['user-001', 'user-002', 'user-003', 'user-005', 'user-006'],
    commentCount: 10,
    shareCount: 4,
    image: 'https://placehold.co/600x400/E91E63/white?text=Cricket+Match',
    timestamp: new Date('2023-10-26T18:45:00')
}, {
    id: '4',
    userId: 'user-004',
    userName: "Aisha",
    content: "Cooking some delicious Biryani today! The aroma is filling the entire house. Nothing beats a good home-cooked meal.",
    likes: 8,
    likedBy: ['user-001', 'user-002', 'user-004'],
    commentCount: 3,
    shareCount: 1,
    image: 'https://placehold.co/600x400/FF5722/white?text=Biryani',
    timestamp: new Date('2023-10-28T12:00:00')
}];

// Dummy data for different pages
let pages = [{
    id: 'anime',
    name: 'Anime Fans',
    posts: [{
        id: 'anime-1',
        userId: 'anime-user-1',
        userName: "Anime Fanatic",
        content: "Just re-watched Attack on Titan and I'm still blown away. What's your favorite arc?",
        likes: 56,
        likedBy: [],
        commentCount: 22,
        shareCount: 8,
        image: 'https://placehold.co/600x400/007ACC/white?text=Attack+on+Titan',
        timestamp: new Date('2023-11-01T15:00:00')
    }, {
        id: 'anime-2',
        userId: 'anime-user-2',
        userName: "Weeblord",
        content: "Demon Slayer movie was incredible! The animation quality is on another level.",
        likes: 42,
        likedBy: [],
        commentCount: 15,
        shareCount: 5,
        image: 'https://placehold.co/600x400/FF5722/white?text=Demon+Slayer',
        timestamp: new Date('2023-11-01T12:30:00')
    }]
}, {
    id: 'movies',
    name: 'Movie Buffs',
    posts: [{
        id: 'movie-1',
        userId: 'movie-user-1',
        userName: "Film Critic",
        content: "Oppenheimer was a masterpiece. The cinematography and acting were perfect.",
        likes: 88,
        likedBy: [],
        commentCount: 34,
        shareCount: 12,
        image: 'https://placehold.co/600x400/1E88E5/white?text=Oppenheimer',
        timestamp: new Date('2023-11-02T10:00:00')
    }, {
        id: 'movie-2',
        userId: 'movie-user-2',
        userName: "Cinephile",
        content: "Excited for the new Dune movie! The visuals from the first one were just insane.",
        likes: 71,
        likedBy: [],
        commentCount: 28,
        shareCount: 9,
        image: 'https://placehold.co/600x400/7CB342/white?text=Dune',
        timestamp: new Date('2023-11-02T09:15:00')
    }]
}, {
    id: 'webseries',
    name: 'Web Series Watchers',
    posts: [{
        id: 'webseries-1',
        userId: 'webseries-user-1',
        userName: "Binge Watcher",
        content: "Money Heist is the best series I've watched in years. The plot twists kept me on the edge of my seat!",
        likes: 65,
        likedBy: [],
        commentCount: 19,
        shareCount: 7,
        image: 'https://placehold.co/600x400/F44336/white?text=Money+Heist',
        timestamp: new Date('2023-11-03T11:30:00')
    }, {
        id: 'webseries-2',
        userId: 'webseries-user-2',
        userName: "Episode Enthusiast",
        content: "Just finished watching Squid Game. That ending was unexpected!",
        likes: 95,
        likedBy: [],
        commentCount: 45,
        shareCount: 20,
        image: 'https://placehold.co/600x400/9C27B0/white?text=Squid+Game',
        timestamp: new Date('2023-11-03T10:45:00')
    }]
}, {
    id: 'tech',
    name: 'Tech Enthusiasts',
    posts: [{
        id: 'tech-1',
        userId: 'tech-user-1',
        userName: "Code Guru",
        content: "Just finished building a new app with Gemini! The new API is a game-changer.",
        likes: 120,
        likedBy: [],
        commentCount: 50,
        shareCount: 25,
        image: 'https://placehold.co/600x400/00796B/white?text=AI+Dev',
        timestamp: new Date('2023-11-04T14:00:00')
    }]
}, {
    id: 'food',
    name: 'Foodies',
    posts: [{
        id: 'food-1',
        userId: 'food-user-1',
        userName: "Gourmet Guy",
        content: "Just made the perfect butter chicken. The secret is to let the chicken marinate overnight!",
        likes: 90,
        likedBy: [],
        commentCount: 30,
        shareCount: 10,
        image: 'https://placehold.co/600x400/FBC02D/white?text=Butter+Chicken',
        timestamp: new Date('2023-11-04T12:00:00')
    }]
}];

// Dummy data for chat users
let chatUsers = [
    { id: 'chat-user-1', name: 'Neha', lastMessage: 'Hey, how are you?', timestamp: new Date('2023-10-27T11:00:00') },
    { id: 'chat-user-2', name: 'Arjun', lastMessage: 'Got it, thanks!', timestamp: new Date('2023-10-27T10:55:00') },
    { id: 'chat-user-3', name: 'Kavya', lastMessage: 'I am on my way.', timestamp: new Date('2023-10-27T10:50:00') },
    { id: 'chat-user-4', name: 'Rohit', lastMessage: 'See you later!', timestamp: new Date('2023-10-27T10:45:00') },
    { id: 'chat-user-5', name: 'Anjali', lastMessage: 'Let\'s catch up soon.', timestamp: new Date('2023-10-27T10:40:00') }
];

// Dummy data for user profiles
const dummyUsers = [
    { id: 'user-1', name: 'John Doe', bio: 'Web developer and cat lover.', avatar: 'https://placehold.co/50x50/3498db/white?text=JD' },
    { id: 'user-2', name: 'Jane Smith', bio: 'Graphic designer and foodie.', avatar: 'https://placehold.co/50x50/e74c3c/white?text=JS' },
    { id: 'user-3', name: 'Peter Jones', bio: 'Student and aspiring writer.', avatar: 'https://placehold.co/50x50/2ecc71/white?text=PJ' },
    { id: 'user-4', name: 'Sarah Miller', bio: 'Digital marketer and travel enthusiast.', avatar: 'https://placehold.co/50x50/f39c12/white?text=SM' },
    { id: 'user-5', name: 'Friends Forever', bio: 'Group for close friends.', avatar: 'https://placehold.co/50x50/8e44ad/white?text=FF' },
    { id: 'user-6', name: 'Ravi Verma', bio: 'AI enthusiast and tech blogger.', avatar: 'https://placehold.co/50x50/34495e/white?text=RV' },
    { id: 'user-7', name: 'Priya Sharma', bio: 'Artist and creative soul.', avatar: 'https://placehold.co/50x50/9b59b6/white?text=PS' }
];

let currentUserId = 'user-' + Math.random().toString(36).substring(2, 8);
console.log("Current User ID:", currentUserId);

const homeBtn = document.getElementById('home-btn');
const createPostBtn = document.getElementById('create-post-btn');
const exploreBtn = document.getElementById('explore-btn');
const settingsBtn = document.getElementById('settings-btn');
const messageBtn = document.getElementById('message-btn');
const createPostModal = document.getElementById('create-post-modal');
const exploreModal = document.getElementById('explore-modal');
const createPageModal = document.getElementById('create-page-modal');
const settingsModal = document.getElementById('settings-modal');
const chatModal = document.getElementById('chat-modal');
const searchResultsModal = document.getElementById('search-results-modal');

const closePostModalBtn = document.getElementById('close-post-modal');
const closeExploreModalBtn = document.getElementById('close-explore-modal');
const closeCreatePageModalBtn = document.getElementById('close-create-page-modal');
const closeSettingsModalBtn = document.getElementById('close-settings-modal');
const closeChatModalBtn = document.getElementById('close-chat-modal');
const closeSearchResultsModalBtn = document.getElementById('close-search-results-modal');

const submitPostBtn = document.getElementById('submit-post-btn');
const createPageBtn = document.getElementById('create-page-btn');
const submitCreatePageBtn = document.getElementById('submit-create-page-btn');

const mainSearchInput = document.getElementById('main-search-input');
const pageSearchInput = document.getElementById('page-search-input');
const newPageNameInput = document.getElementById('new-page-name-input');
const newPageDescriptionInput = document.getElementById('new-page-description-input');
const postContentInput = document.getElementById('post-content-input');
const imageUrlInput = document.getElementById('image-url-input');
const postsContainer = document.getElementById('posts-container');
const pagesList = document.getElementById('pages-list');
const searchResultsList = document.getElementById('search-results-list');

const customAlertModal = document.getElementById('custom-alert-modal');
const alertMessageEl = document.getElementById('alert-message');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleCircle = darkModeToggle.querySelector('div');

// New settings buttons
const accountDetailsBtn = document.getElementById('account-details-btn');
const recentActivityBtn = document.getElementById('recent-activity-btn');
const privacyBtn = document.getElementById('privacy-btn');
const savedBtn = document.getElementById('saved-btn');
const blockedBtn = document.getElementById('blocked-btn');
const closeFriendsBtn = document.getElementById('close-friends-btn');
const logoutBtn = document.getElementById('logout-btn');

// New chat elements
const chatSearchInput = document.getElementById('chat-search-input');
const chatListContainer = document.getElementById('chat-list');

// Function to show a custom message modal
function showCustomMessage(message) {
    alertMessageEl.textContent = message;
    customAlertModal.classList.remove('hidden');
    setTimeout(() => {
        customAlertModal.classList.add('hidden');
    }, 3000);
}

// Dark mode logic
function enableDarkMode() {
    document.body.classList.add('dark');
    darkModeToggle.classList.replace('bg-gray-200', 'bg-blue-600');
    darkModeToggleCircle.classList.add('translate-x-full');
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.body.classList.remove('dark');
    darkModeToggle.classList.replace('bg-blue-600', 'bg-gray-200');
    darkModeToggleCircle.classList.remove('translate-x-full');
    localStorage.setItem('theme', 'light');
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Check for saved dark mode preference on page load
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
}

// Render all posts for a given list of posts
function renderPosts(postList) {
    postsContainer.innerHTML = ''; // Clear existing posts
    postList.sort((a, b) => b.timestamp - a.timestamp); // Sort by newest first
    postList.forEach(post => {
        renderPost(post);
    });
}

// Render a single post
function renderPost(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card bg-white rounded-lg shadow-md overflow-hidden';
    const likesCount = post.likes;
    const userIsLiked = post.likedBy.includes(currentUserId);
    const timestamp = post.timestamp.toLocaleString();

    let imageHtml = '';
    if (post.image) {
        imageHtml = `<img src="${post.image}" alt="Post image" class="w-full object-cover">`;
    }

    postCard.innerHTML = `
        <div class="flex items-center p-4">
            <i class="fas fa-user-circle text-3xl text-gray-400 mr-3"></i>
            <div>
                <span class="font-semibold text-gray-800 transition-colors duration-200">${post.userName}</span>
                <span class="text-xs text-gray-400 block transition-colors duration-200">${timestamp}</span>
            </div>
        </div>
        ${imageHtml}
        <div class="p-4">
            <p class="text-gray-700 mb-4 transition-colors duration-200">${post.content}</p>
            <div class="flex items-center space-x-4 pt-2">
                <!-- Like Button with Count -->
                <div class="flex items-center space-x-2">
                    <button class="flex items-center text-gray-500 transition-colors duration-200 like-btn" data-id="${post.id}">
                        <i class="fas fa-heart text-2xl ${userIsLiked ? 'text-red-500' : 'text-gray-400'}"></i>
                    </button>
                    <span class="text-gray-700 font-semibold text-lg transition-colors duration-200">${likesCount}</span>
                </div>
                <!-- Comment Button with Count -->
                <div class="flex items-center space-x-2">
                    <button class="flex items-center text-gray-500 transition-colors duration-200 comment-btn" data-id="${post.id}">
                        <i class="fas fa-comment-alt text-2xl text-gray-400"></i>
                    </button>
                    <span class="text-gray-700 font-semibold text-lg transition-colors duration-200">${post.commentCount}</span>
                </div>
                <!-- Share Button with Count -->
                <div class="flex items-center space-x-2">
                    <button class="flex items-center text-gray-500 transition-colors duration-200 share-btn" data-id="${post.id}">
                        <i class="fas fa-share-alt text-2xl text-gray-400"></i>
                    </button>
                    <span class="text-gray-700 font-semibold text-lg transition-colors duration-200">${post.shareCount}</span>
                </div>
            </div>
        </div>
    `;

    postsContainer.appendChild(postCard);

    // Add event listeners for the new buttons
    postCard.querySelector('.like-btn').addEventListener('click', handleLikePost);
    postCard.querySelector('.comment-btn').addEventListener('click', () => {
        showCustomMessage("Comments feature not yet implemented.");
    });
    postCard.querySelector('.share-btn').addEventListener('click', () => {
        showCustomMessage("Share feature not yet implemented.");
    });
}

// Handle the "Like" button click
function handleLikePost(event) {
    const postId = event.currentTarget.dataset.id;
    const allPosts = [...posts, ...pages.flatMap(p => p.posts)];
    const post = allPosts.find(p => p.id === postId);

    if (post) {
        if (post.likedBy.includes(currentUserId)) {
            post.likes--;
            post.likedBy = post.likedBy.filter(id => id !== currentUserId);
        } else {
            post.likes++;
            post.likedBy.push(currentUserId);
        }

        // Re-render the correct page
        if (postsContainer.dataset.pageId) {
            const page = pages.find(p => p.id === postsContainer.dataset.pageId);
            if (page) {
                renderPosts(page.posts);
            }
        } else {
            renderPosts(posts);
        }
    }
}

// Handle the "Create Post" button click
function handleCreatePost(event) {
    const content = postContentInput.value.trim();
    const imageUrl = imageUrlInput.value.trim();

    if (content === '' && imageUrl === '') {
        showCustomMessage("Post content or an image URL is required.");
        return;
    }

    const newPost = {
        id: 'post-' + Date.now(),
        userId: currentUserId,
        userName: "MyBook User",
        content: content,
        likes: 0,
        likedBy: [],
        commentCount: 0,
        shareCount: 0,
        image: imageUrl,
        timestamp: new Date()
    };

    posts.unshift(newPost);
    postContentInput.value = '';
    imageUrlInput.value = '';
    createPostModal.classList.add('hidden');
    showCustomMessage("Post created successfully!");
    renderPosts(posts);
}

// Render chat list
function renderChatList(users) {
    chatListContainer.innerHTML = '';
    if (users.length === 0) {
        chatListContainer.innerHTML = '<p class="text-center text-gray-500 mt-8">No chats found.</p>';
        return;
    }
    users.sort((a, b) => b.timestamp - a.timestamp);
    users.forEach(user => {
        const chatItem = document.createElement('button');
        chatItem.className = 'w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 chat-item';
        chatItem.dataset.id = user.id;
        chatItem.innerHTML = `
            <i class="fas fa-user-circle text-3xl text-gray-400"></i>
            <div class="text-left flex-grow">
                <p class="font-semibold text-gray-800 dark:text-gray-300">${user.name}</p>
                <p class="text-sm text-gray-500 truncate">${user.lastMessage}</p>
            </div>
            <span class="text-xs text-gray-400">${user.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
        `;
        chatListContainer.appendChild(chatItem);

        chatItem.addEventListener('click', () => {
            showCustomMessage(`Starting a chat with ${user.name}... (Feature not implemented)`);
        });
    });
}

// Render the list of pages in the explore modal
function renderPagesList(filteredPages = pages) {
    pagesList.innerHTML = '';
    if (filteredPages.length === 0) {
        pagesList.innerHTML = '<p class="text-center text-gray-500 mt-8">No pages found.</p>';
        return;
    }
    filteredPages.forEach(page => {
        const pageItem = document.createElement('button');
        pageItem.className = 'w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-left page-item';
        pageItem.dataset.pageId = page.id;
        pageItem.innerHTML = `
            <i class="fas fa-users text-xl text-gray-500"></i>
            <span class="font-semibold text-gray-700 dark:text-gray-300">${page.name}</span>
        `;
        pagesList.appendChild(pageItem);

        pageItem.addEventListener('click', () => {
            exploreModal.classList.add('hidden');
            postsContainer.dataset.pageId = page.id;
            renderPosts(page.posts);
        });
    });
}

// Handle "Create Page" button click
function handleCreatePage() {
    const pageName = newPageNameInput.value.trim();
    if (!pageName) {
        showCustomMessage("Page name cannot be empty.");
        return;
    }

    const newPageId = pageName.toLowerCase().replace(/\s/g, '-');
    const newPage = {
        id: newPageId,
        name: pageName,
        posts: []
    };

    pages.push(newPage);
    newPageNameInput.value = '';
    newPageDescriptionInput.value = '';
    createPageModal.classList.add('hidden');
    showCustomMessage(`Page "${pageName}" created!`);
    renderPagesList(); // Re-render the list with the new page
}

// Render user profiles for search results
function renderUserProfiles(users) {
    searchResultsList.innerHTML = '';
    if (users.length === 0) {
        searchResultsList.innerHTML = '<p class="text-center text-gray-500 mt-8">No results found.</p>';
        return;
    }
    users.forEach(user => {
        const userProfileCard = document.createElement('div');
        userProfileCard.className = 'flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer';
        userProfileCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.name}'s avatar" class="w-12 h-12 rounded-full object-cover">
            <div class="flex-grow">
                <p class="font-semibold text-gray-800 dark:text-gray-300">${user.name}</p>
                <p class="text-sm text-gray-500 truncate">${user.bio}</p>
            </div>
        `;
        userProfileCard.addEventListener('click', () => {
            showCustomMessage(`Viewing ${user.name}'s profile. (Feature not implemented)`);
            searchResultsModal.classList.add('hidden');
        });
        searchResultsList.appendChild(userProfileCard);
    });
}

// Event Listeners for UI
homeBtn.addEventListener('click', () => {
    postsContainer.removeAttribute('data-page-id');
    renderPosts(posts);
});

createPostBtn.addEventListener('click', () => {
    createPostModal.classList.remove('hidden');
});

closePostModalBtn.addEventListener('click', () => {
    createPostModal.classList.add('hidden');
});

submitPostBtn.addEventListener('click', handleCreatePost);

exploreBtn.addEventListener('click', () => {
    renderPagesList();
    exploreModal.classList.remove('hidden');
});

closeExploreModalBtn.addEventListener('click', () => {
    exploreModal.classList.add('hidden');
});

createPageBtn.addEventListener('click', () => {
    exploreModal.classList.add('hidden');
    createPageModal.classList.remove('hidden');
});

closeCreatePageModalBtn.addEventListener('click', () => {
    createPageModal.classList.add('hidden');
});

submitCreatePageBtn.addEventListener('click', handleCreatePage);

settingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
});

closeSettingsModalBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
});

messageBtn.addEventListener('click', () => {
    renderChatList(chatUsers);
    chatModal.classList.remove('hidden');
});

closeChatModalBtn.addEventListener('click', () => {
    chatModal.classList.add('hidden');
});

closeSearchResultsModalBtn.addEventListener('click', () => {
    searchResultsModal.classList.add('hidden');
    mainSearchInput.value = '';
});

mainSearchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    if (searchTerm.length > 0) {
        const filteredUsers = dummyUsers.filter(user => user.name.toLowerCase().includes(searchTerm) || user.bio.toLowerCase().includes(searchTerm));
        renderUserProfiles(filteredUsers);
        searchResultsModal.classList.remove('hidden');
    } else {
        searchResultsModal.classList.add('hidden');
    }
});

chatSearchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = chatUsers.filter(user => user.name.toLowerCase().includes(searchTerm));
    renderChatList(filteredUsers);
});

pageSearchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPages = pages.filter(page => page.name.toLowerCase().includes(searchTerm));
    renderPagesList(filteredPages);
});

darkModeToggle.addEventListener('click', toggleDarkMode);

// Settings button event listeners
accountDetailsBtn.addEventListener('click', () => showCustomMessage("Account Details functionality is not implemented yet."));
recentActivityBtn.addEventListener('click', () => showCustomMessage("Recent Activity functionality is not implemented yet."));
privacyBtn.addEventListener('click', () => showCustomMessage("Privacy functionality is not implemented yet."));
savedBtn.addEventListener('click', () => showCustomMessage("Saved posts functionality is not implemented yet."));
blockedBtn.addEventListener('click', () => showCustomMessage("Blocked accounts functionality is not implemented yet."));
closeFriendsBtn.addEventListener('click', () => showCustomMessage("Close friends functionality is not implemented yet."));
logoutBtn.addEventListener('click', () => {
    showCustomMessage("Logging out...");
    setTimeout(() => {
        currentUserId = 'user-' + Math.random().toString(36).substring(2, 8);
        window.location.reload();
    }, 1000);
});

// Global modal close on outside click
window.addEventListener('click', (event) => {
    if (event.target === createPostModal) {
        createPostModal.classList.add('hidden');
    }
    if (event.target === exploreModal) {
        exploreModal.classList.add('hidden');
    }
    if (event.target === createPageModal) {
        createPageModal.classList.add('hidden');
    }
    if (event.target === settingsModal) {
        settingsModal.classList.add('hidden');
    }
    if (event.target === chatModal) {
        chatModal.classList.add('hidden');
    }
    if (event.target === customAlertModal) {
        customAlertModal.classList.add('hidden');
    }
    if (event.target === searchResultsModal) {
        searchResultsModal.classList.add('hidden');
        mainSearchInput.value = '';
    }
});

// Initial render on page load
document.addEventListener('DOMContentLoaded', () => renderPosts(posts));
