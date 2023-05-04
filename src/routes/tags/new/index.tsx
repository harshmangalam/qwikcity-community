import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button";
import { prisma } from "~/lib/prisma";
import { getCurrentUser } from "~/utils/auth";

export const useCreateTag = routeAction$(
  async (form, event) => {
    const [user, error] = await getCurrentUser(event);

    if (error)
      return event.fail(error.status, {
        message: error.message,
      });

    if (!user)
      return event.fail(400, {
        message: "User not found",
      });
    await prisma.tag.create({
      data: {
        ...form,
        createdById: user.id,
      },
    });

    throw event.redirect(303, "/tags");
  },
  zod$({
    name: z.string().nonempty("Tag name is required"),
    description: z.string().nonempty("Tag description is required"),
  })
);
export default component$(() => {
  const action = useCreateTag();
  return (
    <div class={"min-h-screen bg-gray-100 grid place-items-center"}>
      <article
        class={"bg-white rounded  p-6 shadow border max-w-sm w-full mx-auto"}
      >
        <Form action={action} class={"flex flex-col space-y-2"}>
          <div class={"flex flex-col space-y-2"}>
            <label for="name">Tag Name</label>
            <input type="text" name="name" id="name" class={"w-full"} />
            <span class={"text-sm text-danger"}>
              {action.value?.fieldErrors?.name}
            </span>
          </div>
          <div class={"flex flex-col space-y-2"}>
            <label for="description">Tag Description</label>
            <textarea
              rows={6}
              name="description"
              id="description"
              class={"w-full"}
            />
            <span class={"text-sm text-danger"}>
              {action.value?.fieldErrors?.description}
            </span>
          </div>
          <Button isLoading={action.isRunning}>Create Tag</Button>
        </Form>
      </article>
    </div>
  );
});
