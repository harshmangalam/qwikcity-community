import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";

type CustomAlertProps = {
  status?: "success" | "error" | "warning";
};
type AlertProps = QwikIntrinsicElements["div"] & CustomAlertProps;
export const Alert = component$((props: AlertProps) => {
  const { status = "success" } = props;
  return (
    <div
      role="alert"
      class={[
        "py-2 px-4 rounded",
        {
          "text-danger bg-danger/10": status === "error",
          "text-success bg-success/10": status === "success",
          "text-warning bg-warning/10": status === "warning",
        },
      ]}
    >
      <Slot />
    </div>
  );
});
