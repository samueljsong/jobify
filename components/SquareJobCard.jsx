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

export default function SquareJobCard() {
    return (
        <Pressable style={{ ...styles.container, ...styles.shadowProp }}>
            <View style={styles.infoContainer}>
                <Image
                    style={styles.icon}
                    source={require("../assets/images/google.png")}
                />
                <Text style={styles.greyText}>Google</Text>
                <View>
                    <Text style={styles.boldText}>React Developer</Text>
                    <Text style={styles.greyText}>US</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        width: 200,
        height: 150,
        borderRadius: 10,
        marginRight: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    infoContainer: {
        height: "80%",
        width: "80%",
        flexDirection: "column",
        justifyContent: "center",
        gap: 5,
    },

    icon: {
        width: "30%",
        height: "30%",
        right: 8,
    },

    greyText: {
        color: "#888888",
    },

    boldText: {
        color: "#7d887a",
        fontWeight: "bold",
        fontSize: 18,
    },
});
