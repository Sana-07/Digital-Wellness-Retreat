  document.addEventListener('DOMContentLoaded', function () {
    const authLink = document.getElementById('auth-link');
    const logoutLink = document.getElementById('logout-link');
    const usernameNav = document.getElementById('username-nav');

    // Check if user is logged in
    if (localStorage.getItem('loggedIn') === 'true') {
      authLink.classList.add('d-none'); // Hide Register/SignIn
      logoutLink.classList.remove('d-none'); // Show Logout

      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.name) {
        usernameNav.innerText = user.name; // Display user's name in the navbar
      }
    } else {
      authLink.classList.remove('d-none'); // Show Register/SignIn
      logoutLink.classList.add('d-none'); // Hide Logout
      usernameNav.innerText = ''; // Clear username display

      // Redirect to login page if not logged in
      window.location.href = '../html files/loginsignup.html';
    }

    // Logout functionality
    document.getElementById('logout').addEventListener('click', function () {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('user');
      // Redirect to login page or home page after logout
      window.location.href = '../index.html';
    });
  });

  const updateNavbar = () => {
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');

    const usernameNav = document.getElementById('username-nav');
    if (loggedIn === 'true' && usernameNav) {
      usernameNav.innerText = `${username}`;
    } else if (usernameNav) {
      usernameNav.innerText = ``;
    }
  }

  updateNavbar();
