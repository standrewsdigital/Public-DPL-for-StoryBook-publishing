export const formatHtmlSource = async (source) => {
  const prettier = await import('prettier/standalone');
  const prettierPluginHtml = await import('prettier/plugins/html');

  return prettier.format(source, {
    parser: 'html',
    plugins: [prettierPluginHtml],
  });
};

export const extractComponentSource = (selector) => async (source) => {
  const parsedSource = new DOMParser().parseFromString(source, 'text/html');
  const component = parsedSource.querySelector(selector);

  return formatHtmlSource(component?.outerHTML ?? source);
};