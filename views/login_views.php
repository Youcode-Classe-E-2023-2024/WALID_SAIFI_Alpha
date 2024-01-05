<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 shadow-md rounded-md w-full max-w-md bg-indigo-300">
        <h2 class="text-3xl font-bold text-center mb-6">Login</h2>
        <form id="loginForm" action="index.php?page=login" method="post">
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
            <button type="submit"
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Login
            </button>
        </form>
        <p class="mt-4 text-center text-rose-600">Don't have an account? <a href="index.php?page=register"
                                                                            class="text-blue-500">Register</a></p>
        <p class="mt-2 text-center text-rose-600">Forgot your password? <a href="index.php?page=forgot-password"
                                                                           class="text-blue-500">Reset it</a></p>
    </div>
</div>
