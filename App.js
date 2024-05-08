import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import myPic from "./assets/profilePic.jpg";
import contiLogo from "./assets/contiLogo.png";

export default function App() {
  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View>
          <View style={{ padding: 20 }}></View>
          <Image
            style={{ height: 200, width: 200, borderRadius: 500 }}
            source={myPic}
          ></Image>
        </View>
        <View style={{ padding: 40 }}></View>
        <Text
          style={{ fontFamily: "Roboto", fontSize: 40, fontWeight: "bold" }}
        >
          Izzat Fadzlon
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 20,
            padding: 10,
            color: "grey",
          }}
        >
          Software Engineer
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 20,
            color: "orange",
          }}
        >
          Continental
          <Image style={{ height: 40, width: 40 }} source={contiLogo}></Image>
        </Text>
        <Text style={{ padding: 10 }}>
          Efficiency is clever laziness 💤 -not sure who
        </Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
