import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { OpenWc } from '../src/example/OpenWc.js';
import '../src/open-wc.js';

describe('OpenWc', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<OpenWc>(html`<open-wc></open-wc>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<OpenWc>(html`<open-wc></open-wc>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(7);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<OpenWc>(html`<open-wc title="attribute title"></open-wc>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<OpenWc>(html`<open-wc></open-wc>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
