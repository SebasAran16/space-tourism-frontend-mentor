import Head from "next/head";
import React from "react";

export default function HeadComponent() {
  return (
    <>
      <Head>
        <title>My Space Tourism Project</title>
        <meta
          name="description"
          content="This is a project made to improve my skills with NextJs and use previous skills learned"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/space.png" />
      </Head>
    </>
  );
}
