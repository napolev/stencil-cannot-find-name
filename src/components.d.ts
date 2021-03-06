/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface CustomContainer {

    }
  }

  interface HTMLCustomContainerElement extends StencilComponents.CustomContainer, HTMLStencilElement {}

  var HTMLCustomContainerElement: {
    prototype: HTMLCustomContainerElement;
    new (): HTMLCustomContainerElement;
  };
  interface HTMLElementTagNameMap {
    'custom-container': HTMLCustomContainerElement;
  }
  interface ElementTagNameMap {
    'custom-container': HTMLCustomContainerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'custom-container': JSXElements.CustomContainerAttributes;
    }
  }
  namespace JSXElements {
    export interface CustomContainerAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface CustomDetails {
      'getDefaultKnobEPosition': () => Anchor;
      'sayHelloWorldOnConsole': () => void;
    }
  }

  interface HTMLCustomDetailsElement extends StencilComponents.CustomDetails, HTMLStencilElement {}

  var HTMLCustomDetailsElement: {
    prototype: HTMLCustomDetailsElement;
    new (): HTMLCustomDetailsElement;
  };
  interface HTMLElementTagNameMap {
    'custom-details': HTMLCustomDetailsElement;
  }
  interface ElementTagNameMap {
    'custom-details': HTMLCustomDetailsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'custom-details': JSXElements.CustomDetailsAttributes;
    }
  }
  namespace JSXElements {
    export interface CustomDetailsAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;