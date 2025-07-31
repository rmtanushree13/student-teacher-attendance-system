document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const role = document.getElementById('role').value;
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (!role || !username || !password) {
    message.textContent = 'Please fill in all fields.';
    return;
  }

  // Simulated login (replace with real authentication later)
  if ((role === 'teacher' && username === 'teacher1' && password === 'pass123') ||
      (role === 'student' && username === 'student1' && password === 'pass123')) {
    message.style.color = 'green';
    message.textContent = 'Login successful!';
    // Redirect or open dashboard page
    // window.location.href = `${role}-dashboard.html`;
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid credentials.';
  }
});
