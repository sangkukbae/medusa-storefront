"use client"

import { isActive } from "@lib/util/isActive"
import { ProductCollection } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { usePathname } from "next/navigation"

const Menus = ({ collections }: { collections: ProductCollection[] }) => {
  const path = usePathname()

  return (
    <>
      {collections && collections.length > 0 && (
        <ul className="flex items-center h-full gap-x-4">
          {collections
            ?.sort(
              (a, b) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map((c) => (
              <li key={c.id}>
                <LocalizedClientLink
                  className={clx("text-sm hover:underline", {
                    "font-bold underline": isActive(c.title, path),
                  })}
                  href={`/collections/${c.handle}`}
                >
                  {c.title}
                </LocalizedClientLink>
              </li>
            ))}
        </ul>
      )}
    </>
  )
}

export default Menus
