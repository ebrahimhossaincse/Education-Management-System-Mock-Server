document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    const token = localStorage.getItem('token');
    console.log('Token:', token);

    // Redirect to login page if no token is found
    if (!token) {
        alert('No token found. Please login.');
        window.location.href = '/index.html'; // Updated path
        return;
    }

    // Decode and verify the token
    try {
        const payload = jwtDecode(token);
        console.log('Token payload:', payload);

        // Check if the token is expired
        const currentTime = Math.floor(Date.now() / 1000);
        console.log('Current time:', currentTime, 'Token expiration time:', payload.exp);

        if (payload.exp < currentTime) {
            alert('Session expired. Please login again.');
            logout();
        } else {
            // Display welcome message with username
            const welcomeMessage = document.getElementById('welcome-message');
            welcomeMessage.textContent = `Welcome, ${payload.username || 'User'}!`;
        }
    } catch (e) {
        console.error('Token decoding error:', e);
        alert('Invalid token. Please login again.');
        logout();
    }

    // Logout function
    function logout() {
        console.log('Logging out');
        localStorage.removeItem('token');
        window.location.href = '/index.html'; // Updated path
    }

    // Navigation event listeners
    document.getElementById('student').addEventListener('click', function () {
        console.log('Student button clicked');
        window.location.href = 'student.html';
    });

    document.getElementById('course').addEventListener('click', function () {
        console.log('Course button clicked');
        window.location.href = 'course.html';
    });

    document.getElementById('instructor').addEventListener('click', function () {
        console.log('Instructor button clicked');
        window.location.href = 'instructor.html';
    });

    document.getElementById('batch').addEventListener('click', function () {
        console.log('Batch button clicked');
        window.location.href = 'batch.html';
    });

    // Logout button event listener
    document.getElementById('logout').addEventListener('click', logout);
});