import {Button, StyleSheet, View} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container2}>
      <View style={styles.buttonSpacing}>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
          color={'#0c0c0c'}
        />
      </View>
      <View>
        <Button
          title={'Go to Gym'}
          onPress={() => navigation.navigate('Gym')}
          color={'#0c0c0c'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#7648c9',
    paddingHorizontal: 100,
    paddingVertical: 10,
    // alignItems: 'center',  ///can't change size of button if this enabled
    //justifyContent: 'center',
  },
  buttonSpacing: {
    height: 50,
  },
});

export default HomeScreen;
