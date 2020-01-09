import { AsyncStorage } from "react-native";

const _storeData = async (sus) => {
  try {
    if (AsyncStorage.getItem('sustenance') !== null) {
      await AsyncStorage.setItem('sustenance', JSON.stringify(sus));
    } else {
      const data = await JSON.parse(_retrieveData());
      data.append(sus)
    }
  } catch (error) {
    console.log(error);
  }
}

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('sustenance');
    if (value !== null) {
      return values
    }
  } catch (error) {
    console.log(error)
  }
}

export {
  _storeData,
  _retrieveData
}