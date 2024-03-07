import { newSpecPage } from '@stencil/core/testing';
import { BoceAmbulanceWlList } from '../boce-ambulance-wl-list';

describe('boce-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceAmbulanceWlList],
      html: `<boce-ambulance-wl-list></boce-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as BoceAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

   const items = page.root.shadowRoot.querySelectorAll("md-list-item");
   expect(items.length).toEqual(expectedPatients);
  });
});
