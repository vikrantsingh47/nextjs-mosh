'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const LazyLoadedComponent = dynamic(() => import('./LazyLoadedComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: props) => {
  const [lazyLoad, setLazyLoad] = useState(false);
  return (
    <>
      <div>
        productPage {slug} {sortOrder}
      </div>
      <div>
        <button
          className="btn-primary btn-outline"
          onClick={() => setLazyLoad(true)}
        >
          click to lazy load component
        </button>
      </div>
      {lazyLoad && <LazyLoadedComponent />}
      <button
        className="btn-primary btn-outline mt-3"
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
      >
        click to lazy load lodash library
      </button>
    </>
  );
};

export default ProductPage;
