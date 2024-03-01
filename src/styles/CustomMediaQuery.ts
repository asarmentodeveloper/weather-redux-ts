import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_DESKTOP_L,
  MEDIA_QUERY_IPAD,
  MEDIA_QUERY_MOBILE,
} from "./variables/mediaQuery";

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const mediaQuery = {
  custom: customMediaQuery,
  ldesktop: customMediaQuery(MEDIA_QUERY_DESKTOP_L),
  desktop: customMediaQuery(MEDIA_QUERY_DESKTOP),
  tablet: customMediaQuery(MEDIA_QUERY_IPAD),
  phone: customMediaQuery(MEDIA_QUERY_MOBILE),
};

export default mediaQuery;
