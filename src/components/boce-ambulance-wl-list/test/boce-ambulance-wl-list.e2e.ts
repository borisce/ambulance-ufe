import { newE2EPage } from '@stencil/core/testing';

describe('boce-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-ambulance-wl-list></boce-ambulance-wl-list>');

    const element = await page.find('boce-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
