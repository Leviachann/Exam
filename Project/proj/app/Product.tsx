import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router'; 
import BigTitle from '@/components/UI/BigTitle';
import Description from '@/components/UI/Description';
import GreenButton from '@/components/UI/GreenButton';
import AntDesign from '@expo/vector-icons/AntDesign';

const imageUrl = 'https://s3-alpha-sig.figma.com/img/ed02/3feb/39e754db430384ee1a2a937245b5be42?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DrU3gRXh-OJMhGiuyvH73AIiuZqlqoZrILpiwsThH8MxToKHFnNmYsuPaNgJUNSbIVwmK4oyFZn72F-DyRsUePVauyWchxRXVunvhRDbZUDoF6cMInnN-7SA~wGaWSodpbFnt6KVFGurM5DWNt9GrZsRg~nK~M089DXI6enNZrx~Dqi8BeQgnF5uogy-d5UE1H~ybbxD~4VczeX01gE5HEsqhVmbsBWzDQAmPiqG3Fx-gsNlu5H2WJKxA6KCQFxTMFF0CZyXqVrlzeXM9x5yC4yLxL55vDpQzIBlUf1AMVpfWe5nrjHEBijPHdUJ1-cv8qHGig1Fwriu51r0IjKzcw__';

export default function Product() {
  const router = useRouter(); 
  const handleOrderNow = () => {
    router.push('/(tabs)');
  };
  
  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.safeArea}>
      <View style={styles.drawer}>
        <BigTitle title="Boston Lettuce" style={styles.title} />
        <View style={styles.row}>
          <Text style={styles.count}>1.10</Text>
          <Text style={styles.price}>€ / piece</Text>
        </View>
        <Text style={styles.portion}>~ 150 gr / piece</Text>
        <Text style={styles.country}>Spain</Text>
        <Description style={styles.description} content='Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.' />
        <View>
          <TouchableOpacity style={styles.container}>
            <AntDesign name="hearto" size={24} color="#9586A8" />
          </TouchableOpacity>
        </View>
        <GreenButton title='Add To Cart' onPress={handleOrderNow} />
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
  dismissText: {
    color: '#9586A8',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 30,
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
