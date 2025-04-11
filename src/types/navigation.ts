export type RootStackParamList = {
  MainTabs: undefined;
  NewsDetail: { id: string };
  ProductDetail: { id: string };
  Contact: { url: string };
  Settings: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  News: undefined;
  Products: undefined;
  Profile: undefined;
  Settings: undefined;
  Contact: { url: string };
};

// Combined navigation types for easier navigation
export type CombinedNavigationParamList = RootStackParamList & {
  News: undefined;
  Products: undefined;
};

export type RootNavigationProp = {
  navigate: (screen: keyof CombinedNavigationParamList, params?: any) => void;
};
