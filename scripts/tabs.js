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

function toggleProject(projectId) {
    const projectContent = document.getElementById(projectId);
    const projectHeadChip = document.getElementById(projectId + '-top-chips');
    const projectContainer = projectContent.parentElement;
    const allProjects = document.querySelectorAll('.project-container');
    
    // Close all other projects and show their chips
    allProjects.forEach(container => {
        if (container !== projectContainer) {
            container.classList.remove('expanded');
            const otherContent = container.querySelector('.project-content');
            const otherProjectId = otherContent.id;
            const otherChips = document.getElementById(otherProjectId + '-top-chips');

            if (otherContent) {
                otherContent.classList.add('hidden');
                otherContent.classList.remove('show');
            }
            if (otherChips) {
                otherChips.classList.remove('hidden'); // Always show chips when collapsing
            }
        }
    });
    
    // Toggle the clicked project
    const isExpanding = !projectContainer.classList.contains('expanded');
    projectContainer.classList.toggle('expanded');
    projectContent.classList.toggle('hidden');
    projectContent.classList.toggle('show');

    // Handle chips visibility based on expansion state
    if (projectHeadChip) {
        if (isExpanding) {
            projectHeadChip.classList.add('hidden');
        } else {
            projectHeadChip.classList.remove('hidden');
        }
    }
}