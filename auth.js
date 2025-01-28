// auth.js
document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'index.html';
        return;
    }

    // Optionally, you can decode and verify the token here if necessary
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        // Check if the token is expired
        const currentTime = Math.floor(Date.now() / 1000);
        if (payload.exp < currentTime) {
            alert('Session expired. Please login again.');
            localStorage.removeItem('token');
            window.location.href = 'index.html';
        }
    } catch (e) {
        alert('Invalid token. Please login again.');
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }
});