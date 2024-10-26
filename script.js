// JavaScript for any additional functionality (e.g., dynamic loading, alert on download)

document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', () => {
        alert('Downloading ' + link.textContent.trim());
    });
});
