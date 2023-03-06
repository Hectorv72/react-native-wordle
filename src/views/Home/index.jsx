import { ScaledSheet } from 'react-native-size-matters'
import { Text, View } from 'react-native'
import React from 'react'
import { ListItem } from '@react-native-material/core';

const Home = ({ navigation }) => {

  const listTools = [
    { label: 'Game', route: 'game' }
  ];

  return (
    <View style={styles.container}>
      {
        listTools.map((tool, index) => <ListItem key={`tool-item-${0}`} title={tool.label} onPressOut={() => navigation.navigate(tool.route)} />)
      }
    </View>
  )
}

export default Home

const styles = ScaledSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
