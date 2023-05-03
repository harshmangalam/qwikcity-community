import { component$ } from "@builder.io/qwik";
import { Form, Link, routeAction$, z, zod$ } from "@builder.io/qwik-city";

import { Alert } from "~/components/ui/alert";

import { Button } from "~/components/ui/button";

export const useSignup = routeAction$(
  async (form, event) => {
    // check if email already exists
  },
  zod$({
    name: z.string().nonempty("Name must be required"),
    email: z.string().email("Email must be valid email address"),

    password: z.string().nonempty("Password must be required"),
  })
);
export default component$(() => {
  const action = useSignup();

  return (
    <div class={"min-h-screen h-full grid place-items-center bg-gray-100"}>
      <div class="max-w-xs w-full mx-auto">
        {action.value?.message && (
          <Alert status="error" class={"mb-4"}>
            {/* @ts-ignore */}
            {action.value?.message}
          </Alert>
        )}
        <Form
          action={action}
          class={
            "flex flex-col space-y-2 p-6 shadow border bg-white rounded-lg"
          }
        >
          <div class={"flex flex-col space-y-2"}>
            <label for="name">Name</label>
            <input
              required
              class={"rounded py-1"}
              type="text"
              name="name"
              id="name"
            />
            <span class={"text-sm text-danger"}>
              {action.value?.fieldErrors?.name}
            </span>
          </div>
          <div class={"flex flex-col space-y-2"}>
            <label for="email">Email address</label>
            <input
              class={"rounded py-1"}
              type="email"
              name="email"
              id="email"
              required
            />
            <span class={"text-sm text-danger"}>
              {action.value?.fieldErrors?.email}
            </span>
          </div>
          <div class={"flex flex-col space-y-2"}>
            <label for="password">Password</label>
            <input
              class={"rounded py-1"}
              type="password"
              name="password"
              id="password"
              required
            />
            <span class={"text-sm text-danger"}>
              {action.value?.fieldErrors?.password}
            </span>
          </div>

          <Button type="submit" isLoading={action.isRunning}>
            Sign up
          </Button>
        </Form>

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
});
