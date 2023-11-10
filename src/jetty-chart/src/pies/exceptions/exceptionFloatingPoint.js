// 부동 소수점 예외 처리 함수
import { EXCEPTION_FLOATING_POINT_MUL } from "../constants/pieException";

export const exceptionFloatingPointSliceCheck = ({ num }) => {
  return Math.round(num * EXCEPTION_FLOATING_POINT_MUL);
};

export const exceptionFloatingPointSliceSet = ({ num }) => {
  return Math.round(num * EXCEPTION_FLOATING_POINT_MUL) / EXCEPTION_FLOATING_POINT_MUL;
};

export const exceptionFloatingPointCompare = ({ num1, num2 }) => {
  return Math.abs(num1 - num2) <= 10;
};
