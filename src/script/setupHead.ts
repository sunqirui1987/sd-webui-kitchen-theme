export default () => {
  // favicon
  const favicon: HTMLLinkElement = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href =
    'https://svgsilh.com/svg/304967.svg';
  document.getElementsByTagName('head')[0].appendChild(favicon);
};
