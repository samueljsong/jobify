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

//components
import SideMenu from "../components/SideMenu";

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
                <Text>Welcome Samuel</Text>
                <Text>Your Dashboard</Text>
                <View>
                    <View>
                        <Text>Total Jobs</Text>
                        <Text>18</Text>
                        <Pressable>
                            <Text>Add custom job</Text>
                        </Pressable>
                    </View>
                </View>

                <ScrollView>
                    <Text>Create the job cards here</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        gap: 20,
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
});
