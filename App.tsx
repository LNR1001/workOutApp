/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.buffer}>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />
      </View>
      <View style={styles.buffer}>
        <Button
          title={'Go to Gym'}
          onPress={() => navigation.navigate('Gym')}
        />
      </View>
    </>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return (
    <>
      <Button title="Go to gym" onPress={() => navigation.navigate('Gym')} />
      <Text>This is {route.params.name}'s profile</Text>
    </>
  );
};

const GymScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Button title={'Gym App'} />
      <View style={styles.buffer}>
        <Button
          title={'BMI Calculator'}
          onPress={() => navigation.navigate('BMI')}
        />
      </View>
    </SafeAreaView>
  );
};

const BmiScreen = ({navigation}) => {
  const [heightText, onChangeHeightText] = React.useState('');
  const [weightText, onChangeWeightText] = React.useState('');
  const handleTextChange = (inputText: string) => {
    // Remove any non-numeric characters
    const numericInput = inputText.replace(/[^0-9]/g, '');
    onChangeHeightText(numericInput);
    onChangeWeightText(numericInput);
  };
  const bmiScore = ((weightText / (heightText ** 2)) * 703).toFixed(1);
  return (
    <SafeAreaView>
      <View>
      <TextInput
        style={styles.textInput}
        keyboardType={'numeric'}
        onChangeText={onChangeHeightText}
        value={heightText}
        placeholder={'Please enter height'}
      />
      </View>
      
      <View style={{paddingTop: 10}}>
      <TextInput
       style={styles.textInput}
       keyboardType={'numeric'}
       onChangeText={onChangeWeightText}
       value={weightText}
       placeholder={'Please enter weight'}
      />
      </View>
      <View>
        <Text style ={{padding: 10, fontSize: 32}}>BMI score: {bmiScore}</Text>
      </View>
    </SafeAreaView>
  );
};

// const BmiCalculator = (heightText,weightText) => {
//   const bmiScore = (weightText / heightText ** 2) * 703
//   return (
//     <View>
//       <Text style ={{padding: 10, fontSize: 32}}>{bmiScore}</Text>
//     </View>
//   );
// };

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Welcome To Gym App',
              headerStyle: {backgroundColor: '#7648c9'}, ///header background color
              headerTintColor: 'white', ///header text color
              contentStyle: {backgroundColor: '#7648c9'},
            }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Gym" component={GymScreen} />
          <Stack.Screen name="BMI" component={BmiScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  buffer: {
    alignSelf: 'center',
    top: 20,
    // margin: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput: {
    fontSize: 24,
  },
  safeArea: {
    flex: 1,
    // backgroundColor: '#0c0c0c',
  },
  container: {
    // flex: 1,
    // paddingHorizontal: 16,
    // paddingTop: 16,
    // backgroundColor: '#0c0c0c',
  },
});

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
//
// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Hell ">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
//
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
