
hexo.extend.helper.register('url_data', args => {
  let data = [];

  args.data.forEach(element => {
    data.push(element.name.replace(new RegExp(' ', 'g'), '-'));
  });

  return data.join('/').toLowerCase();
});
hexo.extend.helper.register('first_data', args => {
  let data = args.data[0] ? args.data[0].name : '';
  return encodeURIComponent(data.replace(new RegExp(' ', 'g'), '-').toLowerCase());
});
hexo.extend.helper.register('url_title', args => {
  let original = args;
  return original.replace(new RegExp(' ', 'g'), '-').toLowerCase();
});