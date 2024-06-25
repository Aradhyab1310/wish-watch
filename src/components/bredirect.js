document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('redirectButton');
    button.addEventListener('click', () => {
        window.location.href = 'books.html'; // URL of the new page
    });
});
