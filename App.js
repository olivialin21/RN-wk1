import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>110819023</Text>
      <Text style={styles.font}>林渝珊</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8a75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  num:{
    fontSize: 24,
    color: '#ffffff',
  },
  font: {
    fontSize: 36,
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
