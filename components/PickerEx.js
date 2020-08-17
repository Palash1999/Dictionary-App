import React, { Component, useState } from "react";
import { View, Picker } from "react-native";

const PickerEx = (props) => {
  const [val, setVal] = useState("");
  const show = (label) => {
    console.log(label);
    setVal(label);
  };

  return (
    <View>
      <Picker selectedValue={val} onValueChange={show}>
        <PickerEx.Item label="Select Language" value="0"></PickerEx.Item>
        <PickerEx.Item label="English" value="8000"></PickerEx.Item>
        <PickerEx.Item label="Hindi" value="10000"></PickerEx.Item>
      </Picker>
    </View>
  );
};

export default PickerEx;
