import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton} onPress={() =>navigation.navigate("Account Setting")}>
          <FontAwesome
            name="user-circle-o"
            size={24}
            color="#69a03a"
            style={styles.iconStyle}
          />
          <Text style={styles.optionText}>Hesap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons
            name="notifications"
            size={24}
            color="#69a03a"
            style={styles.iconStyle}
          />
          <Text style={styles.optionText}>Bildirimler</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <MaterialIcons
            name="language"
            size={24}
            color="#69a03a"
            style={styles.iconStyle}
          />
          <Text style={styles.optionText}>Dil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
        <MaterialIcons name="edit-location" size={24}  color="#69a03a"  style={styles.iconStyle} />
          <Text style={styles.optionText}>Adres Değiştir</Text>
        </TouchableOpacity>
      </View>
    </View>
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
});
