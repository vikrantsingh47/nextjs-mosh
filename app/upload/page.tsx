'use client';

import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface cloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="image" />
      )}
      <CldUploadWidget
        uploadPreset="hm4ojmvc"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          styles: {},
        }}
        onSuccess={(result, { widget }) => {
          if (result.event !== 'success') {
            return;
          }
          const info = result.info as cloudinaryResult;
          setPublicId(info.public_id);
          // widget.close();
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
