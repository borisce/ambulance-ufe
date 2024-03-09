import { newE2EPage } from '@stencil/core/testing';

describe('boce-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-ambulance-wl-editor></boce-ambulance-wl-editor>');

    const element = await page.find('boce-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
