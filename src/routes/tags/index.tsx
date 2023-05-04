import { component$ } from "@builder.io/qwik";
import { TagCard } from "./tag-card";

export default component$(() => {
  return (
    <div class={"min-h-screen bg-gray-100"}>
      <div class={"max-w-5xl w-full mx-auto py-6"}>
        <h2 class={"text-3xl font-medium mb-6"}>Tags</h2>
        <ul
          class={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
          }
        >
          {[...new Array(10)].map((tag) => (
            <li key={tag}>
              <TagCard />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
