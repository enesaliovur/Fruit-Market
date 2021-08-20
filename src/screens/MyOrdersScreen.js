import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export const MyOrdersScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.productImageStyles}
            source={require("../../assets/Broccoli.png")}
          />
          <View style={styles.orderInfo}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.optionText}>Brokoli</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>

            <View style={styles.orderRate}>
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
            </View>
            <Text style={styles.rateText}>Ürünü değerlendir</Text>
            <Text style={styles.deliveredDateText}>Teslim Tarihi: 24.06.2021 </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.productImageStyles}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsoBYhEsNEkQIlp6WuU_kDYgmyFXDpwKLH_g&usqp=CAU",
            }}
          />
          <View style={styles.orderInfo}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.optionText}>Soğan</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>

            <View style={styles.orderRate}>
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
            </View>
            <Text style={styles.rateText}>Ürünü değerlendir</Text>
            <Text style={styles.deliveredDateText}>Teslim Tarihi: 24.06.2021 </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.productImageStyles}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jieQu5QrJS-f6FaMOblbHwcai5-xeqTWDQ&usqp=CAU",
            }}
          />
          <View style={styles.orderInfo}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.optionText}>Kuru İncir</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>

            <View style={styles.orderRate}>
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
            </View>
            <Text style={styles.rateText}>Ürünü değerlendir</Text>
            <Text style={styles.deliveredDateText}>Teslim Tarihi: 24.06.2021 </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.productImageStyles}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbk_I6BDI2Rfj7MlqS96nN7Lgu288bHCVJJg&usqp=CAU",
            }}
          />
          <View style={styles.orderInfo}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.optionText}>Karpuz</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>

            <View style={styles.orderRate}>
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
            </View>
            <Text style={styles.rateText}>Ürünü değerlendir</Text>
            <Text style={styles.deliveredDateText}>Teslim Tarihi: 24.06.2021 </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            style={styles.productImageStyles}
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
          />
          <View style={styles.orderInfo}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.optionText}>Muz</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>

            <View style={styles.orderRate}>
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
              <MaterialIcons name="star-rate" size={34} color="gray" />
            </View>
            <Text style={styles.rateText}>Ürünü değerlendir</Text>
            <Text style={styles.deliveredDateText}>Teslim Tarihi: 24.06.2021 </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  optionView: {
    marginTop: 5,
    padding: 15,
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  optionText: {
    fontSize: 18,
    flex: 6,
    fontWeight: "bold",
  },
  orderInfo: {
    flex: 6,
    marginLeft: 10,
  },
  iconStyle: {
    flex: 6,
  },
  productImageStyles: {
    flex: 4,
    height: 120,
    borderRadius: 10,
  },
  orderRate: {
    flexDirection: "row",
  },
  rateText: {
    color: "gray",
    marginVertical: 7,
  },
  deliveredDateText:{
    fontSize: 15,
  },
});
