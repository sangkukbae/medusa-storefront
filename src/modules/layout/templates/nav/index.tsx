import { Suspense } from "react"

import { getCollectionsList, listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import LeftMenu from "@modules/layout/components/left-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  const collections = await getCollectionsList().then(({ collections }) =>
    collections.sort(
      (a, b) => (a.metadata?.order as number) - (b.metadata?.order as number)
    )
  )

  return (
    <div className="sticky inset-x-0 top-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-white border-b border-ui-border-base">
        <nav className="flex items-center justify-between w-full h-full content-container txt-xsmall-plus text-ui-fg-subtle text-small-regular">
          <div className="flex items-center flex-1 h-full basis-0">
            {/* <Menus collections={collections} /> */}
            <LeftMenu regions={regions} collections={collections} />
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-xl uppercase hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              Heavenly
            </LocalizedClientLink>
          </div>

          <div className="flex items-center justify-end flex-1 h-full gap-x-6 basis-0">
            <div className="items-center hidden h-full small:flex gap-x-6">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="text-sm hover:underline"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2 text-sm hover:underline"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
