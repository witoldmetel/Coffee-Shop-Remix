import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

import { LanguageSwitcher } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Coffee Shop" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{t("hi")}</h1>
      <LanguageSwitcher />
    </div>
  );
}
