// Props Type
export interface LayoutPropsType {
  currentTab: string;
  children: React.ReactNode;
}

export interface SubNavPropsType {
  currentTab: string;
}

export interface PricePropsType {
  state: string;
  type: string;
  management: boolean;
}

export interface QnAListPropsType {
  title: string;
  list: string[];
}

export interface PurchaseListPropsType {
  management: boolean;
  data?: string;
}
