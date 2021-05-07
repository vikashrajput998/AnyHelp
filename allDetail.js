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
  FlatList,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const {height, width} = Dimensions.get('window');

class allDetail extends Component {
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
                All Details
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              width: width * 0.96,
              height: height * 0.82,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#CFD8DC',
              borderRadius: 20,
              borderWidth: 5,
            }}>
            <View
              style={{
                width: width * 0.95,
                height: height * 0.15,
                backgroundColor: 'pink',
              }}></View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default allDetail;
