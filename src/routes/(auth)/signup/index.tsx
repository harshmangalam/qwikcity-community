import { Link } from "@builder.io/qwik-city";

export default function Signup() {
  return (
    <div class={"min-h-screen h-full grid place-items-center bg-gray-100"}>
      <div class="max-w-xs w-full mx-auto">
        <form
          class={
            "flex flex-col space-y-4 p-6 shadow border bg-white rounded-lg"
          }
        >
          <div class={"flex flex-col space-y-2"}>
            <label for="name">Name</label>
            <input class={"rounded py-1"} type="text" name="name" id="name" />
          </div>
          <div class={"flex flex-col space-y-2"}>
            <label for="email">Email address</label>
            <input
              class={"rounded py-1"}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div class={"flex flex-col space-y-2"}>
            <label for="password">Password</label>
            <input
              class={"rounded py-1"}
              type="password"
              name="password"
              id="password"
            />
          </div>

          <button
            class={
              "bg-primary text-white text-sm font-semibold px-4 py-2 rounded"
            }
          >
            Sign up
          </button>
        </form>

        <div class={"p-6  text-center border shadow bg-white rounded-lg mt-6"}>
          <span class={"text-gray-500"}>Already have an account?</span>
          <Link href="/login" class={"text-primary hover:text-primary/80"}>
            {" "}
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
