import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from './app/screens/UserListScreen';
import UserDetailScreen from './app/screens/UserDetailScreen';

export type RootStackParamList = {
  UserList: undefined;
  UserDetail: {  userId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen 
          name="UserList" 
          component={UserListScreen} 
          options={{ title: 'User List' }} 
        />
        <Stack.Screen 
          name="UserDetail" 
          component={UserDetailScreen} 
          options={{ title: 'User Details' }} 
        />
      </Stack.Navigator>
  );
};

export default App;
