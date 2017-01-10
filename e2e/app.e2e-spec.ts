import { ElankumaranResumePage } from './app.po';

describe('elankumaran-resume App', function() {
  let page: ElankumaranResumePage;

  beforeEach(() => {
    page = new ElankumaranResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
