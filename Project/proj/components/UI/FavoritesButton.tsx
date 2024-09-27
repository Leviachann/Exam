import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const FavoritesButton = ({ onClick }: any) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
        <AntDesign name="hearto" size={24} color="#9586A8" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
     container:{ 
        borderColor:'#D9D0E3', 
        borderWidth:1,
        borderRadius:8, 
        paddingVertical:10,
        paddingHorizontal:28, 
        width:'35%', 
        marginRight:10
    },
});

export default FavoritesButton;
