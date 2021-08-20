import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export const ProfileScreen = ({ navigation }) => {
  const optionList = [
    "Siparişlerim",
    "Favorilerim",
    "Ayarlar",
    "Sepetim",
    "Bizi Değerlendirin",
    "Arkadaşına Öner",
    "Yardım",
    "Çıkış Yap",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/C4D03AQF3uHaMSxqDrw/profile-displayphoto-shrink_200_200/0/1601621452324?e=1633564800&v=beta&t=8TrJ0yQ9SbnI8zM4I32RG_PmqwwnPESzzAR9lDeir1s",
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.articleContainer}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Enes Ali Övür
            </Text>
            <Text style={{ color: "white", fontSize: 14, textAlign: "center" }}>
              enesaliovur@gmail.com
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ marginTop: -100, marginRight: 5 }}>
          <FontAwesome5 name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <ScrollView>
          <View style={styles.optionView}>
            <TouchableOpacity style={styles.optionButton} onPress={()=>navigation.navigate("My Orders")}>
              <FontAwesome5
                name="shopping-bag"
                size={24}
                color="#69a03a"
                style={styles.iconStyle}
              />
              <Text style={styles.optionText}>Siparişlerim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionView}>
            <TouchableOpacity style={styles.optionButton}>
              <FontAwesome
                name="heart"
                size={24}
                color="#69a03a"
                style={styles.iconStyle}
              />
              <Text style={styles.optionText}>Favorilerim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionView}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Ionicons
                name="md-settings-sharp"
                size={24}
                color="#69a03a"
                style={styles.iconStyle}
              />
              <Text style={styles.optionText}>Ayarlar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionView}>
            <TouchableOpacity style={styles.optionButton}>
              <FontAwesome5
                name="shopping-cart"
                size={24}
                color="#69a03a"
                style={styles.iconStyle}
              />
              <Text style={styles.optionText}>Sepetim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionView}>
            <TouchableOpacity style={styles.optionButton}>
              <MaterialIcons
                name="star-rate"
                size={24}
                color="#69a03a"
                style={styles.iconStyle}
              />
              <Text style={styles.optionText}>Bizi Değerlendirin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionView}>
            <TouchableOpacity style={styles.optionButton}>
              <Entypo
                name="share"
                size={24}
                color="#69a03a"
                style={styles.iconStyle}
              />
              <Text style={styles.optionText}>Arkadaşına Öner</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionView}>
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons
                name="ios-help-circle"
                size={24}
                color="#69a03a"
                style={styles.iconStyle}
              />
              <Text style={styles.optionText}>Yardım</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionView}>
            <TouchableOpacity style={styles.optionButton}>
              <Feather
                name="log-out"
                size={24}
                color="#69a03a"
                style={styles.iconStyle}
              />
              <Text style={styles.optionText}>Çıkış Yap</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  header: {
    backgroundColor: "#69a03a",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  options: {
    flex: 7,
    backgroundColor: "white",
  },
  optionView: {
    marginTop: 5,
    padding: 15,
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    fontSize: 18,
    flex: 9,
  },
  iconStyle: {
    flex: 1,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 500,
    borderColor: "white",
  },
  imageContainer: {
    flexDirection: "row",
  },
  articleContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});
