import * as React from 'react';

import { styles } from './style';
import { Text, View } from '../../components/Themed';
import EditScreenInfo from '../../components/EditScreenInfo';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <EditScreenInfo path='/screens/TabOneScreen.js' />
    </View>
  );
}

export { HomeScreen };
