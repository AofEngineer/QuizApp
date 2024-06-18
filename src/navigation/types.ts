/* eslint-disable prettier/prettier */

import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Leaderboard: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
