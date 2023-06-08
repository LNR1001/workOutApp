/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/*----------------------- Test Material Bottom Tab ------------*/
import React from 'react';
import MainNavigator from './source/navigation/MainNavigator';
const App = () => {
  return <MainNavigator />;
};

export default App;

// import React, {useState, useEffect} from 'react';
// import type {PropsWithChildren} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import RoundButton from './RoundButton';
//
// import {
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   //Text,
//   useColorScheme,
//   View,
//   Button,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
//   Text,
//   TextStyle,
//   Modal,
// } from 'react-native';

// import {Text, Block, Card, NavBar, Icon} from 'galio-framework';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Stack = createStackNavigator();
// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={styles.container2}>
//       <View style={styles.buttonSpacing}>
//         <Button
//           title="Go to Jane's profile"
//           onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
//           color={'#0c0c0c'}
//         />
//       </View>
//       <View>
//         <Button
//           title={'Go to Gym'}
//           onPress={() => navigation.navigate('Gym')}
//           color={'#0c0c0c'}
//         />
//       </View>
//     </View>
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return (
//     <>
//       <Button title="Go to gym" onPress={() => navigation.navigate('Gym')} />
//       <Text>This is {route.params.name}'s profile</Text>
//     </>
//   );
// };
//
// const GymScreen = ({navigation, route}) => {
//   return (
//     <SafeAreaView style={styles.container2}>
//       <View style={styles.buttonSpacing}>
//         <Button
//           title={'BMI Calculator'}
//           onPress={() => navigation.navigate('BMI')}
//         />
//       </View>
//       <View style={styles.buttonSpacing}>
//         <Button
//           title={'Go to Rep Tracker'}
//           onPress={() => navigation.navigate('Tracker')}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };
//
// const BmiScreen = ({navigation}) => {
//   const [text, onChangeText] = React.useState('');
//   const [heightText, onChangeHeightText] = React.useState('');
//   const [weightText, onChangeWeightText] = React.useState('');
//   const handleTextChange = (inputText: string) => {
//     // Remove any non-numeric characters
//     const numericInput = inputText.replace(/[^0-9]/g, '');
//     onChangeText(numericInput);
//     onChangeHeightText(numericInput);
//     onChangeWeightText(numericInput);
//   };
//   const bmiScore = ((weightText / heightText ** 2) * 703).toFixed(1);
//   return (
//     <SafeAreaView>
//       <View>
//         <TextInput
//           style={styles.textInput}
//           keyboardType={'numeric'}
//           onChangeText={onChangeHeightText}
//           value={heightText}
//           placeholder={'Please enter height'}
//         />
//       </View>
//       <View style={{paddingTop: 10}}>
//         <TextInput
//           style={styles.textInput}
//           keyboardType={'numeric'}
//           onChangeText={onChangeWeightText}
//           value={weightText}
//           placeholder={'Please enter weight'}
//         />
//       </View>
//       <View>
//         <Text style={{padding: 10, fontSize: 32}}>BMI Score: {bmiScore}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };
//
// const WorkoutButton = ({buttonStyle, dotContainer}) => {
//   const [dots, setDots] = useState<{}[]>([]);
//   const [modalVisible, setModalVisible] = useState(false); //first modal
//   const [settingModal, setSettingModal] = useState(false); //settings
//   const [setsCount, setSetsCount] = useState(0);
//   const [longPressOccurred, setLongPressOccurred] = useState(false);
//   const [repLimit, setRepLimit] = useState(5); //Max number of Reps
//   const [setLimit, setSetLimit] = useState(5); //Max number of Sets
//
//   const handlePress = () => {
//     if (!longPressOccurred) {
//       if (dots.length < repLimit) {
//         const updatedDots = [...dots, {}];
//         setDots(updatedDots);
//       } else {
//         if (setsCount < setLimit) {
//           setSetsCount(count => count + 1);
//         } else {
//           setModalVisible(true);
//         }
//         setDots([]);
//       }
//       console.log('Button Pressed!');
//     }
//     setLongPressOccurred(false);
//   };
//   const handleLongPress = () => {
//     setSettingModal(true);
//   };
//   const handleReset = () => {
//     setModalVisible(false);
//     setSetsCount(0);
//     setDots([]);
//   };
//
//   const handleExit = () => {
//     setModalVisible(false);
//     setSettingModal(false);
//   };
//   const Section = ({label, value}) => {
//     return (
//       <View style={styles.container}>
//         <View style={styles.textContainer}>
//           <Text style={styles.headerText}>{label}</Text>
//         </View>
//         <View style={styles.textContainer}>
//           <Text style={styles.repValue}>{value}</Text>
//         </View>
//         {/*<View style={styles.box}></View>*/}
//       </View>
//     );
//   };
//
//   return (
//     <View>
//       <View
//         style={
//           {
//             // paddingHorizontal: 10, //y-pos
//             // paddingVertical: -60, //x-pos
//           }
//         }>
//         <Section label="Reps:" value={dots.length} />
//         <Section label="Sets:" value={setsCount.valueOf()} />
//       </View>
//       <RoundButton
//         title={'Bench Button'}
//         onPress={handlePress}
//         onLongPress={handleLongPress}
//         imageSource={require('./benchPress.png')}
//         buttonStyle={buttonStyle}
//       />
//       <View style={dotContainer}>
//         {dots.map((dot, index) => (
//           <View key={index} style={styles.greenDot} />
//         ))}
//       </View>
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>Done with Sets Want to Reset?</Text>
//             <View style={styles.modalButtonContainer}>
//               <Button title="Reset" onPress={handleReset} />
//               <Button title="Exit" onPress={handleExit} />
//             </View>
//           </View>
//         </View>
//       </Modal>
//       <Modal
//         animationType={'fade'}
//         transparent={true}
//         visible={settingModal}
//         onRequestClose={() => setSettingModal(false)}>
//         <View style={styles.settingContainer}>
//           <Text style={styles.modalText}>Settings</Text>
//           <View style={styles.modalSettingContainer}>
//             <Text style={styles.modalText}>Set Limit:</Text>
//             <TextInput
//               style={styles.modalSettingText}
//               value={setLimit.toString()}
//               placeholder={'enter number'}
//               onChangeText={text => {
//                 const value = parseFloat(text);
//                 if (!isNaN(value)) {
//                   setSetLimit(value.toString);
//                 }
//               }}
//               keyboardType="numeric"
//             />
//           </View>
//           <View style={styles.modalSettingContainer}>
//             <Text style={styles.modalText}>Rep Limit:</Text>
//             <TextInput
//               style={styles.modalSettingText}
//               value={repLimit.toString()}
//               onChangeText={text => setRepLimit(parseInt(text))}
//               keyboardType="numeric"
//               placeholder={'enter number'}
//             />
//             <View style={styles.modalButtonContainer}>
//               <Button title="Reset" onPress={handleReset} />
//               <Button title="Exit" onPress={handleExit} />
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };
// const WorkOutTrackerScreen = ({navigation}) => {
//   return (
//     <View>
//       <WorkoutButton
//         buttonStyle={styles.benchPressButton}
//         dotContainer={styles.benchPressDotContainer}
//       />
//     </View>
//   );
// };
// const App = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{
//               title: 'Welcome To Gym App',
//               headerStyle: {
//                 backgroundColor: '#7648c9', ///header background color
//                 height: 50, //header size
//               },
//               headerTintColor: 'white', ///header text color
//               headerTitleStyle: {fontSize: 20},
//               headerBackTitle: '',
//             }}
//           />
//           <Stack.Screen name="Profile" component={ProfileScreen} />
//           <Stack.Screen
//             name="Gym"
//             component={GymScreen}
//             options={{
//               title: 'Gym',
//               headerStyle: {
//                 backgroundColor: '#7648c9', ///header background color
//                 height: 50, //header size
//               },
//               headerTintColor: 'white', ///header text color
//               headerTitleStyle: {fontSize: 20},
//             }}
//           />
//           <Stack.Screen name="BMI" component={BmiScreen} />
//           <Stack.Screen name="Tracker" component={WorkOutTrackerScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container2: {
//     flex: 1,
//     backgroundColor: '#7648c9',
//     paddingHorizontal: 100,
//     paddingVertical: 10,
//     // alignItems: 'center',  ///can't change size of button if this enabled
//     //justifyContent: 'center',
//   },
//   buttonSpacing: {
//     height: 50,
//   },
//   gymScreenBmiButton: {
//     flex: 1,
//     backgroundColor: '#7648c9',
//     paddingHorizontal: 100,
//     paddingVertical: 60,
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
//   textInput: {
//     fontSize: 24,
//   },
//   safeArea: {
//     flex: 1,
//     //alignItems: 'flex-start',
//   },
//   button: {
//     backgroundColor: '#7648c9',
//     borderRadius: 20,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginVertical: 20,
//     marginHorizontal: 30,
//     width: 80,
//     height: 55,
//     // flex: 1,
//   },
//   benchPressButton: {
//     backgroundColor: '#7648c9',
//     borderRadius: 20,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginVertical: 5,
//     marginHorizontal: 30,
//     width: 90,
//     height: 55,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   backgroundImage: {
//     width: '94%',
//     height: '115%',
//     // justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dotContainer: {
//     flexDirection: 'column',
//     marginTop: -15,
//     //alignItems: 'center',
//   },
//   benchPressDotContainer: {
//     flexDirection: 'column',
//     marginTop: -5,
//     left: 5,
//   },
//   greenDot: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: 'green',
//     marginLeft: 65,
//     marginVertical: 3,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#752BFD',
//     padding: 30,
//     borderRadius: 120,
//   },
//   modalText: {
//     fontSize: 20,
//     left: 20,
//     // marginBottom: 10,
//   },
//   settingContainer: {
//     // flexDirection: 'column',
//     left: 0,
//     bottom: -420,
//     backgroundColor: '#776893',
//   },
//   modalSettingContainer: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // flexDirection: 'row',
//     //backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalSettingText: {
//     fontSize: 18,
//     bottom: 10,
//     left: 20,
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     // padding: 10,
//     left: 60,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#755462',
//     borderRadius: 90,
//     //backgroundColor: 'black',
//   },
//   repValue: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#755462',
//     left: 40,
//   },
//   container: {
//     // flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textContainer: {
//     // marginBottom: -5, // Optional spacing between text elements
//     // marginLeft: -50,
//     right: 130,
//     width: 100,
//     backgroundColor: 'rgba(75,94,241,0.91)',
//     //justifyContent: 'center', // Center the text horizontally
//   },
//   text: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//   },
// });
//
// export default App;
