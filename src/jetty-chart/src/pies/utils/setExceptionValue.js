// 기본 데이터의 범위를 벗어나는 값이 들어왔을 때, 예외처리를 해주는 함수
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
