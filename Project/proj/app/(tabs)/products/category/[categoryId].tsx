import BigTitle from '@/components/UI/BigTitle';
import ProductBox from '@/components/UI/ProductBox';
import SearchInput from '@/components/UI/SearchInput';
import { useRouter, useLocalSearchParams } from 'expo-router'; 
import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import { mockData, vegetableList, fruitList, breadList, sweetsList, cheeseList, teaList } from '@/data/mockData';

type Product = {
  name: string;
  img: string;
  price: string;
  inCart: boolean;
  inFavorites: boolean;
  weight: string;
  country: string;
  description: string;
};

const CategoryResults = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const { categoryId } = useLocalSearchParams(); 
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const router = useRouter(); 

  useEffect(() => {
    const category = mockData.find(cat => cat.id === categoryId); 
    if (categoryId === '1') {
      setCategoryProducts(vegetableList);
    } else if (categoryId === '2') {
      setCategoryProducts(fruitList);
    } else if (categoryId === '3') {
      setCategoryProducts(breadList);
    } else if (categoryId === '4') {
      setCategoryProducts(sweetsList);
    } else if (categoryId === '5') {
      setCategoryProducts(cheeseList);
    } else if (categoryId === '6') {
      setCategoryProducts(teaList);
    } else {
      setCategoryProducts([]);
    }
  }, [categoryId]);

  const handleProductClick = (product: Product) => {
    router.push({
      pathname: `/products/[productId]`, 
      params: {
        productId: product.name,  
        name: product.name,        
        img: product.img,
        price: product.price,
        weight: product.weight,
        country: product.country,
        description: product.description,
      },
    });
  };
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.safe}>
        <BigTitle title={'Category Products'} />
        <SearchInput 
          value={searchQuery} 
          onChangeText={setSearchQuery}  
        />
        <ScrollView>
          {categoryProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((product, index) => (
            <ProductBox 
              key={index}
              title={product.name} 
              count={product.price} 
              img={product.img}
              onClick={() => handleProductClick(product)} 
            />
          ))}
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
