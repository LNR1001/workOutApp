import React, {useState, useEffect} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {StyleSheet, Button, View} from 'react-native';

const RoundButton = ({
  title,
  onPress,
  imageSource,
  buttonStyle,
  onLongPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <ImageBackground
        source={imageSource}
        style={styles.backgroundImage}
        resizeMode={'cover'}>
        {/*<Text style={styles.buttonText}>{title}</Text>*/}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '94%',
    height: '115%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7648c9',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
    marginHorizontal: 30,
    width: 80,
    height: 55,
    // flex: 1,
  },
});
export default RoundButton;
