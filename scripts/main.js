function calculateExperience() {
    const startDate = new Date('2015-12-17');
    const today = new Date();
    const years = Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 365.25));
    const elements = document.querySelectorAll('#experience-years');
    elements.forEach(element => {
        element.textContent = years;
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Copied:', text);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
}