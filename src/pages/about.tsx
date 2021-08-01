import { MDXLayoutRenderer } from '../../components/MDXComponents';
import { getFileBySlug } from '../lib/mdx';

const DEFAULT_LAYOUT = `AuthorLayout`;

export async function getStaticProps({ locale }) {
  const authorDetails = await getFileBySlug(`authors`, [`default`]);
  return {
    props: {
      authorDetails,
    },
  };
}

const About = ({ authorDetails }) => {
  const { mdxSource, frontMatter } = authorDetails;
  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  );
};

export default About;
