import Script from 'next/script';
import React from 'react';

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <Script strategy="afterInteractive" id="gtag">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
