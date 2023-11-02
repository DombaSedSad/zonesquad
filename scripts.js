document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === '123') { // Perbarui 'use' menjadi 'user'
        console.log('Login successful'); // Tambahkan ini sebagai pemeriksaan
        window.location.href = 'https://onesquad.art.blog/';
    } else {
        alert('Username or password is incorrect. Please try again.');
    }
});
