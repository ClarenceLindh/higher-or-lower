import { View, Text, StyleSheet } from "react-native";

import Colors from '../../utils/colors'

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary3,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent1,
    fontSize: 26,
  },
});
