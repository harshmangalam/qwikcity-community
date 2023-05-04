import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const TagCard = component$(() => {
  return (
    <article
      class={"p-4 shadow border rounded bg-white flex flex-col space-y-4"}
    >
      <div>
        <Link
          href="/questions/tagged/javascript"
          class={
            "bg-blue-100 hover:bg-blue-100/70 text-blue-800 text-sm px-2 py-1 rounded"
          }
        >
          Javascript
        </Link>
      </div>

      <p class={"text-gray-600 text-sm"}>
        For questions about programming in ECMAScript (JavaScript/JS) and its
        different dialects/implementations (except for ActionScript)
      </p>

      <div class={"text-sm text-gra-800"}>
        <span>4000 </span>
        <span>Questions</span>
      </div>
    </article>
  );
});
