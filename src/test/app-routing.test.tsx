import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { businessPages } from "@/lib/page-content";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(Object.keys(businessPages))("matches the direct URL /%s", (slug) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes(`/${slug}`);
    expect(matches.at(-1)?.routeId).toBe("/$slug");
  });

  it("defines unique metadata for every non-home page", () => {
    const pages = Object.values(businessPages);
    expect(pages).toHaveLength(19);
    expect(new Set(pages.map((page) => page.title)).size).toBe(pages.length);
    expect(pages.every((page) => page.h1.length > 4 && page.description.length > 70)).toBe(true);
  });
});
