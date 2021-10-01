import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Confirmation } from "../pages/Confirmation";
import { UserIdentification } from "../pages/UserIdentification";
import { Welcome } from "../pages/Welcome";
import colors from "../styles/colors";

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
            headerShown: false
        }}
    >
        <stackRoutes.Screen name="Welcome" component={Welcome}/>
        <stackRoutes.Screen name="UserIdentification" component={UserIdentification}/>
        <stackRoutes.Screen name="Confirmation" component={Confirmation}/>
    </stackRoutes.Navigator>
)

export default AppRoutes