import { createFileRoute } from "@tanstack/react-router";

import { RolePage } from "@/components/roles/RolePage";
import { accountantsRole } from "@/data/roles/accountants";

export const Route = createFileRoute(
  "/hire-latam-accountants"
)({
  component: HireLatamAccountants,
});

function HireLatamAccountants() {
  return (
    <RolePage config={accountantsRole} />
  );
}