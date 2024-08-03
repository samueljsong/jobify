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

export default function SlimJobCard() {
    const navigation = useNavigation();

    const onCardPressHandler = () => {
        navigation.navigate("jobInfo");
    };

    return (
        <Pressable
            style={{ ...styles.container, ...styles.shadowProp }}
            onPress={onCardPressHandler}
        >
            <Image
                style={styles.icon}
                source={require("../assets/images/google.png")}
            />
            <View style={styles.textContainer}>
                <Text>React Developer</Text>
                <Text>Full-Time</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "99%",
        height: 70,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },

    textContainer: {
        flexDirection: "column",
    },

    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    icon: {
        width: "10%",
        height: "70%",
        marginHorizontal: 20,
    },
});
