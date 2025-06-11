import React from 'react';

// Simplified representation of bi-box-seam
const BoxSeamIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5.55 8 6.433 14.404 4 11.75 2.539zM15 4.667l-2.596-.94L8 5.433 4.596 3.727 2 4.667v6.666l2.596.94L8 10.567l3.404.94L14 11.333V4.667zM1.596 3.727L8 1.433v3.999l-6.404 1.733L1.596 3.727zM1 4.667v6.666l2.404.961L1 12.333zm3.404 8.267L8 14.567v-3.999l-3.596-1.041L3.404 12.934z"/>
  </svg>
);

export default BoxSeamIcon;
