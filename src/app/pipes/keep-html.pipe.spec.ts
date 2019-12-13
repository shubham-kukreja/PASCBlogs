import { EscapeHtmlPipe } from './keep-html.pipe';

describe('KeepHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new EscapeHtmlPipe(1);
    expect(pipe).toBeTruthy();
  });
});
