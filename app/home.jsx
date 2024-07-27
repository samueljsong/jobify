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

export default HomePage = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <Text>asdf</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },

    infoContainer: {
        width: "90%",
        height: "90%",
        backgroundColor: "red",
    },
});
