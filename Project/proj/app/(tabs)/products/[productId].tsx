import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router'; 
import BigTitle from '@/components/UI/BigTitle';
import Description from '@/components/UI/Description';
import GreenButton from '@/components/UI/GreenButton';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Product() {
  const params = useLocalSearchParams();

  const name = Array.isArray(params.name) ? params.name[0] : params.name;
  const img = Array.isArray(params.img) ? params.img[0] : params.img;
  const price = Array.isArray(params.price) ? params.price[0] : params.price;
  const weight = Array.isArray(params.weight) ? params.weight[0] : params.weight;
  const country = Array.isArray(params.country) ? params.country[0] : params.country;
  const description = Array.isArray(params.description) ? params.description[0] : params.description;

  console.log(name, "name"); 

  return (
    <ImageBackground 
      source={{ uri: img }} 
      style={styles.safeArea} 
      resizeMode="cover" 
    >
      <View style={styles.drawer}>
        <BigTitle title={name} style={styles.title} />
        <View style={styles.row}>
          <Text style={styles.count}>{price}</Text>
          <Text style={styles.price}>€ / piece</Text>
        </View>
        <Text style={styles.portion}>{weight}/ piece</Text>
        <Text style={styles.country}>{country}</Text>
        <Description style={styles.description} content={description} />
        <View>
          <TouchableOpacity style={styles.container}>
            <AntDesign name="hearto" size={24} color="#9586A8" />
          </TouchableOpacity>
        </View>
        <GreenButton title='Add To Cart' onPress={() => {}} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { 
    borderColor: '#D9D0E3', 
    borderWidth: 1,
    borderRadius: 8, 
    paddingVertical: 10,
    paddingHorizontal: 28, 
    width: '25%', 
    marginRight: 10,
  },
  country: {
    color: '#2D0C57',
    fontSize: 22,
    fontWeight: '700',
    paddingVertical: 10,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  drawer: {
    backgroundColor: '#F6F5F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
  title: {
    marginTop: 18,
  },
  description: {
    marginTop: 18,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  price: {
    color: '#9586A8',
    fontSize: 24,
    paddingVertical: 6, 
    paddingHorizontal: 2,
  },
  count: {
    fontWeight: '700',
    color: '#2D0C57',
    fontSize: 32,
    paddingBottom: 10,
  },
  portion: {
    color: '#06BE77',
    fontSize: 17,
    fontWeight: '500',
    paddingBottom: 10,
  },
});
