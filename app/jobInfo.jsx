import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
} from "react-native";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";

export default function JobInfoPage() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <Text>Hello</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },

    mainContainer: {
        width: "90%",
        height: "90%",
    },
});
