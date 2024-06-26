const SignUp = () => {
  return (
    <div class="relative bg-gray mx-4 rounded-md h-screen flex-col items-center justify-center p-0 md:grid lg:max-w-none lg:grid-cols-2">
      <div class="relative hidden h-full items-center justify-center lg:flex border-r border-black/30">
        <img src="/signup.svg" className="h-[400px]" />
      </div>

      <div class="relative p-5">
        <div class="mx-auto flex flex-col justify-center space-y-6 lg:w-[400px]">
          <div class="flex flex-col space-y-2 text-center">
            <h1 class="text-2xl font-semibold tracking-wider text-black dark:text-white">
              Create An Account
            </h1>
            <p class="text-sm text-gray-800 dark:text-gray-300">
              Enter your information below to create your account
            </p>
          </div>
          <div class="space-y-4">
            <div class="flex flex-col space-y-1">
              <label htmlFor="fullname" class="text-sm">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter fullname"
                class="rounded-lg border border-gray-500 bg-transparent px-3 py-1 text-sm outline-none"
              />
            </div>

            <div class="flex flex-col space-y-1">
              <label htmlFor="email" class="text-sm text-black dark:text-white">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter email address"
                class="rounded-lg border border-gray-500 bg-transparent px-3 py-1 text-sm outline-none"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label htmlFor="email" class="text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                class="rounded-lg border border-gray-500 bg-transparent px-3 py-1 text-sm outline-none"
              />
            </div>
            <button
              class="w-full rounded-full bg-primary px-3 py-2 text-sm text-white outline-none transition-all hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-100"
              type="submit"
            >
              Create An Account
            </button>
          </div>
          <div class="flex items-center justify-between">
            <a
              href="/login"
              class="text-sm text-gray-800 transition-all hover:text-gray-900 lg:text-xs dark:text-white dark:hover:text-gray-300"
            >
              Already have an acount?
            </a>
          </div>
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t border-gray-500" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-gray px-2 text-black dark:bg-black dark:text-white">
                Or continue with
              </span>
            </div>
          </div>
          <button class="w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm text-black outline-none transition-all dark:border-white dark:text-white">
            <div class="flex items-center justify-center space-x-3">
              <svg role="img" viewBox="0 0 24 24" height="10" width="10">
                <path
                  fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                />
              </svg>
              <span>Google</span>
            </div>
          </button>
          <p class="px-4 text-center text-sm text-gray-800 dark:text-gray-300">
            By clicking continue, you agree to our
            <a
              href="/terms"
              class="text-blue-500 underline underline-offset-4 hover:text-blue-600"
            >
              {" "}
              Terms of Service{" "}
            </a>
            and
            <a
              href="/policy"
              class="text-blue-500 underline underline-offset-4 hover:text-blue-600"
            >
              {" "}
              Privacy Policy{" "}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
