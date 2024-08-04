import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    FlatList,
} from "react-native";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";

export default function JobInfoPage() {
    const navigation = useNavigation();

    //Replace with the api fetch of job information
    const responsibilities = [
        "Develop, test, deploy, and release new user-facing features",
        "Set continuous delivery and continuous improvement in front-end development",
        "Developing scalable, reusable components and front-end libraries",
        "Translating UI designs and UX wireframes into high quality codes",
        "Optimizing components for maximum performance",
        "An advocate of general engineering and best practices.",
    ];

    const onBackPressHandler = () => {
        navigation.navigate("home");
    };

    //TODO: add the logic and loader for successfully adding to dashboard.
    //Then and only then navigate to dashboard else show error message.
    const onAddToDashboardPressHandler = () => {
        navigation.navigate("dashboard");
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <View>
                        <View style={styles.topContainer}>
                            <Pressable onPress={onBackPressHandler}>
                                <Image
                                    style={styles.icons}
                                    source={require("../assets/images/back.png")}
                                />
                            </Pressable>

                            <Image
                                style={styles.icons}
                                source={require("../assets/images/share.png")}
                            />
                        </View>

                        <View style={styles.jobTitleContainer}>
                            <Image
                                style={styles.logo}
                                source={require("../assets/images/google.png")}
                            ></Image>
                            <Text style={styles.jobTitle}>React Developer</Text>
                            <Text style={styles.greyText}>Google / US</Text>

                            <View style={styles.buttonContainer}>
                                <Pressable style={styles.buttonActive}>
                                    <Text style={styles.whiteText}>About</Text>
                                </Pressable>
                                <Pressable style={styles.buttonInactive}>
                                    <Text style={styles.greyText}>
                                        Qualifications
                                    </Text>
                                </Pressable>
                                <Pressable style={styles.buttonInactive}>
                                    <Text style={styles.greyText}>
                                        Responsibilities
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        <ScrollView>
                            <Text
                                style={{
                                    ...styles.jobTitle,
                                    ...styles.scrollviewText,
                                }}
                            >
                                About the job:
                            </Text>
                            <Text style={styles.scrollviewText}>
                                React Developer
                            </Text>
                            <Text style={styles.scrollviewText}>
                                Skill: React JS, Node, Express
                            </Text>
                            <Text style={styles.scrollviewText}>
                                Exp: 8+ years
                            </Text>
                            <Text style={styles.scrollviewText}>
                                Location: Canada
                            </Text>
                            <Text style={styles.scrollviewText}>
                                Job Type: Remote
                            </Text>
                            <Text style={styles.scrollviewText}>
                                Responsibilities
                            </Text>
                            <View>
                                {responsibilities.map((item, index) => {
                                    return (
                                        <View
                                            style={
                                                styles.responsibilitiesContainer
                                            }
                                            key={index}
                                        >
                                            <Text style={styles.greyText}>
                                                •
                                            </Text>
                                            <Text style={styles.greyText}>
                                                {item}
                                            </Text>
                                        </View>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>

                    <Pressable
                        style={styles.addToDashboardButton}
                        onPress={onAddToDashboardPressHandler}
                    >
                        <Image
                            style={styles.plusIcon}
                            source={require("../assets/images/plus.png")}
                        />
                        <Text style={styles.whiteText}>Add to dashboard</Text>
                    </Pressable>
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
        justifyContent: "space-between",
    },

    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    icons: {
        width: 30,
        height: 30,
    },

    jobTitleContainer: {
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
    },

    logo: {
        width: 70,
        height: 70,
        marginVertical: "5%",
    },

    jobTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#383838",
    },

    greyText: {
        color: "#888888",
    },

    whiteText: {
        color: "#ffffff",
    },

    darkText: {
        color: "#383838",
    },

    buttonContainer: {
        flexDirection: "row",
        gap: 10,
        paddingVertical: "5%",
    },

    informationContainer: {
        flexDirection: "column",
    },

    buttonActive: {
        backgroundColor: "#7d887a",
        padding: "5%",
        borderRadius: 10,
    },

    buttonInactive: {
        backgroundColor: "#dadad2",
        padding: "5%",
        borderRadius: 10,
    },

    scrollviewText: {
        marginBottom: 15,
        color: "#888888",
    },

    responsibilitiesContainer: {
        flexDirection: "row",
        gap: 10,
    },

    addToDashboardButton: {
        width: "100%",
        paddingVertical: "5%",
        backgroundColor: "#383838",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        flexDirection: "row",
        gap: 10,
    },

    plusIcon: {
        width: "5%",
        aspectRatio: 1 / 1,
    },
});
