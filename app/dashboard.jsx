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

//components
import SideMenu from "../components/SideMenu";

//SVG
import xml from "../components/DashboardSVG";

export default function DashboardPage() {
    const [showMenu, setShowMenu] = useState(false);

    const onMenuClickHandler = () => {
        setShowMenu(!showMenu);
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <Pressable onPress={onMenuClickHandler}>
                        <Image
                            style={styles.icons}
                            source={require("../assets/images/menu.png")}
                        />
                    </Pressable>
                    <View style={styles.defaultProfile}></View>
                </View>
                <Text style={styles.greenText}>Welcome Samuel</Text>
                <Text style={styles.titleText}>Your Dashboard</Text>
                <View style={styles.jobInformationContainer}>
                    <View>
                        <Text style={styles.darkText}>Total Jobs</Text>
                        <Text
                            style={{
                                color: "#ffffff",
                                fontSize: 40,
                                fontWeight: "bold",
                            }}
                        >
                            18
                        </Text>
                        <Pressable style={styles.addCustomJobButton}>
                            <Text style={{ color: "#ffffff", padding: 15 }}>
                                + Add custom job
                            </Text>
                        </Pressable>
                    </View>
                    <SvgXml xml={xml} width={"40%"} height={"90%"} />
                </View>

                <ScrollView>
                    <Text>Create the job cards here</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    greenText: {
        fontSize: 16,
        color: "#7d877a",
    },

    darkText: {
        color: "#383838",
        fontSize: 16,
        fontWeight: "bold",
    },

    titleText: {
        fontSize: 22,
        color: "#383838",
    },

    container: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    mainContainer: {
        height: "90%",
        width: "90%",
        flexDirection: "column",
        gap: 10,
    },

    topContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    defaultProfile: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: "#7d887a",
    },

    icons: {
        width: 33,
        height: 20,
    },

    jobInformationContainer: {
        flexDirection: "row",
        backgroundColor: "#7d877a",
        borderRadius: 10,
        width: "100%",
        height: "20%",
        alignItems: "center",
        justifyContent: "space-around",
    },

    jobStatContainer: {
        height: "90%",
    },

    addCustomJobButton: {
        backgroundColor: "#383838",
        borderRadius: 10,
    },
});
