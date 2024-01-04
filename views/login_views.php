<!-- Common Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
        <img src="./assets/pictures/chat.png" alt="Logo" style="height: 30px; width: auto;">
        Chat Rooms
    </a>
</nav>

<!-- Login Page -->
<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4">Login</h2>
                    <form id="loginForm" action="index.php?page=login" method="post">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" class="form-control" id="password" placeholder="Enter your password" required>
                        </div>
                        <button type="submit" name="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                    <p class="mt-3 text-center">Don't have an account? <a href="index.php?page=register">Register</a></p>
                </div>
            </div>
        </div>
    </div>
</div>


</body>

</html>