import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

export const formatHighLight = (contents: string) => {
  const $ = cheerio.load(contents);
  $('pre code').each((_, elm) => {
    const res = hljs.highlightAuto($(elm).text());
    $(elm).html(res.value);
    $(elm).addClass('hljs');
  });
  return $.html();
};
