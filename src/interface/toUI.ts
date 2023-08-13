export type ComponentTextData = {
  characters: string;
  fontName: FontName | typeof figma.mixed;
  fontSize: number | typeof figma.mixed;
  fontWeight: number | typeof figma.mixed;
  fills: readonly Paint[] | typeof figma.mixed;
};

type HTMLTag = "ul" | "li" | "div" | "section" | "span" | "h1" | "h2" | "h3";

class Component {
  #tag: HTMLTag;
  #id: string;
  #name: string;
  #data: ComponentTextData[];
  #ui?: string;
  constructor(
    tag: HTMLTag,
    id: string,
    name: string,
    data: ComponentTextData[]
  ) {
    this.#tag = tag;
    this.#id = id;
    this.#name = name;
    this.#data = data;
    this.setUI();
  }

  setUI(children?: Component) {
    this.#ui = `<${this.#tag} id=${this.#id}></${this.#tag}>`;
  }

  getUI() {
    return this.#ui;
  }

  appendChild(component: Component) {
    this.setUI(component);
  }
}

export default Component;
