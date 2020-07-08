import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 22, paddingLeft: 10 }}>
          Settings
        </Text>
      </View>

      <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
        <View
          style={{
            flex: 3,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={require('../assets/images/0.jpeg')}
            style={{ width: 70, height: 70, borderRadius: 40 }}
          />
        </View>
        <View
          style={{
            flex: 8,
            justifyContent: 'center',
            paddingHorizontal: 10,
            height: 100
          }}
        >
          <Text style={{ fontSize: 20 }}>James Osei</Text>
          <Text>Apple ID, iCloud, iTunes & AppStore</Text>
        </View>
        <View style={styles.avatar}>
          <Ionicons name="ios-arrow-forward" size={26} />
        </View>
      </View>

      <View style={styles.finishing}>
        <View style={styles.finishingSubView}>
          <Text style={{ paddingLeft: 10 }}>
            Finish setting up your android
          </Text>
          <View style={styles.warning}>
            <Text style={styles.warningText}>1</Text>
          </View>
        </View>
        <View style={styles.avatar}>
          <Ionicons name="ios-arrow-forward" size={26} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#f3f3f3'
  },
  finishing: {
    backgroundColor: '#fff',
    height: 40,
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#dedede'
  },
  finishingSubView: {
    flex: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  warning: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'red'
  },
  warningText: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default HomeScreen;
