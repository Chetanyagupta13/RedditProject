import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef, navigationIsReadyRef } from "./navigator";
import Feed from "../Views/Feed";
import Post from "../Views/Post";
import WebView from "../components/WebView";
import { NavigationContainer } from "@react-navigation/native";

const RootStack = createStackNavigator();
const RootStackScreen = () => {
    return (
            <RootStack.Navigator headerShown="none">
                <RootStack.Screen name="Feed" component={Feed} />
                <RootStack.Screen name="Post" component={Post} />
                <RootStack.Screen name="WebView" component={WebView} />
            </RootStack.Navigator>
        
    )
}

export default () => {
    React.useEffect(() => { return () => { navigationIsReadyRef.current = false; } }, []);

    return (
        <NavigationContainer ref={navigationRef} onReady={() => { navigationIsReadyRef.current = true; }}>
            <RootStackScreen />
        </NavigationContainer>

    );
};
