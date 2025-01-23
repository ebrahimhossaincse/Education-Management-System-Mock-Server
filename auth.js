// Import jwt-decode library (install it using npm or include it via CDN)
// npm: npm install jwt-decode
// CDN: <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
import jwtDecode from 'jwt-decode';

document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');

    // Redirect to login page if no token is found
    if (!token) {
        window.location.href = 'index.html';
        return;
    }

    // Decode and verify the token
    try {
        const payload = jwtDecode(token);

        // Check if the token is expired
        const currentTime = Math.floor(Date.now() / 1000);
        if (payload.exp < currentTime) {
            alert('Session expired. Please login again.');
            logout();
        }
    } catch (e) {
        alert('Invalid token. Please login again.');
        logout();
    }

    // Logout function
    function logout() {
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    }

    // Attach logout function to a button (if it exists)
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});