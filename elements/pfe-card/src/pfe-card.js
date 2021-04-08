// Import polyfills: Object.keys
import "./polyfills--pfe-card.js";

import PFElement from "../../pfelement/dist/pfelement.js";

class PfeCard extends PFElement {
  static get tag() {
    return "pfe-card";
  }

  static get meta() {
    return {
      title: "Card",
      description:
        "This element creates a header, body, and footer region in which to place content or other components."
    };
  }

  get templateUrl() {
    return "pfe-card.html";
  }

  get styleUrl() {
    return "pfe-card.scss";
  }

  // @TODO: How do we handle attributes for slotted content?
  static get properties() {
    return {
      color: {
        title: "Background color",
        type: String,
        values: ["lightest", "base", "darker", "darkest", "complement", "accent"],
        default: "base",
        observer: "_colorChanged"
      },
      // @TODO: Deprecate property in 1.0
      oldColor: {
        type: String,
        prefix: false,
        alias: "color",
        attr: "pfe-color"
      },
      imgSrc: {
        title: "Background image",
        type: String,
        observer: "_imageSrcChanged"
      },
      // @TODO: Deprecate property in 1.0
      pfeImgSrc: {
        type: String,
        prefix: false,
        alias: "imgSrc"
      },
      size: {
        title: "Padding size",
        type: String,
        values: ["small"]
      },
      // @TODO: Deprecate property in 1.0
      pfeSize: {
        type: String,
        values: ["small"],
        prefix: false,
        alias: "size"
      },
      border: {
        title: "Border",
        type: Boolean
      },
      // @TODO: Deprecate property in 1.0
      oldBorder: {
        alias: "border",
        attr: "pfe-border"
      }
    };
  }

  static get slots() {
    return {
      header: {
        title: "Header",
        type: "array",
        namedSlot: true,
        maxItems: 3,
        items: {
          $ref: "raw"
        }
      },
      body: {
        title: "Body",
        type: "array",
        namedSlot: false,
        items: {
          $ref: "raw"
        }
      },
      footer: {
        title: "Footer",
        type: "array",
        namedSlot: true,
        maxItems: 3,
        items: {
          oneOf: [
            {
              $ref: "pfe-cta"
            },
            {
              $ref: "raw"
            }
          ]
        }
      }
    };
  }

  // Declare the type of this component
  static get PfeType() {
    return PFElement.PfeTypes.Container;
  }

  constructor() {
    super(PfeCard, {
      type: PfeCard.PfeType,
      delayRender: true
    });

    this._init = this._init.bind(this);
    this._colorChanged = this._colorChanged.bind(this);
    this._imageSrcChanged = this._imageSrcChanged.bind(this);

    this._observer = new MutationObserver(this._init);
  }

  connectedCallback() {
    super.connectedCallback();

    this._init();

    this._observer.observe(this, {
      childList: true,
      subtree: true
    });
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  _init() {
    this._observer.disconnect();

    // If the general padding property is set, split it out and set it on the card
    // Why? Padding needs to be used distinctly in each region, separate from each other
    this.getExplicitProps("padding", ["padding-top", "padding-right", "padding-bottom", "padding-left"]);

    // Get the last child in each slot and apply an attribute to it
    // Why? This allows us to apply last-child styles to light DOM
    // @TODO Is a [last] attribute useful for other components?
    // Polyfill
    Object.keys(this.slots).map(region => {
      let hide = 0;
      let slot = this.slots[region];
      if (slot.nodes && slot.nodes.length > 0) {
        let lastIdx = slot.nodes.length - 1;
        let lastNode = slot.nodes[lastIdx];
        // If this is the last node in the region, apply the last attribute
        if (lastNode) lastNode.setAttribute("last", "");
        // If all nodes in a region have a hidden attribute
        slot.nodes.forEach(node => {
          if (node.hasAttribute("hidden")) {
            hide += 1;
          }
        });
        if (hide === slot.nodes.length) {
          this.removeAttribute(`has_${region}`);
        } else {
          this.setAttribute(`has_${region}`, "");
        }
      }
    });

    // Note: need to re-render if the markup changes to pick up template changes
    this.render();

    this._observer.observe(this, {
      childList: true,
      subtree: true
    });
  }

  // If the color changes, update the context
  _colorChanged(oldValue, newValue) {
    if (oldValue === newValue) return;

    // Update the context
    this.resetContext();
  }

  // Update the background image
  _imageSrcChanged(oldValue, newValue) {
    if (oldValue === newValue) return;

    // Set the image as the background image
    this.style.backgroundImage = newValue ? `url('${newValue}')` : ``;
  }
}

PFElement.create(PfeCard);

export { PfeCard as default };
