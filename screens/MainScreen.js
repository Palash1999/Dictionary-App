import React, { useState, Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import Input from "../components/Input";
import Card from "../components/Card";
import PickerEx from "../components/PickerEx";
import { ToggleButton } from "react-native-paper";
const axios = require("axios");

const MainScreen = (props) => {
  const [word, setWord] = useState("");
  const [dfn, setDfn] = useState("");
  const [ex, setEx] = useState("");
  const [lang, setLang] = useState("");

  const language = (l) => {
    setLang(l);
  };

  const wordHandler = (inputWord) => {
    setWord(inputWord);
  };

  function serachWord() {
    axios({
      method: "get",
      url: "https://api.dictionaryapi.dev/api/v1/entries/en/" + word,
    })
      .then((res) => {
        for (var prop in res.data[0].meaning) {
          console.log(prop);
          setDfn("Definition: " + res.data[0].meaning[prop][0].definition);
          setEx("Example: " + res.data[0].meaning[prop][0].example);

          // object[prop]
          break;
        }
        // try {
        //   setDfn(
        //     "Definition: " +
        //       res.data[0].meaning["intransitive verb"][0].definition
        //   );
        //   setEx(
        //     "Example: " + res.data[0].meaning["intransitive verb"][0].example
        //   );
        // } catch (error) {
        //   setDfn("Definition: " + res.data[0].meaning["noun"][0].definition);
        //   setEx("Example: " + res.data[0].meaning["noun"][0].example);
        // }
      })
      .catch((err) => {
        setDfn(
          "Please enter valid words or check your spelling or maybe you exceded the limit please try again later!"
        );
        setEx("");
        console.log(err);
      });
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Input
            autoCapitalize="none"
            autoCorrect={true}
            value={word}
            onChangeText={wordHandler}
          />
          <Button title="Search" onPress={serachWord} />
        </Card>
        <Card style={styles.card2}>
          <Text>{dfn}</Text>
          <Text>{ex}</Text>
        </Card>
        <Text>{lang}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card2: {
    height: 200,
    margin: 10,
  },
});

export default MainScreen;
