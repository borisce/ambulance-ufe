import { newSpecPage } from '@stencil/core/testing';
import { BoceAmbulanceWlList } from '../boce-ambulance-wl-list';

describe('boce-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceAmbulanceWlList],
      html: `<boce-ambulance-wl-list></boce-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-ambulance-wl-list>
    `);
  });
});
