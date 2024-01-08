const loginform = document.getElementById("loginForm");
console.log(loginform);
loginform.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch("index.php?page=login", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            if (data.trim() === 'valide') {
                console.log('Login successful');
            } else {
                console.log('Login failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
});