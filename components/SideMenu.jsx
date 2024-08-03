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

export default function SideMenu({ setShowMenu, showMenu }) {
    const closeMenuHandler = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <View style={styles.mask}></View>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.topSection}>
                        <Pressable onPress={closeMenuHandler}>
                            <Image
                                style={{
                                    ...styles.icons,
                                    alignSelf: "flex-end",
                                }}
                                source={require("../assets/images/close.png")}
                            />
                        </Pressable>

                        <Pressable style={styles.navigation}>
                            <Image
                                style={styles.navigationIcon}
                                source={require("../assets/images/dashboard.png")}
                            />
                            <Text style={styles.navigationText}>Dashboard</Text>
                        </Pressable>
                        <Pressable style={styles.navigation}>
                            <Image
                                style={styles.navigationIcon}
                                source={require("../assets/images/popular.png")}
                            />
                            <Text style={styles.navigationText}>Popular</Text>
                        </Pressable>
                        <Pressable style={styles.navigation}>
                            <Image
                                style={styles.navigationIcon}
                                source={require("../assets/images/settings.png")}
                            />
                            <Text style={styles.navigationText}>Settings</Text>
                        </Pressable>
                    </View>
                    <View style={styles.bottomSection}>
                        <View style={styles.bottomInfoSection}>
                            <View>
                                <Text style={styles.logoutText}>LOG OUT</Text>
                                <Text style={{ color: "#383838" }}>
                                    Samuel Song
                                </Text>
                            </View>
                            <Image
                                style={styles.profilePicture}
                                source={require("../assets/images/pfp.jpg")}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mask: {
        position: "absolute",
        zIndex: 3,
        backgroundColor: "#888888",
        opacity: 0.6,
        width: "100%",
        height: "100%",
    },

    container: {
        position: "absolute",
        zIndex: 4,
        width: "70%",
        height: "100%",
        backgroundColor: "#7d887a",
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    infoContainer: {
        width: "90%",
        height: "85%",
        // backgroundColor: "blue",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    topSection: {
        flexDirection: "column",
        gap: 20,
    },

    bottomSection: {
        borderTopColor: "#ffffff",
        borderStyle: "solid",
        borderTopWidth: 1,
    },

    bottomInfoSection: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    logoutText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },

    logoutTextContainer: {},

    icons: {
        width: 25,
        height: 25,
    },

    navigation: {
        fontWeight: "500",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },

    navigationIcon: {
        width: 25,
        height: 25,
    },

    navigationText: {
        color: "#ffffff",
        fontSize: 22,
    },

    profilePicture: {
        borderRadius: 50,
        height: 40,
        width: 40,
    },
});
