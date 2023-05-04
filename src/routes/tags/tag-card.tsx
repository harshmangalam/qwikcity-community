import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface TagCardProps {
  id: string;
  name: string;
  description: string;
}
export const TagCard = component$((props: TagCardProps) => {
  const { description, id, name } = props;
  return (
    <article
      class={
        "p-4 h-full shadow border rounded bg-white flex flex-col space-y-4"
      }
    >
      <div>
        <Link
          href={`/questions/tagged/${id}`}
          class={
            "font-medium bg-accent-subtle hover:bg-accent-emphasis text-accent-fg hover:text-white text-xs px-2 py-1 rounded"
          }
        >
          {name}
        </Link>
      </div>

      <p class={"text-gray-600 text-sm"}>{description}</p>

      <div class={"text-sm text-gra-800"}>
        <span>4000 </span>
        <span>Questions</span>
      </div>
    </article>
  );
});
