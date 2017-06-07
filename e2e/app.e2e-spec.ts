import { NgAngrularPage } from './app.po';

describe('ng-angrular App', function() {
  let page: NgAngrularPage;

  beforeEach(() => {
    page = new NgAngrularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
