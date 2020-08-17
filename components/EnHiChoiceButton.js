import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";

const EnHiChoiceButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="English" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Hindi" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 10,
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonContainer: {},
});

export default EnHiChoiceButton;
