import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pluto</title>
        <meta name="description" content="A superset of Lua 5.4 with a focus on general-purpose programming." />
        <meta property="og:title" content="Pluto" />
        <meta property="og:description" content="A superset of Lua 5.4 with a focus on general-purpose programming." />
        <meta name="twitter:title" content="Pluto" />
        <meta name="twitter:description" content="A superset of Lua 5.4 with a focus on general-purpose programming." />
      </Head>
      <Redirect to="/docs/Introduction" />
    </>
  );
}
