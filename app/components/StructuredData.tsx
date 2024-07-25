// components/StructuredData.tsx
import React from "react";
import Head from "next/head";

interface StructuredDataProps {
  data: Record<string, any>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default StructuredData;
