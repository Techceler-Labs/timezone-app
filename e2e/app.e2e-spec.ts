import { TimezoneAppPage } from './app.po';

describe('timezone-app App', () => {
  let page: TimezoneAppPage;

  beforeEach(() => {
    page = new TimezoneAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
