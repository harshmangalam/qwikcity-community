import { component$ } from "@builder.io/qwik";
import { routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button";

export const useCreateTag = routeAction$(
  (form, event) => {},
  zod$({
    name: z.string().nonempty("Tag name is required"),
    description: z.string().nonempty("Tag description is required"),
  })
);
export default component$(() => {
  return (
    <div class={"min-h-screen bg-gray-100 grid place-items-center"}>
      <article
        class={"bg-white rounded  p-6 shadow border max-w-sm w-full mx-auto"}
      >
        <form class={"flex flex-col space-y-2"}>
          <div class={"flex flex-col space-y-2"}>
            <label for="name">Tag Name</label>
            <input type="text" name="name" id="name" class={"w-full"} />
          </div>
          <div class={"flex flex-col space-y-2"}>
            <label for="description">Tag Description</label>
            <textarea
              rows={6}
              name="description"
              id="description"
              class={"w-full"}
            />
          </div>
          <Button>Create Tag</Button>
        </form>
      </article>
    </div>
  );
});
