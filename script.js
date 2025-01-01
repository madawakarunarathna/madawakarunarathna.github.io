function calculateExperience() {
    const startDate = new Date('2015-12-17');
    const today = new Date();
    const years = Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById('experience-years').textContent = years;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            const tooltip = document.getElementById('tooltip');
            tooltip.textContent = 'Copied!';
            setTimeout(() => {
                tooltip.textContent = 'Click to copy';
            }, 2000);
        });
}

// Call calculateExperience when the page loads
document.addEventListener('DOMContentLoaded', calculateExperience);