import { component$ } from "@builder.io/qwik";
import { TagCard } from "./tag-card";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={"min-h-screen bg-gray-100"}>
      <div class={"max-w-5xl w-full mx-auto py-6"}>
        <div class={"flex justify-between gap-4"}>
          <h2 class={"text-3xl font-medium mb-6"}>Tags</h2>
          <div>
            <Link
              href="/tags/new"
              class={
                "bg-primary text-white text-sm font-semibold h-10 grid place-items-center rounded px-4 hover:bg-primary/70"
              }
            >
              Create Tag
            </Link>
          </div>
        </div>
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
