// 부동 소수점 예외 처리 함수
import { EXCEPTION_FLOATING_POINT } from "../constants/pieException";

export const exceptionFloatingPointSlice = ({ num }) => {
  return Math.round(num * EXCEPTION_FLOATING_POINT) / EXCEPTION_FLOATING_POINT;
};

export const exceptionFloatingPointCompare = ({ num1, num2 }) => {
  return Math.abs(num1 - num2) <= 1 / EXCEPTION_FLOATING_POINT;
};
