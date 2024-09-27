import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GreenButton = ({ title, onPress, style }: any) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={[styles.mainTitle, style]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    paddingVertical: 20,
    backgroundColor: '#0BCE83',
    borderRadius: 8,
    marginTop: 30,
  },
});

export default GreenButton;
