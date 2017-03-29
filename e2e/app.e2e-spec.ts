import { TestRouterPage } from './app.po';

describe('test-router App', () => {
  let page: TestRouterPage;

  beforeEach(() => {
    page = new TestRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
