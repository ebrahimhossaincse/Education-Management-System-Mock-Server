document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');

    // Redirect to login page if no token is found
    if (!token) {
        alert('No token found. Please login.');
        window.location.href = '/index.html'; // Updated path
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
        } else {
            // Display welcome message with username
            const welcomeMessage = document.getElementById('welcome-message');
            welcomeMessage.textContent = `Welcome, ${payload.username || 'User'}!`;
        }
    } catch (e) {
        alert('Invalid token. Please login again.');
        logout();
    }

    // Logout function
    function logout() {
        localStorage.removeItem('token');
        window.location.href = '/index.html'; // Updated path
    }

    // Attach event listeners to buttons
    document.getElementById('student').addEventListener('click', function () {
        console.log('Student button clicked');
        window.location.href = '/student.html'; // Updated path
    });

    document.getElementById('course').addEventListener('click', function () {
        console.log('Course button clicked');
        window.location.href = '/course.html'; // Updated path
    });

    document.getElementById('instructor').addEventListener('click', function () {
        console.log('Instructor button clicked');
        window.location.href = '/instructor.html'; // Updated path
    });

    document.getElementById('batch').addEventListener('click', function () {
        console.log('Batch button clicked');
        window.location.href = '/batch.html'; // Updated path
    });

    document.getElementById('logout').addEventListener('click', logout);
});