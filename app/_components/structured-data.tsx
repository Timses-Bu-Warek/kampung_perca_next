// components/StructuredData.tsx

import Head from 'next/head';
import type React from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        type="application/ld+json"
      />
    </Head>
  );
};

export default StructuredData;
