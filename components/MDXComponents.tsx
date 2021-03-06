/* eslint-disable react/display-name */
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from './Image';
import CustomLink from './Link';
import Pre from './Pre';

export const MDXComponents = {
  Image,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../src/layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
