import React from 'React';
import { createStackNavigator } from '@react-navigation/stack';

import MiAgenda from './MiAgenda';
import Evento from './Evento';
import Home from './Home';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "rgba(88, 71, 153, 1)",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Agenda IDRD" component={Home} />
        <Stack.Screen name="Evento" component={Evento} />
      </Stack.Navigator>
    );
  }

  const MiAgendaStackNavigation = () => {
      return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="." component={MiAgenda} />
      </Stack.Navigator>
      )
  }

  export { HomeStackNavigator, MiAgendaStackNavigation}