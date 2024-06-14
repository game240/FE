// Props Type
export interface LayoutType {
  currentTab: string;
  children: React.ReactNode;
}

export interface SubNavType {
  currentTab: string;
}

export interface ItemInfoPropsType {
  management: boolean;
}

export interface PricePropsType {
  state: string;
  type: string;
  management: boolean;
}
