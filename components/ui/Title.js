import { Text, StyleSheet } from "react-native";

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#ffffff',
    textAlign: "center",
    borderWidth: 4,
    borderColor: '#ffffff',
    padding: 12,
  },
});
