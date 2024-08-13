import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
    SafeAreaView,
    FlatList,
    ScrollView,
} from "react-native";

import { Link } from "expo-router";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import React, { Component } from "react";

export default function DashboardJobComponent() {
    const renderRightActions = () => {
        return (
            <View style={styles.rightAction}>
                <Text style={styles.actionText}>Delete</Text>
            </View>
        );
    };

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <View style={{ ...styles.container, ...styles.shadowProp }}>
                    <View
                        style={{
                            paddingVertical: 20,
                            ...styles.informationContainer,
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                style={styles.icon}
                                source={require("../assets/images/google.png")}
                            />
                            <View>
                                <Text>Senior React Developer</Text>
                                <Text>Status: Waiting for response</Text>
                            </View>
                        </View>

                        <Text>LOW</Text>
                    </View>
                </View>
            </Swipeable>
            {/* <View style={styles.space}></View> */}
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    greyText: {
        color: "#888888",
    },

    darkText: {
        color: "#383838",
    },

    container: {
        width: "99%",
        height: 70,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    informationContainer: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    space: {
        height: 10,
    },
    rightAction: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end",
        height: 70,
        borderRadius: 10,
    },
    actionText: {
        color: "white",
    },

    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    icon: {
        width: 30,
        height: 30,
    },
});
