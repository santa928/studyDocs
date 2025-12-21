// Mermaid support for Material for MkDocs (works with navigation.instant)
// Ref: Mermaid is loaded via extra_javascript in mkdocs.yml

function initMermaid() {
  if (typeof mermaid === "undefined") return;
  mermaid.initialize({ startOnLoad: false });
  mermaid.init(undefined, document.querySelectorAll(".mermaid"));
}

// Initial load
window.addEventListener("DOMContentLoaded", initMermaid);

// Re-init on instant navigation (Material exposes document$)
if (typeof document$ !== "undefined") {
  document$.subscribe(() => initMermaid());
}


