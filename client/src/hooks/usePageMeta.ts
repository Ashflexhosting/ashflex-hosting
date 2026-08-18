import { useEffect } from "react";

export function usePageMeta(options: { title?: string; description?: string }) {
  useEffect(() => {
    const defaultTitle = "Ashflex Web Design — Premium Web Design & Development Agency";
    const defaultDescription =
      "Ashflex is a premium web design agency delivering stunning, high-converting websites. 246+ projects, 94% client satisfaction, 10+ years of experience.";

    const title = options.title ? `${options.title} | Ashflex Web Design` : defaultTitle;
    const description = options.description || defaultDescription;

    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property") => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description, "name");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", title, "name");
    setMeta("twitter:description", description, "name");

    // Update canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);
  }, [options.title, options.description]);
}
