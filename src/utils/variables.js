const size = {
  fold: "279px",
  mobileS: "320px",
  mobileM: "360px",
  mobileL: "410px",
  surface: "539px",
  tablet: "767px",
  laptop: "1024px",
  laptopM: "1279px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopM: "2560px",
};
// and (orientation: portrait);
// and (orientation: landscape);
export const device = {
  fold: `(min-width: ${size.fold})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  surface: `(min-width: ${size.surface})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopM: `(min-width: ${size.desktopM})`,
};

// const XXL = "3840 x 2160";
// const XL = "2048 x 1536";
// const L = "1920 x 1080";
// const M = "1768 x 992";
// const S = "1280 x 720";
// const XS = "1176 x 664";
// const XXS = "720 x 576";
