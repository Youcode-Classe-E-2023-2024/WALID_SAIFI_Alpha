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
                // Redirect to the home page or perform other actions
              //  window.location.href = "index.php?page=home";
            } else {
                console.log('Login failed');
                // Handle failed login (e.g., display an error message)
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
});