/*!
 * PatternFly Elements: PfeTabs 1.3.2
 * @license
 * Copyright 2021 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/

import PFElement from "../../pfelement/dist/pfelement.js";

const TAB_CONTENT_MUTATION_CONFIG = {
  characterData: true,
  childList: true,
  subtree: true
};
class PfeTab extends PFElement {

  // Injected at build-time
  static get version() {
    return "1.3.2";
  }

  // Injected at build-time
  get html() {
    return `
<style>:host{text-align:left;position:relative;display:block;margin:0 0 calc(1px * -1);margin:var(--pfe-tabs__tab--Margin,0 0 calc(var(--pfe-theme--ui--border-width,1px) * -1));padding:1rem calc(1rem * 2) 1rem calc(1rem * 2);padding:var(--pfe-tabs__tab--PaddingTop,var(--pfe-theme--container-padding,1rem)) var(--pfe-tabs__tab--PaddingRight,calc(var(--pfe-theme--container-padding,1rem) * 2)) var(--pfe-tabs__tab--PaddingBottom,var(--pfe-theme--container-padding,1rem)) var(--pfe-tabs__tab--PaddingLeft,calc(var(--pfe-theme--container-padding,1rem) * 2));border-style:solid;border-style:var(--pfe-theme--ui--border-style,solid);border-width:1px;border-width:var(--pfe-theme--ui--border-width,1px);border-color:transparent;border-bottom-width:3px;border-bottom-width:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px));background-color:transparent;background-color:var(--pfe-tabs--BackgroundColor,transparent);cursor:pointer;text-align:center;text-align:var(--pfe-tabs__tab--TextAlign,center);text-transform:none;text-transform:var(--pfe-tabs__tab--TextTransform,none);font-family:"Red Hat Text",RedHatText,Overpass,Overpass,Arial,sans-serif;font-family:var(--pfe-theme--font-family, "Red Hat Text", "RedHatText", "Overpass", Overpass, Arial, sans-serif);font-weight:400;font-weight:var(--pfe-theme--font-weight--normal,400);font-size:1rem;font-size:var(--pfe-tabs__tab--FontSize,var(--pfe-theme--font-size,1rem))}:host #tab{display:inline-block}:host #tab *{font-size:inherit;font-weight:inherit;margin:0;color:#6a6e73;color:var(--pfe-tabs--Color,var(--pfe-theme--color--text--muted,#6a6e73))}:host([aria-selected=true]){border-bottom-color:#06c;border-bottom-color:var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)))}:host([aria-selected=true]) #tab *{color:#151515;color:var(--pfe-tabs--Color--focus,var(--pfe-tabs--focus,var(--pfe-theme--color--text,#151515)))}:host(:active),:host(:focus),:host(:hover){border-bottom-color:#b8bbbe;border-bottom-color:var(--pfe-tabs--BorderColor--hover,#b8bbbe)}:host(:active) #tab *,:host(:focus) #tab *,:host(:hover) #tab *{color:#151515;color:var(--pfe-tabs--Color--focus,var(--pfe-tabs--focus,var(--pfe-theme--color--text,#151515)))}:host([variant=earth][vertical]) #tab{display:inline-block}@media screen and (min-width:768px){:host([vertical]){border-bottom-color:transparent;border-bottom-width:0;border-left-color:#d2d2d2;border-left-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-left-width:1px;border-left-width:var(--pfe-theme--ui--border-width,1px);padding:1rem;padding:var(--pfe-theme--container-padding,1rem);--pfe-tabs--Margin:0 calc(var(--pfe-theme--ui--border-width, 1px) * -1) 0 0}:host([vertical][aria-selected=true]){border-left-color:#06c;border-left-color:var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)));border-left-width:3px}:host([vertical]:not([variant=earth])){border-left:1px solid #d2d2d2;border-left:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2);text-align:left!important}:host([vertical]:not([variant=earth])[aria-selected=true]){border-right:3px solid transparent;border-right:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) transparent;border-left:3px solid #06c;border-left:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)));padding-left:calc(1rem - 2px);padding-left:calc(var(--pfe-theme--container-padding,1rem) - 2px)}:host([vertical]:not([variant=earth])[aria-selected=false]){border-right:3px solid transparent;border-right:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) transparent}:host([vertical]:not([variant=earth])[aria-selected=false]:hover){border-right:3px solid transparent;border-right:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) transparent;border-bottom:0;border-left:3px solid #b8bbbe;border-left:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) var(--pfe-tabs--BorderColor--hover,#b8bbbe);padding-left:calc(1rem - 2px);padding-left:calc(var(--pfe-theme--container-padding,1rem) - 2px)}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([variant=earth]){background-color:#f0f0f0;color:#6a6e73}}:host(:not([vertical])[variant=earth]:not([aria-selected=true]):first-of-type){border-left-color:transparent}:host(:not([vertical])[variant=earth]:not([aria-selected=true]):last-of-type){border-right-color:transparent}:host([variant=earth][aria-selected=false]){background-color:#f0f0f0;background-color:var(--pfe-tabs--BackgroundColor--inactive,var(--pfe-theme--color--surface--lighter,#f0f0f0));border-color:#d2d2d2;border-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-top-width:3px;border-top-width:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px));border-top-color:transparent;border-bottom-color:#b8bbbe;border-bottom-color:var(--pfe-tabs--BorderColor--hover,#b8bbbe);border-bottom-width:1px;border-bottom-width:var(--pfe-theme--ui--border-width,1px)}:host([variant=earth][aria-selected=false]:hover){border-top-color:#b8bbbe;border-top-color:var(--pfe-tabs--BorderColor--hover,#b8bbbe)}:host([variant=earth][aria-selected=true]){background-color:#fff;background-color:var(--pfe-tabs--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));border-bottom:0;border-left-color:#d2d2d2;border-left-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-right-color:#d2d2d2;border-right-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-top:solid #06c 3px;border-top:solid var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c))) var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([variant=earth][aria-selected=true]){color:#6a6e73;background-color:#fff;border-left:1px solid #d2d2d2;border-top:3px solid #06c;border-top:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) solid var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)));border-bottom:0}}:host([variant=earth][aria-selected=true]:last-of-type){border-right:1px solid #d2d2d2;border-right:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2)}@media screen and (min-width:768px){:host([vertical][variant=earth]){border-top:1px solid #d2d2d2;border-top:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2);border-bottom:1px solid #d2d2d2;border-bottom:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2);border-left-width:3px;border-left-width:var(--pfe-theme--ui--border-width--active,3px);text-align:left}:host([vertical][variant=earth][aria-selected=false]:first-of-type){border-top-color:transparent;border-left:3px solid transparent;border-left:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) transparent}:host([vertical][variant=earth][aria-selected=false]:last-of-type){border-bottom-color:transparent}:host([vertical][variant=earth][aria-selected=false]){border-right:0;border-bottom-color:transparent;border-left-color:transparent}:host([vertical][variant=earth][aria-selected=false]:hover){border-left-color:#b8bbbe;border-left-color:var(--pfe-tabs--BorderColor--hover,#b8bbbe);border-top-color:#d2d2d2;border-top-color:var(--pfe-theme--color--surface--border,#d2d2d2)}:host([vertical][variant=earth][aria-selected=false]:first-of-type:hover){border-left-color:#d2d2d2;border-left-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-top-color:transparent}:host([vertical][variant=earth][aria-selected=true]){border-top-color:#d2d2d2;border-top-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-left-color:#06c;border-left-color:var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)));border-right-color:transparent;margin-right:-1px}}:host([on=dark][variant=earth]){--pfe-tabs--Color:var(--pfe-theme--color--text--on-dark, #fff);--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-dark, #fff);border-right-color:#6a6e73;border-right-color:var(--pfe-theme--color--surface--border--darker,#6a6e73);border-left-color:#6a6e73;border-left-color:var(--pfe-theme--color--surface--border--darker,#6a6e73)}:host([on=dark][variant=earth][aria-selected=false]){--pfe-tabs--Color:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-tabs--BackgroundColor--inactive:var(--pfe-theme--color--surface--darker, #3c3f42)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([on=dark][variant=earth][aria-selected=false]){background-color:#fff!important;background-color:var(--pfe-theme--color--surface--lightest,#fff)!important}:host([on=dark][variant=earth][aria-selected=false]) #tab *{color:#151515!important}}:host([on=dark][variant=earth][aria-selected=true]){--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-dark, #fff);--pfe-tabs--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515)}:host([variant=earth][on=saturated][aria-selected=false]){--pfe-tabs--BackgroundColor:var(--pfe-theme--color--surface--lighter, #f0f0f0)}:host([variant=earth][on=saturated][aria-selected=true]){--pfe-tabs--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff)}:host([on=saturated]:not([variant=earth])){--pfe-tabs--Color:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-saturated, #fff)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([on=saturated]:not([variant=earth])){background-color:transparent}:host([on=saturated]:not([variant=earth])) #tab *{color:#151515!important}}:host([on=saturated]:not([variant=earth])[aria-selected=true]){--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-tabs--BorderColor:var(--pfe-theme--color--ui-base--on-saturated, #fff)}:host([on=saturated]:not([variant=earth])[aria-selected=false]){--pfe-tabs--Color:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2)}:host([on=saturated]:not([variant=earth])[aria-selected=false]:hover){--pfe-tabs--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([on=saturated]:not([variant=earth])[aria-selected=true]:last-of-type){border-left:0!important}}:host([on=dark]:not([variant=earth])){--pfe-tabs--Color:var(--pfe-theme--color--text--on-dark, #fff);--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-dark, #fff)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([on=dark]:not([variant=earth])) #tab *{color:#151515!important}}:host([on=dark]:not([variant=earth])[aria-selected=false]){--pfe-tabs--Color:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2)}:host([on=dark]:not([variant=earth])[aria-selected=false]:hover){--pfe-tabs--BorderColor:var(--pfe-theme--color--surface--lightest, #fff);border-bottom-color:#f0f0f0;border-bottom-color:var(--pfe-theme--color--surface--base,#f0f0f0);--pfe-tabs__tab--BorderBottom:var(--pfe-tabs--BorderWidth, var(--pfe-theme--ui--border-width--active, 3px)) var(--pfe-theme--ui--border-style, solid) var(--pfe-theme--color--surface--border, #d2d2d2)}:host([on=dark]:not([variant=earth])[vertical][aria-selected=false]:hover){border-bottom-color:transparent} /*# sourceMappingURL=pfe-tab.min.css.map */</style>
<span id="tab"></span>`;
  }

  static get tag() {
    return "pfe-tab";
  }

  get styleUrl() {
    return "pfe-tab.scss";
  }

  get templateUrl() {
    return "pfe-tab.html";
  }

  static get properties() {
    return {
      selected: {
        title: "Selected tab",
        type: String,
        default: "false",
        attr: "aria-selected",
        values: ["true", "false"],
        observer: "_selectedHandler"
      },
      controls: {
        title: "Connected panel ID",
        type: String,
        attr: "aria-controls"
      },
      role: {
        type: String,
        default: "tab"
      },
      tabindex: {
        type: Number,
        default: -1
      },
      variant: {
        title: "Variant",
        type: String,
        enum: ["wind", "earth"]
      },
      // @TODO: Deprecated in 1.0
      oldPfeId: {
        type: String,
        attr: "pfe-id",
        observer: "_oldPfeIdChanged"
      }
    };
  }

  // Declare the type of this component
  static get PfeType() {
    return PFElement.PfeTypes.Content;
  }

  constructor() {
    super(PfeTab, { type: PfeTab.PfeType });

    this._tabItem;
    this._init = this._init.bind(this);
    this._setTabContent = this._setTabContent.bind(this);
    this._observer = new MutationObserver(this._init);
  }

  connectedCallback() {
    super.connectedCallback();

    this._tabItem = this.shadowRoot.querySelector(`#tab`);

    if (this.hasLightDOM()) this._init();

    this._observer.observe(this, TAB_CONTENT_MUTATION_CONFIG);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer.disconnect();
  }

  _selectedHandler() {
    if (this.selected === "true") this.tabindex = 0;
    else this.tabindex = -1;
  }

  _oldPfeIdChanged(oldVal, newVal) {
    if (!this.id) this.id = newVal;
  }

  _init() {
    if (window.ShadyCSS) this._observer.disconnect();

    // Force role to be set to tab
    this.role = "tab";

    // Copy the tab content into the template
    this._setTabContent();

    // If an ID is not defined, generate a random one
    if (!this.id) this.id = this.randomId;

    if (window.ShadyCSS) this._observer.observe(this, TAB_CONTENT_MUTATION_CONFIG);
  }

  _setTabContent() {
    // Copy the tab content into the template
    const label = this.textContent.trim().replace(/\s+/g, " ");

    if (!label) {
      this.warn(`There does not appear to be any content in the tab region.`);
      return;
    }

    let semantics;
    // Get the semantics of the content
    if (this.hasLightDOM()) {
      // We only care about the first child that is a tag
      if (this.firstElementChild && this.firstElementChild.tagName.match(/^H[1-6]/)) {
        semantics = this.firstElementChild.tagName.toLowerCase();
      }
    }

    // Create an h-level tag for the shadow tab, default h3
    let heading = document.createElement("h3");

    // Use the provided semantics if provided
    if (semantics) heading = document.createElement(semantics);

    // Assign the label content to the new heading
    heading.textContent = label;

    // Attach the heading to the tabItem
    if (this._tabItem) {
      this._tabItem.innerHTML = "";
      this._tabItem.appendChild(heading);
    }
  }
}

export default PfeTab;
