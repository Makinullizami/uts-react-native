import {StyleSheet, Text, Image, View, ImageBackground} from 'react-native';
import React from 'react';

const Minuman = () => {
  return (
    <ImageBackground
      source={require('../image/background.jpeg')}
      style={{width: '100%', height: '100%'}}>
      <View style={{width: 393, height: 230}}>
        <View style={styles.atas}>
          <View style={styles.header}>
            <Text style={styles.txtheader}>MINUMAN</Text>
          </View>
          <Image
            source={require('../image/Mnmjudul.jpeg')}
            style={{
              width: 300,
              height: 150,
              marginTop: 10,
              marginLeft: 45,
              borderBottomLeftRadius: 70,
              borderTopRightRadius: 70,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderWidth: 5,
              borderColor: '#FF9933',
            }}
          />
        </View>
        <View style={styles.menuheader}>
          <Text style={styles.txt}>Menu</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <View style={styles.menucart}>
            <Image
              source={require('../image/Americano.jpeg')}
              style={styles.menu}
            />
            <Text style={styles.namamenu}>Americano</Text>
          </View>
          <View style={styles.menucart}>
            <Image
              source={require('../image/Espresso.jpeg')}
              style={styles.menu}
            />
            <Text style={styles.namamenu}>Espresso</Text>
          </View>
          <View style={styles.menucart}>
            <Image
              source={require('../image/latte.jpeg')}
              style={styles.menu}
            />
            <Text style={styles.namamenu}>Latte</Text>
          </View>
          <View style={styles.menucart}>
            <Image
              source={require('../image/cappucino.jpeg')}
              style={styles.menu}
            />
            <Text style={styles.namamenu}>Cappucino</Text>
          </View>
          <View style={styles.menucart}>
            <Image
              source={require('../image/macchiato.jpeg')}
              style={styles.menu}
            />
            <Text style={styles.namamenu}>Macchiato</Text>
          </View>
          <View style={styles.menucart}>
            <Image
              source={require('../image/coklat.jpeg')}
              style={styles.menu}
            />
            <Text style={styles.namamenu}>Choclate</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Minuman;

const styles = StyleSheet.create({
  header: {
    margin: 0,
    padding: 0,
    backgroundColor: '#FFB266',
  },
  txtheader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  atas: {
    paddingTop: 0,
    margin: 0,
    width: 393,
    height: 100,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    backgroundColor: '#FFB266',
  },
  menuheader: {
    marginLeft: 120,
    marginRight: 120,
    marginTop: 110,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFB266',
    borderColor: 'white',
    borderWidth: 2,
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  menu: {
    width: 180,
    height: 200,
    borderRadius: 10,
    margin: 5,
  },
  menucart: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  namamenu: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFB266',
  },
});
