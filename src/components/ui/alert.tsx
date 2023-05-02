import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import clsx from "~/utils/clsx";

type CustomAlertProps = {
  status?: "success" | "error" | "warning";
};
type AlertProps = QwikIntrinsicElements["div"] & CustomAlertProps;
export const Alert = component$((props: AlertProps) => {
  const { status = "success", class: className } = props;
  return (
    <div
      role="alert"
      class={clsx(
        {
          "text-danger bg-danger/10": status === "error",
          "text-success bg-success/10": status === "success",
          "text-warning bg-warning/10": status === "warning",
        },
        "py-2 px-4 rounded text-center",
        className
      )}
    >
      <Slot />
    </div>
  );
});
