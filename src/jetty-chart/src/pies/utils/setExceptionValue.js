import { MAX_PERCENT, MIN_PERCENT } from "../constants/pieException";
import { exceptionValueRange } from "../exceptions/exceptionValueRange";

export const setExceptionValue = ({ pieSettings }) => {
  pieSettings.innerRadius = exceptionValueRange({
    num: pieSettings.innerRadius,
    max: MAX_PERCENT,
    min: MIN_PERCENT,
  });
  pieSettings.pieRadius = exceptionValueRange({
    num: pieSettings.pieRadius,
    max: 1,
    min: pieSettings.innerRadius + 0.001,
  });
  pieSettings.cornerRadius = exceptionValueRange({
    num: pieSettings.cornerRadius,
    max: MAX_PERCENT,
    min: MIN_PERCENT,
  });
};
