function switchMainTab(tabId) {
    document.querySelectorAll('.main-tab-content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });
    
    document.querySelectorAll('.main-tab-btn').forEach(btn => {
        btn.classList.remove('active-tab');
    });
    
    document.getElementById(`${tabId}-tab`).classList.remove('hidden');
    document.getElementById(`${tabId}-tab`).classList.add('active');
    
    event.target.classList.add('active-tab');
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.classList.add('hidden');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active-tab');
    });
    
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.remove('hidden');
    selectedTab.classList.add('active');
    
    const selectedBtn = document.querySelector(`[data-tab="${tabId}"]`);
    selectedBtn.classList.add('active-tab');
}

// Find the existing toggleProject function in tabs.js and replace it with this:
function toggleProject(projectId) {
    const projectContent = document.getElementById(projectId);
    const projectContainer = projectContent.parentElement;
    const allProjects = document.querySelectorAll('.project-container');
    
    // Close all other projects
    allProjects.forEach(container => {
        if (container !== projectContainer) {
            container.classList.remove('expanded');
            const otherContent = container.querySelector('.project-content');
            if (otherContent) {
                otherContent.classList.add('hidden');
                otherContent.classList.remove('show');
            }
        }
    });
    
    // Toggle the clicked project
    projectContainer.classList.toggle('expanded');
    projectContent.classList.toggle('hidden');
    projectContent.classList.toggle('show');
}