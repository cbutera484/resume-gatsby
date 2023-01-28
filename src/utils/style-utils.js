// these sizes are arbitrary and you can set them to whatever you wish
import { css } from "styled-components";

const sizes = {
  giant: 1199,
  desktop: 999,
  tablet: 749,
  phone: 549
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
