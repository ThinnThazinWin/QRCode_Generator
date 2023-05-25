import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import styles from "./style";

export default function App() {
  const [data1, setData1] = useState(null);
  const [image, setImage] = useState(null);
  const [imgg, img] = useState(null);
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [state, setState] = useState();

  var result = null;
  let svg = useRef(null);
  let dataUrl = "";

  const image_source =
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";

  
    const imagePick = async () => {
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("selected image: " + result.assets[0].uri.split("/").pop());
      img(result.assets[0].uri.split("/").pop());
    }
  };

  
  const download = async () => {
    setQRCodeValue(data1);
  };
  
  const getDataURL = () => {
    svg?.toDataURL(callback);
  };

  
  function callback(dataURL) {
    dataUrl = dataURL;
  }

  const imgSaveHandler = () => {
    getDataURL();
    setState({ loading: true });
    FileSystem.downloadAsync(
      image_source,
      FileSystem.documentDirectory + ".png"
    )
      .then(({ uri }) => {
        //console.log(dataUrl);
        FileSystem.writeAsStringAsync(uri, dataUrl, {
          encoding: FileSystem.EncodingType.Base64,
        }).then(() => {
          setState({ loading: false });
          Sharing.shareAsync(uri);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#00BCC9",
          fontSize: 25,
          fontWeight: "bold",
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        QR CODE Generator
      </Text>
      <View
        style={{
          width: 150,
          height: 150,
          borderWidth: 1,
          borderRadius: 25,
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {qrCodeValue ? (
          <QRCode
            value={qrCodeValue}
            size={150}
            logo={{ uri: image }}
            logoBackgroundColor="transparent"
            logoSize={40}
            logoBorderRadius={5}
            getRef={(c) => (svg = c)}
          />
        ) : null}
      </View>
      
      <View style={{ marginHorizontal: 5 }}>
        <Text
          style={{
            color: "#000",
            fontSize: 15,
            fontWeight: "bold",
            fontStyle: "italic",
            marginLeft: 10,
            opacity: 0.5,
          }}
        >
          Enter the data to generate QR Code..
        </Text>
        <TextInput
          placeholder={"Enter the data......"}
          value={data1}
          onChangeText={setData1}
          style={styles.textInput}
        />
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} resizeMode='stretch' />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Browse "
            onPress={imagePick}
            style={styles.button}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Browse the image
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={download}>
            <Text style={styles.buttonText}>Generate QR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={imgSaveHandler}>
            <Text style={styles.buttonText}> Share and Save</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
