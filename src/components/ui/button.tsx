import { type QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import { LuLoader2 } from "@qwikest/icons/lucide";

export type HTMLButtonProps = QwikIntrinsicElements["button"];
export type CustomButtonProps = {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled";
  isLoading?: boolean;
};
export type ButtonProps = HTMLButtonProps & CustomButtonProps;
export const Button = component$((props: ButtonProps) => {
  const { isLoading = false, disabled } = props;
  return (
    <button
      class={
        "bg-primary text-white text-sm font-semibold h-10 grid place-items-center rounded disabled:bg-primary/70"
      }
      disabled={disabled || isLoading}
    >
      {isLoading ? <LuLoader2 class={"w-6 h-6 animate-spin"} /> : <Slot />}
    </button>
  );
});
