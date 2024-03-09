import { newE2EPage } from '@stencil/core/testing';

describe('boce-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-ambulance-wl-app></boce-ambulance-wl-app>');

    const element = await page.find('boce-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
