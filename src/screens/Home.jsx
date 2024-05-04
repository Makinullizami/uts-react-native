import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Component from '../component/Component';

const Minuman = [
  {id: 1, label: 'Americano'},
  {id: 2, label: 'Espresso'},
  {id: 3, label: 'Latte'},
  {id: 4, label: 'Cappuccino'},
  {id: 5, label: 'Macchiato'},
];

const Makanan = [
  {id: 6, nama: 'NasGor'},
  {id: 7, nama: 'MieGor'},
  {id: 8, nama: 'Kentang'},
  {id: 9, nama: 'Gorengan'},
  {id: 10, nama: 'Siomay'},
];

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../image/background.jpeg')}
      style={{width: '100%', height: '100%'}}>
      <View>
        <View style={{width: 393, height: 230}}>
          <View style={styles.atas}>
            <View>
              <Text style={styles.header}>CafeKita</Text>
            </View>
            <Image
              source={require('../image/atas.jpeg')}
              style={{
                width: 300,
                height: 150,
                marginTop: 15,
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
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Minuman')}>
          <Text style={styles.txt}>Minuman</Text>
        </TouchableOpacity>
        <FlatList
          data={Minuman}
          renderItem={({item}) => <Component label={item.label} />}
          horizontal={true}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Image
            source={require('../image/Americano.jpeg')}
            style={styles.menu}
          />
          <Image
            source={require('../image/Espresso.jpeg')}
            style={styles.menu}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Makanan')}>
          <Text style={styles.txt}>Makanan</Text>
        </TouchableOpacity>
        <FlatList
          data={Makanan}
          renderItem={({item}) => <Component nama={item.nama} />}
          horizontal={true}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Image source={require('../image/NasGor.jpeg')} style={styles.menu} />
          <Image source={require('../image/MiGor.jpeg')} style={styles.menu} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    paddingBottom: 15,
    marginTop: 10,
    marginLeft: 15,
    backgroundColor: '#FFB266',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
  txt: {
    marginBottom: 5,
    margin: 10,
    fontStyle: 'italic',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  atas: {
    paddingTop: 0,
    margin: 0,
    width: 393,
    height: 150,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    backgroundColor: '#FFB266',
  },
  menu: {
    width: 180,
    height: 200,
    borderRadius: 10,
    margin: 5,
  },
});
