import { StyleSheet, View, TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

const SearchInput = ({ value, onChangeText }:any) => {
  return (
    <View style={styles.inputContainer}>
      <Fontisto style={{ marginRight: 20 }} name="search" size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder='Search'
        value={value}  
        onChangeText={onChangeText}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D9D0E3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 27,
    marginTop: 20,
  },
  input: {
    color: '#9586A8',
    flex: 1, 
  },
});

export default SearchInput;
