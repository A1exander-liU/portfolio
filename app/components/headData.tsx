import React from "react";

export default function HeadData({ page }: { page: string }) {
  return (
    <>
      <title>{page} | Alexander Liu</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
}
