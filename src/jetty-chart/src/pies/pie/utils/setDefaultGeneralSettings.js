import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_PIE_BACKGROUND_COLOR,
  DEFAULT_DONUT_BACKGROUND_COLOR,
  DEFAULT_PADDING,
} from "./constants/generalSettings";

export const setDefaultGeneralSettings = () => {
  return {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    pieBackgroundColor: DEFAULT_PIE_BACKGROUND_COLOR,
    donutBackgroundColor: DEFAULT_DONUT_BACKGROUND_COLOR,
    padding: {
      top: DEFAULT_PADDING,
      bottom: DEFAULT_PADDING,
      left: DEFAULT_PADDING,
      right: DEFAULT_PADDING,
    },
  };
};
