// Smooth scroll for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fake login function
function fakeLogin(event) {
    event.preventDefault();
    const user = document.getElementById('username').value;
    alert('Welcome, ' + user + '! ❤️');
    return false;
}
