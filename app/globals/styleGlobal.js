import { Dimensions, StyleSheet } from "react-native";

const colorsDefault = {
  primary: "#35495E",
  secundary: "#41B883",
  debit: "#EB5757",
  credit: "#37D39B",
}

const viewport = {
  width: Math.round(Dimensions.get("screen").width),
  height: Math.round(Dimensions.get("screen").height)
}

const styleGlobal = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    margin: 1,
    padding: 2
  },
  inputText: {
    backgroundColor: "#eee",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    paddingLeft: 15,
    textAlign: "left",
    width: "90%"
  },
  buttonDefault: {
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    paddingLeft: 15,
    textAlign: "left",
    width: "90%",
    backgroundColor: colorsDefault.secundary
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    padding: 5,
    fontSize: 15
  }
});

export { styleGlobal, colorsDefault, viewport }