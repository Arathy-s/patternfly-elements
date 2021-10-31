import '@patternfly/pfe-band';
import '@patternfly/pfe-content-set';

const root = document.querySelector('[data-demo="pfe-content-set"]')?.shadowRoot ?? document;

const btn = root.querySelector('#addHeaderAndPanelBtn');
const btn2 = root.querySelector('#addCharBtn');
const btn3 = root.querySelector('#addNodeBtn');
const pfeContentSet = root.querySelector('#dynamic');

btn.addEventListener('click', function() {
  const fragment = document.createDocumentFragment();
  const count = pfeContentSet.querySelectorAll('[pfe-content-set--header]').length + 1;

  const header = document.createElement('h4');
  header.setAttribute('pfe-content-set--header', true);
  header.textContent = `Heading ${count}`;

  const panel = document.createElement('div');
  panel.setAttribute('pfe-content-set--panel', true);
  panel.textContent = `New panel ${count}`;

  fragment.appendChild(header);
  fragment.appendChild(panel);
  pfeContentSet.appendChild(fragment);
});

btn2.addEventListener('click', function() {
  const panel = pfeContentSet.querySelector('[pfe-content-set--panel]');
  panel.innerHTML = `Inject new text content. ${panel.innerHTML}`;
});

btn3.addEventListener('click', function() {
  const panel = pfeContentSet.querySelector('[pfe-content-set--panel]');
  panel.innerHTML = `<p class="pfe-text--xl">Add new node elements.</p>${panel.innerHTML}`;
});