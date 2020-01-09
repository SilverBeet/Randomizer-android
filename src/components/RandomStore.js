import AsyncStorage from '@react-native-community/async-storage';

const _storeData = async (sus) => {
  try {
    if (await _retrieveData() !== null) {
      const result = JSON.parse(await _retrieveData());
      result.push(sus);
      await AsyncStorage.setItem('sustenance', JSON.stringify(result));
    } else {
      const data = [];
      data.push(sus)
      await AsyncStorage.setItem('sustenance', JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
}

const _clearData = async () => await AsyncStorage.clear();

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('sustenance');
    if (value !== null) {
      return value
    }
    return null
  } catch (error) {
    console.log(error)
  }
}

export {
  _storeData,
  _retrieveData,
  _clearData
}