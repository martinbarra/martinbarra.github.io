/// <reference types="astro/astro-jsx" />

declare global {
  namespace JSX {
    type Element = astroHTML.JSX.Element;
    type HTMLAttributes = astroHTML.JSX.HTMLAttributes;
    type IntrinsicElements = astroHTML.JSX.IntrinsicElements;
  }
}

export {};
