<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 shadow-md rounded-md w-full max-w-md bg-indigo-300">
        <h2 class="text-3xl font-bold text-center mb-6">Register</h2>
        <form id="registerForm" action="index.php?page=register" method="post">
            <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-semibold mb-2">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter your username" required
                       class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" required
                       class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" required
                       class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <button type="submit" name="submit"
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Register
            </button>
        </form>
        <p class="mt-4 text-center text-rose-600">Already have an account? <a href="index.php?page=login"
                                                                              class="text-blue-500">Login</a></p>
    </div>
</div>
