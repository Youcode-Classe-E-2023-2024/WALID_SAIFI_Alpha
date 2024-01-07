

function deleteUser(userId) {

    console.log(`Suppression de l'utilisateur avec l'ID : ${userId}`);
}

function editUser(userId) {

    console.log(`Édition de l'utilisateur avec l'ID : ${userId}`);
}

function fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const userTable = document.getElementById('userTable');
            const tbody = userTable.querySelector('tbody');
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="py-2 px-4 border-b">${user.id}</td>
                    <td class="py-2 px-4 border-b">${user.name}</td>
                    <td class="py-2 px-4 border-b">${user.email}</td>
                    <td class="py-2 px-4 border-b">${user.username}</td>
                    <td class="py-2 px-4 border-b">${user.address.street}, ${user.address.city}</td>
                    <td class="py-2 px-4 border-b">
                        <button class="bg-blue-500 text-white py-1 px-2 rounded edit-button">Éditer</button>
                    </td>
                    <td class="py-2 px-4 border-b">
                        <button class="bg-red-500 text-white py-1 px-2 rounded delete-button">Supprimer</button>
                    </td>
                `;
                // Ajout des écouteurs d'événements
                const editButton = row.querySelector('.edit-button');
                const deleteButton = row.querySelector('.delete-button');

                editButton.addEventListener('click', () => editUser(user.id));
                deleteButton.addEventListener('click', () => deleteUser(user.id));

                tbody.appendChild(row);
            });
        })
}


// Appeler la fonction fetchUser au chargement de la page
fetchUser();

/**
 * fonction pour afficher les post de API
 */
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const postTable = document.getElementById('postTable');
            const tbody = postTable.querySelector('tbody');

            // Loop through the data to create table rows
            data.forEach(post => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="py-2 px-4 border-b">${post.id}</td>
                    <td class="py-2 px-4 border-b">${post.userId}</td>
                    <td class="py-2 px-4 border-b">${post.title}</td>
                    <td class="py-2 px-4 border-b">${post.body}</td>
                    <td class="py-2 px-4 border-b">
                        <button class="bg-blue-500 text-white py-1 px-2 rounded">Éditer</button>
                    </td>
                    <td class="py-2 px-4 border-b">
                        <button class="bg-red-500 text-white py-1 px-2 rounded">Supprimer</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}
fetchPosts();














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