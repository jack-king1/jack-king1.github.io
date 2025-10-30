// src/assets/thumbnails.ts
import ticketyThumb from "./ticketydemo.gif";
// import portfolioThumb from "./portfolio-thumb.png";
// import designToolThumb from "./designtool-thumb.png";

export const THUMBNAILS = {
  TICKETY: ticketyThumb,
  //   PORTFOLIO: portfolioThumb,
  //   DESIGN_TOOL: designToolThumb,
} as const;

export type ThumbnailKey = keyof typeof THUMBNAILS;
