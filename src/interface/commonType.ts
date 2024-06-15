export interface ButtonPropsType {
  size: string;
  $isDisabled?: boolean;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface DropDownType {
  $width: string;
  children: React.ReactNode;
}

export interface LikedNumberPropsType {
  number: string;
}

export interface PaginationPropsType {
  currentNumber: number;
}
