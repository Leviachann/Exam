import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import FavoritesButton from './FavoritesButton';
import CartButton from './CartButton';

const ProductBox = ({ title, count, img, onClick }: any) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.btn}>
      <Image source={{ uri: img }} style={styles.imgs} resizeMode="cover" />
      <View style={styles.lowerSection}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
        <Text style={styles.count}>{count}</Text><Text style={styles.price}>€ / piece</Text></View>
        <View style={styles.row}>
        <FavoritesButton></FavoritesButton>
        <CartButton></CartButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn:{ 
    marginTop: 30 , 
    flexDirection:'row'
  },
  row:{
    flexDirection:'row',
  },
  imgs: {
    height: 128,
    width: 177,
    borderRadius: 8,
  },
  lowerSection: {
    paddingHorizontal: 20,
  },
  title: {
    color: '#2D0C57',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 5,
  },
  price:{
    color:'#9586A8', 
    paddingVertical:6, 
    paddingHorizontal:2
  },
  count: {
    fontWeight:'700',
    color: '#2D0C57',
    fontSize: 22,
    paddingBottom: 10,
  },
});

export default ProductBox;
