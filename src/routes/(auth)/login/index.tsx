import { Link } from "@builder.io/qwik-city";

export default function Login() {
  return (
    <div class={"min-h-screen h-full grid place-items-center bg-gray-100"}>
      <div class="max-w-xs w-full mx-auto">
        <form
          class={
            "flex flex-col space-y-4 p-6 shadow border bg-white rounded-lg"
          }
        >
          <div class={"flex flex-col space-y-2"}>
            <label for="email">Email address</label>
            <input
              name="email"
              id="email"
              class={"rounded py-1"}
              type="email"
            />
          </div>
          <div class={"flex flex-col space-y-2"}>
            <div class={"flex items-center justify-between"}>
              <label for="password">Password</label>
              <Link
                href="/forgot-password"
                class={"text-primary text-sm hover:text-primary/80"}
              >
                Forgot password
              </Link>
            </div>

            <input
              name="password"
              id="password"
              class={"rounded py-1"}
              type="password"
            />
          </div>

          <button
            class={
              "bg-primary text-white text-sm font-semibold px-4 py-2 rounded"
            }
          >
            Log in
          </button>
        </form>

        <div class={"p-6  text-center border shadow bg-white rounded-lg mt-6"}>
          <span class={"text-gray-500"}>Don't have an account?</span>
          <Link href="/signup" class={"text-primary hover:text-primary/80"}>
            {" "}
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
