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

//components
import SquareJobCard from "../components/SquareJobCard";
import SlimJobCard from "../components/SlimJobCard";
import SideMenu from "../components/SideMenu";
import { useState } from "react";

export default HomePage = () => {
    const [showMenu, setShowMenu] = useState(false);

    const onMenuClickHandler = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <View style={styles.mainContainer}>
                {showMenu ? (
                    <SideMenu setShowMenu={setShowMenu} showMenu={showMenu} />
                ) : (
                    <></>
                )}
                <View style={styles.infoContainer}>
                    <View style={styles.topContainer}>
                        <Pressable onPress={onMenuClickHandler}>
                            <Image
                                style={styles.icons}
                                source={require("../assets/images/menu.png")}
                            />
                        </Pressable>
                        <View style={styles.defaultProfile}></View>
                    </View>
                    <View>
                        <Text style={styles.greenText}>Hello Samuel</Text>
                        <Text style={styles.title}>Find your perfect job</Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <View
                            style={{
                                ...styles.searchBorderContainer,
                                ...styles.shadowProp,
                            }}
                        >
                            <TextInput
                                style={styles.searchTextInput}
                                placeholder="What job are you looking for?"
                                placeholderTextColor={"#888888"}
                            />
                        </View>
                        <View style={styles.searchImageContainer}>
                            <Image
                                source={require("../assets/images/search.png")}
                                style={styles.searchImage}
                            />
                        </View>
                    </View>

                    <View style={styles.filterContainer}>
                        <Text>THIS IS WHERE FILTERS WILL GO</Text>
                    </View>

                    <View style={styles.sectionTitle}>
                        <Text style={styles.greenText}>Popular Jobs</Text>
                        <Link href={"/jobs/popular"} style={styles.greyText}>
                            Show all
                        </Link>
                    </View>
                    <View>
                        <ScrollView
                            horizontal={true}
                            style={styles.squareJobCardContainer}
                        >
                            <SquareJobCard />
                            <SquareJobCard />
                            <SquareJobCard />
                        </ScrollView>
                    </View>

                    <View style={styles.sectionTitle}>
                        <Text style={styles.greenText}>Nearby Jobs</Text>
                        <Link href={"/jobs/nearby"} style={styles.greyText}>
                            Show all
                        </Link>
                    </View>
                    <ScrollView>
                        <SlimJobCard />
                        <SlimJobCard />
                        <SlimJobCard />
                        <SlimJobCard />
                    </ScrollView>
                </View>
            </View>
        </>
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
        // backgroundColor: "red",
        flexDirection: "column",
        gap: 20,
    },

    icons: {
        width: 33,
        height: 20,
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

    searchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },

    title: {
        fontSize: 22,
        color: "#383838",
        fontWeight: "bold",
    },

    greenText: {
        color: "#7d887a",
        fontSize: 16,
        fontWeight: "bold",
    },

    greyText: {
        color: "#888888",
    },

    searchBorderContainer: {
        backgroundColor: "#ffffff",
        width: "85%",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    searchTextInput: {
        width: "95%",
    },

    searchImageContainer: {
        backgroundColor: "#7d887a",
        width: "12%",
        aspectRatio: 1 / 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    searchImage: {
        height: "80%",
        width: "80%",
    },

    filterContainer: {},

    sectionTitle: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    squareJobCardContainer: {
        width: "100%",
        padding: 10,
    },

    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});
