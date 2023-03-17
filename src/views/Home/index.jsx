import { ScaledSheet } from 'react-native-size-matters'
import { BackHandler, View } from 'react-native'
import React from 'react'
import { Button } from '@react-native-material/core';
import Logo from './components/Logo';

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonsContainer}>
        <Button titleStyle={styles.font} title='COMENZAR' style={styles.button} onPress={() => navigation.navigate('game')} />
        <Button titleStyle={styles.font} title='PUNTUACIONES' style={styles.button} />
        <Button titleStyle={styles.font} title='SALIR' style={styles.button} onPress={() => BackHandler.exitApp()} />
      </View>
    </View>
  )
}

export default Home

const styles = ScaledSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    gap: '60@s',
    marginTop: '150@s'
  },
  buttonsContainer: {
    gap: '10@s'
  },
  button: {
    color: 'red',
    alignSelf: 'center',
    width: '150@s'
  },
  font: {
    fontSize: '14@s'
  }
});
