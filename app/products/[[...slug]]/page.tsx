import React from 'react';

interface props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const productPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: props) => {
  return (
    <div>
      productPage {slug} {sortOrder}
    </div>
  );
};

export default productPage;
