import BigTitle from '@/components/UI/BigTitle';
import CategoryList from '@/components/UI/CategoryList';
import ProductBox from '@/components/UI/ProductBox';
import SearchInput from '@/components/UI/SearchInput';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native';

const CategoryResults = () => {
  const [searchQuery, setSearchQuery] = useState(''); 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.safe}>
        <BigTitle title={'Vegetables'} />
        <SearchInput 
          value={searchQuery} 
          onChangeText={setSearchQuery}  
        />
        <ScrollView>
        <ProductBox onClick={()=>router.push('/Product')} title='Boston Lettuce' count='1.10' img='https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/articles/10-types-of-lettuce/Washed-lettuce.jpg'></ProductBox>
        <ProductBox title='Purple Cauliflower' count='1.85' img='https://howbertandmays.ie/cdn/shop/products/Sicilianpurplecauliflowerseedsireland.jpg?v=1675105477'></ProductBox>
        <ProductBox title='Savoy Cabbage' count='1.45' img='https://media-cdn2.greatbritishchefs.com/media/yrkhs1dh/img12504.whqc_1426x713q80.jpg'></ProductBox>
        <ProductBox title='Carrots' count='1.20' img='https://mp-engineering.co.uk/wp-content/uploads/2023/08/carrots-around-the-world.jpg'></ProductBox>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CategoryResults;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#FFFF',
    paddingHorizontal: 18,
    flex: 1,
  },
});
