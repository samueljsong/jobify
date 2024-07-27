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
import { SvgXml } from "react-native-svg";

//Components
import xml from "../components/HomePageSVG";

//Images

export default function HomeScreen() {
    const navigation = useNavigation();

    const onLoginPressHandler = () => {
        navigation.navigate("login");
    };

    const onSignupPressHandler = () => {
        navigation.navigate("signup");
    };

    return (
        <View style={styles.container}>
            <SvgXml xml={xml} width={"100%"} height={"40%"} />
            <Text style={styles.welcomeText}>Welcome to{`\n`}Jobify.</Text>
            <Text style={styles.informationText}>
                Keep track of your job search progress with a customizable
                dashboard that is catered to your tastes / needs.
            </Text>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            ...styles.button,
                            backgroundColor: pressed ? "#888888" : "#383838",
                        },
                    ]}
                    onPress={onLoginPressHandler}
                >
                    <Text style={{ ...styles.buttonText, color: "#ffffff" }}>
                        Login
                    </Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            ...styles.button,
                            backgroundColor: pressed ? "#888888" : "#7d887a",
                        },
                    ]}
                    onPress={onSignupPressHandler}
                >
                    <Text style={{ ...styles.buttonText, color: "#ffffff" }}>
                        Signup
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        gap: 20,
    },

    welcomeText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#7d887a",
    },

    informationText: {
        textAlign: "center",
        width: "80%",
        color: "#888888",
    },

    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        gap: "20%",
        justifyContent: "center",
    },

    button: {
        width: "35%",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 50,
    },

    buttonText: {
        padding: 20,
        fontWeight: "bold",
    },
});
