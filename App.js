import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DailyPic from "./screens/DailyPic";
import Home from "./screens/Home";
import SpaceCraft from "./screens/SpaceCraft";
import StarMap from "./screens/StarMap";

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
				<Stack.Screen name='Home' component={Home}/>
				<Stack.Screen name='DailyPic' component={DailyPic}/>
				<Stack.Screen name='SpaceCraft' component={SpaceCraft}/>
				<Stack.Screen name='StarMap' component={StarMap}/>
			</Stack.Navigator>
		</NavigationContainer>
	 )
  }
}