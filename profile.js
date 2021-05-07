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

              flexDirection: 'row',
              justifyContent: 'flex-end',
              //   backgroundColor: 'black',
            }}>
            <View>
              <AntIcon
                name="logout"
                style={{padding: 10, fontSize: height * 0.025}}
              />
              <Text
                style={{
                  alignContent: 'center',
                  textAlign: 'right',
                  fontSize: height * 0.02,
                  fontWeight: 'normal',
                  color: 'black',
                }}>
                LogOut
              </Text>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.4,
              height: height * 0.18,
              backgroundColor: 'white',
              marginTop: 5,
              borderRadius: 75,
              borderColor: 'black',
              borderWidth: 3,
            }}>
            <EntypoIcon name="images" style={{fontSize: height * 0.035}} />
          </View>
          <View
            style={{
              alignContent: 'center',
              alignSelf: 'center',
              width: width * 1,
              height: height * 0.08,
              //   backgroundColor: 'pink',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Vikas Kumar
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: 'normal',
                fontSize: 20,
              }}>
              vikashrajput998@gmail.com
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              width: width * 0.65,
              height: height * 0.06,
              //   backgroundColor: 'white',
              borderBottomColor: 'black',
              borderBottomWidth: 5,
              borderRightColor: 'black',
              borderRightWidth: 5,
              borderBottomEndRadius: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 37,
              }}>
              Shop Details
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              alignSelf: 'center',
              width: width * 0.9,
              height: height * 0.48,
              backgroundColor: '#25383C',
              borderRadius: 20,
              borderWidth: 3,
              shadowOffset: {width: 10, height: 10},
              shadowColor: '#25383C',
              shadowRadius: 3,
              shadowOpacity: 1,
              elevation: 5,
            }}>
            <Text
              style={{
                padding: 10,
                textAlign: 'left',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              Rate ($ per hour)
            </Text>
            <View
              style={{
                width: width * 0.9,
                height: height * 0.08,
                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: '#75888C',
                borderWidth: 3,
                borderColor: 'white',
              }}>
              <TextInput
                style={{
                  marginTop: 5,
                  width: width * 0.85,
                  height: height * 0.06,
                  backgroundColor: 'white',
                  borderBottomColor: 'black',
                  borderBottomWidth: 2,
                }}
                placeholder="Rate"
              />
            </View>
            <Text
              style={{
                padding: 10,
                textAlign: 'left',
                color: 'white',
                fontWeight: 'normal',
                fontSize: 15,
                // textDecorationLine: 'underline',
              }}>
              Write Something....
            </Text>
            <View
              style={{
                width: width * 0.9,
                height: height * 0.18,
                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: '#75888C',
                borderWidth: 3,
                borderColor: 'white',
              }}>
              <TextInput
                style={{
                  marginTop: 5,
                  width: width * 0.85,
                  height: height * 0.16,
                  backgroundColor: 'white',
                  borderBottomColor: 'black',
                  borderBottomWidth: 2,
                }}
                placeholder="Add Something about your shop"
              />
            </View>
            <View
              style={{
                padding: 5,
                marginTop: 10,
                alignSelf: 'center',
                width: width * 0.9,
                height: height * 0.09,
                // backgroundColor: 'pink',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('showDetail')}
                style={{
                  //   marginLeft: 1,
                  padding: 10,
                  backgroundColor: 'orange',
                  height: height * 0.07,
                  width: width * 0.28,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  borderRadius: height * 0.03,
                  borderWidth: 2,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={{
                  marginLeft: 5,
                  padding: 10,
                  backgroundColor: 'orange',
                  height: height * 0.07,
                  width: width * 0.28,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: height * 0.03,
                  borderWidth: 2,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={{
                  marginLeft: 5,
                  padding: 10,
                  backgroundColor: 'orange',
                  height: height * 0.07,
                  width: width * 0.28,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  borderRadius: height * 0.03,
                  borderWidth: 2,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Exit
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
