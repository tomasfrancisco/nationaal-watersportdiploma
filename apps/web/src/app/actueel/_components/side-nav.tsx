"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import SideNav from "~/app/_components/style/side-nav";

export const newsCategories = [
  {
    label: "Consument",
    param: "consument",
  },
  {
    label: "Achterban",
    param: "achterban",
  },
  {
    label: "Vereniging",
    param: "vereniging",
  },
  {
    label: "Persberichten",
    param: "pers",
  },
];

export default function SideNavActueel() {
  return (
    <SideNav
      label="Filter"
      shouldScroll={false}
      items={newsCategories.map((page) => ({
        isActive(ctx) {
          return ctx.searchParams.getAll("filter").includes(page.param);
        },
        label: ({ isActive }) => (
          <div className="flex items-center justify-between">
            {page.label}
            {isActive ? <XMarkIcon className="w-4 h-4" /> : null}
          </div>
        ),
        href: ({ isActive, searchParams }) => {
          const baseUrl = `/actueel`;

          const newParams = new URLSearchParams(searchParams.toString());

          if (isActive) {
            const filteredParams = newParams
              .getAll("filter")
              .filter((param) => param !== page.param);
            newParams.delete("filter");
            filteredParams.forEach((param) =>
              newParams.append("filter", param),
            );
          } else {
            newParams.append("filter", page.param);
          }

          return `${baseUrl}?${newParams.toString()}`;
        },
      }))}
      className="w-full sm:w-[18rem]"
    />
  );
}
