import { MusicEqualizerPage } from './app.po';

describe('music-equalizer App', () => {
  let page: MusicEqualizerPage;

  beforeEach(() => {
    page = new MusicEqualizerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
