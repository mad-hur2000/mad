import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  navigate,
} from "react-native";
import ViewProfile from "./Myprofilecustomer";

import { globalstyles } from "../styles/Global";
import bgimage from "../assets/bgimage3.jpg";
import ShowCustomer from "../screen/ShowCustomer";
import { StyleSheet } from "react-native";

const Customer = ({ navigation }) => {
  const [customer, setCustomer] = useState([
    {
      date: "madhur mu",
      morningMilk: 2,
      eveningMilk: 3,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
  ]);

  return (
    <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.titletext}>Today's Milk</Text>
      </View>

      <View style={styles.workingcontainer}>
        {/* <View> */}
        <Text style={styles.text}>Morning :</Text>
        <TextInput
          style={styles.entermilk}
          placeholder={`${customer[0].morningMilk} Liter`}
          // placeholderTextColor= { 'rgba(225,225,225,0.7)'}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
        />
        <Text style={styles.text}>Evening :</Text>
        <TextInput
          style={styles.entermilk}
          placeholder={`${customer[0].eveningMilk} Liter`}
          // placeholderTextColor= { 'rgba(225,225,225,0.7)'}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
        />
        {/* </View> */}
      </View>
      <TouchableOpacity style={styles.sbutton}>
        <View>
          <Text style={styles.buttontext}>Submit</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        style={styles.Reportcontainer}
        placeholder={`Report Here`}
        underlineColorAndroid="transparent"
        multiline
      />

      <TouchableOpacity style={styles.sbutton}>
        <View>
          <Text style={styles.buttontext}>Report</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.productcontainer}>Product Advertise</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titlecontainer: {
    height: 40,
    width: "100%",
    marginTop: 7,
    borderRadius: 3,
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#fff",
    flexDirection: "row",
    marginHorizontal: 2,
  },
  productcontainer: {
    height: 80,
    width: "100%",
    marginTop: 150,
    borderRadius: 3,
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#fff",
    flexDirection: "row",
    marginHorizontal: 2,
  },

  sbutton: {
    height: 34,
    width: 200,
    borderWidth: 1,
    borderRadius: 40,
    textAlign: "center",
    backgroundColor: "rgba(40,40,40,0.4)",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 25,
    color: "white",
  },

  buttontext: {
    color: "#ddd",
  },

  titletext: {
    flex: 1,
    marginTop: 6,
    fontSize: 22,
    color: "#fff",
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",

    textAlign: "center",
  },
  workingcontainer: {
    height: 90,
    flexDirection: "row",
    justifyContent: "center",
  },
  Reportcontainer: {
    marginTop: 80,
    height: 80,
    width: "100%",
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "#fff",
    fontSize: 16,
  },

  text: {
    flex: 1,
    marginTop: 16,
    fontSize: 14,
    color: "#fff",
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",

    textAlign: "center",
  },
  entermilk: {
    height: 40,
    width: 90,
    marginTop: 7,
    borderRadius: 3,
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "#fff",
    flexDirection: "row",
    marginHorizontal: 4,
    textAlign: "center",
  },
});

export default Customer;
