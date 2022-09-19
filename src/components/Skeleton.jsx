import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="134" cy="120" r="117" />
    <circle cx="84" cy="85" r="3" />
    <rect x="0" y="248" rx="8" ry="8" width="280" height="27" />
    <rect x="0" y="291" rx="8" ry="8" width="280" height="88" />
    <rect x="0" y="398" rx="8" ry="8" width="95" height="30" />
    <rect x="125" y="389" rx="8" ry="8" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
