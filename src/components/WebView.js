import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

export default ({ navigation, route }) => {
    const title = route.params?.title || null;

    return (
        <View style={{ flex: 1, paddingBottom: 5, paddingHorizontal: 0 }} hasHeader>
            {title !== null &&
                <View style={{ paddingVertical: 5, borderBottomColor: "grey", borderBottomWidth: 0.5 }}>
                    <Text numberOfLines={1} style={{ marginLeft: 10, width: 10, fontSize: 14 }}>{title}</Text>
                </View>
            }
            <WebView source={{ uri: route.params.url }} />
        </View>
    )
};
