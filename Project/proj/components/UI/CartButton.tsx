import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const CartButton = ({ onClick }: any) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
        <AntDesign name="shoppingcart" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{ 
        borderRadius:8, 
        paddingVertical:10,
        paddingHorizontal:28, 
        width:'35%', 
        backgroundColor:'#0BCE83'
    }
});

export default CartButton;
