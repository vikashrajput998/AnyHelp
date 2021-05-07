import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');
class showDetail extends Component {
  render() {
    return (
      <SafeAreaView>
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
                Details
              </Text>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.32,
              height: height * 0.15,
              backgroundColor: 'pink',
              marginTop: 5,
              marginLeft: 10,
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
              height: height * 0.05,
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
          </View>
          <View
            style={{
              alignContent: 'center',
              alignSelf: 'center',
              width: width * 0.95,
              height: height * 0.135,
              //   backgroundColor: 'pink',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: 'normal',
                fontSize: 17,
              }}>
              You might get warnings related to peer dependencies after
              installation. They are usually caused by incorrect version ranges
              specified in some packages. You can safely ignore most warnings as
              long as your app builds
            </Text>
          </View>
          <View
            style={{
              marginTop: 1,
              width: width * 0.5,
              //   backgroundColor: 'pink',
              height: height * 0.03,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                // padding: 8,
                textAlign: 'left',
                alignContent: 'center',
                justifyContent: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              Notes :
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              width: width * 1,
              height: height * 0.16,
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: '#75888C',
              borderWidth: 3,
              borderColor: 'black',
            }}>
            <TextInput
              style={{
                marginTop: 5,
                width: width * 0.88,
                height: height * 0.14,
                backgroundColor: 'white',
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                borderRadius: 5,
              }}
              placeholder="Add Booking about your shop"
            />
          </View>
          <View
            style={{
              marginTop: 7,
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              width: width * 0.97,
              height: height * 0.05,
              //   backgroundColor: 'pink',
              flexDirection: 'row',
              borderWidth: 3,
              borderColor: 'black',
              borderRadius: 3,
            }}>
            <Text
              style={{
                padding: 8,
                textAlign: 'left',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Booking Date
            </Text>
            <View style={{alignItems: 'flex-end', width: width * 0.57}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'green',
                  fontWeight: 'normal',
                  fontSize: 20,
                }}>
                May 05,2021
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 7,
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              width: width * 0.97,
              height: height * 0.05,
              //   backgroundColor: 'pink',
              flexDirection: 'row',
              borderWidth: 3,
              borderColor: 'black',
              borderRadius: 3,
            }}>
            <Text
              style={{
                padding: 8,
                textAlign: 'left',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Booking Time
            </Text>
            <View style={{alignItems: 'flex-end', width: width * 0.57}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'green',
                  fontWeight: 'normal',
                  fontSize: 20,
                }}>
                04:40
              </Text>
            </View>
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
              onPress={() => this.props.navigation.navigate('logIn')}
              style={{
                //   marginLeft: 1,
                padding: 10,
                backgroundColor: '#25383C',
                height: height * 0.06,
                width: width * 0.85,
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
                  color: 'white',
                }}>
                Request For Laundry Slot
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default showDetail;
