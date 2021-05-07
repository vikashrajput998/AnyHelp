import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
  CheckBox,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const {height, width} = Dimensions.get('window');
class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('./Assests/bookingbg.jpeg')}
          style={{flex: 1}}>
          <View
            style={{
              width: width * 1,
              height: height * 0.06,
              alignItems: 'center',
              flexDirection: 'row',
              //   justifyContent: 'center',
              //    backgroundColor: 'orange',
            }}>
            <View>
              <TouchableOpacity
                style={{justifyContent: 'center', padding: 5}}
                onPress={() => this.props.navigation.goBack()}>
                <AntIcon name="arrowleft" style={{fontSize: height * 0.05}} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                //  backgroundColor: 'pink',
                width: width * 0.8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                LogIn
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: height * 0.08,
              width: width * 0.94,
              height: height * 0.6,
              alignSelf: 'center',
              alignContent: 'center',
              //   justifyContent: 'center',
              backgroundColor: '#26323D',
              borderRadius: 25,
              shadowOffset: {width: 10, height: 20},
              shadowColor: '#7A8D76',
              shadowRadius: 3,
              shadowOpacity: 1,
              elevation: 5,
              borderColor: 'black',
              borderWidth: 3,
            }}>
            <View
              style={{
                width: width * 0.8,
                height: height * 0.09,
                backgroundColor: '#7A8D76',
                alignSelf: 'center',
                justifyContent: 'center',
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                borderBottomWidth: 3,
                borderBottomColor: 'black',
                borderRightColor: 'black',
                borderLeftColor: 'black',
                borderLeftWidth: 3,
                borderRightWidth: 3,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: height * 0.05,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Log In
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                width: width * 0.9,
                height: height * 0.1,
                // backgroundColor: 'pink',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                style={{
                  marginTop: 5,
                  alignSelf: 'center',
                  width: width * 0.88,
                  height: height * 0.09,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  borderWidth: 3,
                  borderColor: '#7A8D76',
                }}
                placeholder="Enter Your Email"
              />
            </View>
            <View
              style={{
                marginTop: 20,
                width: width * 0.9,
                height: height * 0.1,
                // backgroundColor: 'pink',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                style={{
                  marginTop: 5,
                  alignSelf: 'center',
                  width: width * 0.88,
                  height: height * 0.09,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  borderWidth: 3,
                  borderColor: '#7A8D76',
                }}
                placeholder="Enter Your Password"
              />
            </View>
            <View
              style={{
                width: width * 0.8,
                height: height * 0.06,
                // backgroundColor: 'pink',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: height * 0.035,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Show Password
              </Text>
              {/* <CheckBox
                style={{
                  width: width * 0.01,
                  height: 0.005,
                  backgroundColor: 'white',
                }}></CheckBox> */}
            </View>
            <View
              style={{
                padding: 5,
                marginTop: 10,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: width * 0.9,
                height: height * 0.09,
                //    backgroundColor: 'pink',
                //   flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('')}
                style={{
                  //   marginLeft: 1,
                  padding: 10,
                  backgroundColor: '#7A8D76',
                  height: height * 0.07,
                  width: width * 0.85,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: height * 0.04,
                  borderWidth: 2,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  LogIn
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: width * 0.85,
                height: height * 0.05,
                // backgroundColor: 'pink',
                marginTop: 5,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  padding: 7,
                  alignSelf: 'flex-start',
                  width: width * 0.65,
                  height: height * 0.05,
                  fontWeight: 'bold',
                  fontSize: height * 0.025,
                  color: 'white',
                }}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('signUp')}>
                <Text
                  style={{
                    padding: 7,
                    alignSelf: 'flex-start',
                    width: width * 0.65,
                    height: height * 0.05,
                    fontWeight: 'bold',
                    fontSize: height * 0.025,
                    color: '#7A8D76',
                    textDecorationLine: 'underline',
                  }}>
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default Profile;
