import React from "react";
import Link from "next/link";
import { ComponentsListProps } from "../interfaces/ComponentsList";

const MainNav: React.FC<ComponentsListProps> = ({ componentsList }) => (
  <nav>
    <ul>
      <li key="overview">
        <Link href="/components">
          <a>Overview</a>
        </Link>
      </li>
      {componentsList?.map((listItem) => {
        if (listItem.id.toLowerCase() !== "index") {
          return (
            <li key={listItem.id}>
              <Link href={`/components/${listItem.id.toLowerCase()}`}>
                <a>{listItem.id}</a>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  </nav>
);

export { MainNav };
