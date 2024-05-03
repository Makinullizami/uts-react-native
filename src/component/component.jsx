import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const component = ({label, nama}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.Menu}>
        <Text style={styles.textIcon}>
          {label}
          {nama}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default component;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 100,
  },
  Menu: {
    borderWidth: 3,
    borderColor: 'white',
    width: 90,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFB266',
  },
  textIcon: {
    color: 'white',
    fontWeight: 'bold',
  },
});
