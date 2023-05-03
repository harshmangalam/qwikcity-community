import { component$ } from "@builder.io/qwik";
import { Form, Link, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";

export const useLogin = routeAction$(
  async (form, event) => {},
  zod$({
    email: z.string().email("Email must be valid email address"),
    password: z.string().nonempty("Password must be required"),
  })
);

export default component$(() => {
  const action = useLogin();
  return (
    <div class={"min-h-screen h-full grid place-items-center bg-gray-100"}>
      <div class="max-w-xs w-full mx-auto">
        {/* @ts-ignore */}
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
            <label for="email">Email address</label>
            <input
              name="email"
              id="email"
              class={"rounded py-1"}
              type="email"
              required
            />
            <span class={"text-sm text-danger"}>
              {action.value?.fieldErrors?.email}
            </span>
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
              required
            />
            <span class={"text-sm text-danger"}>
              {action.value?.fieldErrors?.password}
            </span>
          </div>

          <Button type="submit" isLoading={action.isRunning}>
            Log in
          </Button>
        </Form>

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
});
