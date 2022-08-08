import * as React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from '../data/store'
import List from './list';
import Edit from './edit';

const Stack = createNativeStackNavigator();

export default () => {
    return (<Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Edit" component={Edit} initialParams={{device: undefined}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>);
}