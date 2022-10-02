interface loaderFunction {
  ();
}

interface componentProps {
  Name: string;
  tagName: string;
  loader: loaderFunction;
}

const components: componentProps[] = [
  {
    Name: 'IconSvg',
    tagName: 'icon-svg',
    loader: () => import('./icons/IconSvg.vue'),
  },
];

export default components;
