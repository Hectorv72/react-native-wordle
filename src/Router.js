import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { app } from './config'
import Game from './views/Game';
import Home from './views/Home';

const Router = () => {

  const { Navigator, Screen } = createNativeStackNavigator();

  const views = [
    { name: "main", component: Home, options: { headerShown: false } },
    { name: "game", component: Game, options: { headerShown: false } },
    // { name: "", component: Component, options: {} },
  ]

  return (
    <NavigationContainer>
      <Navigator initialRouteName='main'>
        {
          views.map(
            (view, index) =>
              <Screen key={`view-${index}`} {...view} />
          )
        }
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
