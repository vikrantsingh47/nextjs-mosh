import React from 'react';

interface props {
  params: { id: number; photoId: number };
}

const photoPage = ({ params: { id, photoId } }: props) => {
  return (
    <div>
      photoPage {id} {photoId}
    </div>
  );
};

export default photoPage;
