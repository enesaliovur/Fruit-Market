import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export const AccountSettingScreen = () => {
  return (
    <View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons
            name="shield-checkmark-sharp"
            size={24}
            color="#69a03a"
            style={styles.iconStyle}
          />
          <Text style={styles.optionText}>Güvenlik</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <Entypo
            name="circle-with-cross"
            size={24}
            color="#69a03a"
            style={styles.iconStyle}
          />
          <Text style={styles.optionText}>Hesabımı Dondur</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.optionButton}>
          <MaterialCommunityIcons
            name="delete"
            size={24}
            color="#69a03a"
            style={styles.iconStyle}
          />
          <Text style={styles.optionText}>Hesabımı Sil</Text>
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
