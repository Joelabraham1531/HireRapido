import { createFileRoute } from "@tanstack/react-router";

import { RolePage } from "@/components/roles/RolePage";
import { accountantsRole } from "@/data/roles/accountants";

export const Route = createFileRoute(
  "/es/hire-latam-accountants"
)({
  component: HireLatamAccountantsSpanish,
});

function HireLatamAccountantsSpanish() {
  return (
    <RolePage
      config={accountantsRole}
      language="es"
    />
  );
}