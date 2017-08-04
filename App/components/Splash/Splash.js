import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native';
  //USE: set REACT_NATIVE_PACKAGER_HOSTNAME=ip
  //to set the ip for expo
Splash.propTypes = {

};

export default function Splash (props) {
    return (
      <View style={styles.container}>
        <Text>
          Splash
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});