import { FILTERS } from "../consts/consts";

export type FILTERS_VALUE = (typeof FILTERS)[keyof typeof FILTERS];
