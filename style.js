import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: 40,
  },

  textInput: {
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 23,
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
    //width: "95%",
    height: 50,
    paddingLeft: 20,
    borderColor: "#00BCC9",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 2,
    shadowRadius: 6.27,
    marginBottom: 10,
  },

  buttonContainer: {
    flex: 1,
    marginBottom: 10,
    marginVertical: 10,
  },

  button: {
    borderColor: "white",
    backgroundColor: "#00BCC9",
    borderRadius: 25,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6.27,
    elevation: 3,
    marginBottom: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  imageContainer: {
    alignItems: "center",
  },

  imageButton: {
    borderWidth: 1,
    borderRadius: 23,
    height: 100,
    width: 100,
    borderColor: "white",
    backgroundColor: "#00BCC9",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6.27,
    elevation: 3,
    marginTop: 10,
  },

  image: {
    width: 150,
    height: 150,
    backgroundColor: "transparent",
    borderRadius: 20,
  },

});

export default styles;