
<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 shadow-md rounded-md w-full max-w-md bg-indigo-300">
        <h2 class="text-3xl font-bold text-center mb-6">Password Recovery</h2>
        <form id="passwordRecoveryForm" action="index.php?page=password-recovery" method="post">
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" required
                       class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            </div>
            <button type="submit"
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Recover Password
            </button>
        </form>
        <p class="mt-4 text-center text-rose-600">Remembered your password? <a href="index.php?page=login"
                                                                               class="text-blue-500">Login</a></p>
    </div>
</div>