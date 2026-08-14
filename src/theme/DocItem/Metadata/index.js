import Head from '@docusaurus/Head';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {PageMetadata} from '@docusaurus/theme-common';
import {useTitleFormatter} from '@docusaurus/theme-common/internal';

function toIsoDate(value) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

export default function DocItemMetadata() {
  const {metadata, frontMatter, assets} = useDoc();
  const titleFormatter = useTitleFormatter();
  const formattedTitle = titleFormatter.format(metadata.title);
  const publishedAt = toIsoDate(frontMatter.date);
  const modifiedAt = toIsoDate(metadata.lastUpdatedAt);

  return (
    <>
      <PageMetadata
        title={metadata.title}
        description={metadata.description}
        keywords={frontMatter.keywords}
        image={assets.image ?? frontMatter.image}
      />
      <Head>
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={metadata.description} />
        <meta property="og:type" content="article" />
        {publishedAt && <meta property="article:published_time" content={publishedAt} />}
        {modifiedAt && <meta property="article:modified_time" content={modifiedAt} />}
      </Head>
    </>
  );
}
