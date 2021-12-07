import Script from 'next/script';
import 'aframe';
import Head from 'next/head';

const ArViewer = () => {
  return (
    <div>
      <Head></Head>
      <Script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></Script>
      {/* <Script src="https://aframe.io/releases/1.0.4/aframe.min.js"></Script> */}
      {/* <Script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></Script> */}
      <div>
        <a-scene
          vr-mode-ui="enabled: false"
          embedded
          arjs="sourceType: webcam; debugUIEnabled: false;"
        >
          <a-text
            value="This content will always face you."
            look-at="[gps-camera]"
            scale="50 50 50"
          ></a-text>
          <a-camera gps-camera rotation-reader>
            {' '}
          </a-camera>
        </a-scene>
      </div>
    </div>
  );
};

export default ArViewer;
