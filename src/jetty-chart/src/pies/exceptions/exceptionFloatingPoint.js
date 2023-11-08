import { EXCEPTION_FLOATING_POINT } from "../constants/pieException";

export const exceptionFloatingPointSlice = ({ num }) => {
  return Math.round(num * EXCEPTION_FLOATING_POINT);
};

export const exceptionFloatingPointCompare = ({ num1, num2 }) => {
  return Math.abs(num1 - num2) <= 1;
};
