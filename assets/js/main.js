
function deleteUser(userId) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + userId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            if(res.status == 200) {
                console.log(res.status);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Utilisateur supprimé avec succès",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
}

function ajouterDonnees() {
    var id = document.getElementById('id').value;
    var username = document.getElementById('Username').value;
    var adresse = document.getElementById('adresse').value;
    document.getElementById('id').value = '';
    document.getElementById('Username').value = '';
    document.getElementById('adresse').value = '';
    const formData = new FormData();
    formData.append('id', id);
    formData.append('username', username);
    formData.append('adresse', adresse);
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: formData,
    })
        .then(res => {
            if (res.ok) {
                console.log(res.ok);
                return res.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            console.log(data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "utilisatur ajouter avec success",
                showConfirmButton: false,
                timer: 1500
            });

        })
}



function ajouterPost() {
    const postId = document.getElementById('id').value;
    const postTitle = document.getElementById('titre').value;
    const postBody = document.getElementById('corps').value;

    const postData = {
        id: postId,
        title: postTitle,
        body: postBody,
        userId: 1, 
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Post ajouté avec succès",
            showConfirmButton: false,
            timer: 1500
        });
     
    })
    s
}

// Attach the ajouterPost function to the "Ajouter" button in the post form
document.getElementById('addpost').addEventListener('submit', function(event) {
    event.preventDefault();
    ajouterPost();
});



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
















