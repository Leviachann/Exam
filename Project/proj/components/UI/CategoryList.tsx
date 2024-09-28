import { FlatList, StyleSheet } from 'react-native';
import CategoryBox from './CategoryBox';
import { mockData } from '@/data/mockData';
import { useRouter } from 'expo-router';

const CategoryList = ({ searchQuery }: any) => {
  const router = useRouter();

  const filteredData = mockData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (category: any) => {
    console.log('Category clicked:', category);
    router.push(`/products/category/${category.id}`); 
  };

  return (
    <FlatList
      data={filteredData}
      renderItem={({ item }) => (
        <CategoryBox
          title={item.title}
          count={item.count}
          img={item.img}
          onClick={() => handleCategoryClick(item)} 
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default CategoryList;
