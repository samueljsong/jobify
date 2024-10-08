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

//Images

export default function LoginPage() {
    const navigation = useNavigation();

    const onLoginPressHandler = () => {
        console.log("Logging in...");
        navigation.navigate("home");
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.loginTitle}>
                Hey,{"\n"}Welcome{"\n"}Back
            </Text>
            <View style={styles.emailPassContainer}>
                <View style={styles.inputContainer}>
                    <Image
                        style={{ ...styles.icons, marginHorizontal: 25 }}
                        source={require("../assets/images/email.png")}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={"#7d887a"}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        style={{ ...styles.icons, marginHorizontal: 25 }}
                        source={require("../assets/images/password.png")}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={"#7d887a"}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            <View style={styles.loginSignupContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            ...styles.loginButton,
                            backgroundColor: pressed ? "#7d887a" : "#383838",
                        },
                    ]}
                    onPress={onLoginPressHandler}
                >
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
                <Text style={styles.fadeoutText}>or continue with</Text>
                <Pressable
                    style={{
                        ...styles.inputContainer,
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        style={styles.icons}
                        source={require("../assets/images/google.png")}
                    />
                    <Text style={styles.googleText}>Google</Text>
                </Pressable>
                <Text style={styles.fadeoutText}>
                    Don't have an account?{" "}
                    <Link
                        replace
                        style={styles.forgotPasswordText}
                        href={"signup"}
                    >
                        Signup
                    </Link>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        width: "90%",
        height: "100%",
        alignSelf: "center",
        justifyContent: "center",
        gap: 30,
    },

    loginTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#383838",
    },

    emailPassContainer: {
        gap: 10,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ededed",
        borderStyle: "solid",
        borderColor: "#7d887a",
        borderWidth: 1,
        borderRadius: 50,
    },

    input: {
        paddingVertical: 20,
        width: "80%",
        color: "#7d877a",
    },

    forgotPasswordText: {
        fontWeight: "bold",
        color: "#7d887a",
        alignSelf: "flex-end",
    },

    loginSignupContainer: {
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
    },

    loginButton: {
        width: "100%",
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "center",
    },

    loginText: {
        color: "white",
        padding: 20,
    },

    fadeoutText: {
        color: "#888888",
    },

    googleText: {
        paddingVertical: 20,
        color: "#7d887a",
    },

    icons: {
        width: 20,
        height: 20,
    },
});
