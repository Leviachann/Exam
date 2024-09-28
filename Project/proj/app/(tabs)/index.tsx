import BigTitle from '@/components/UI/BigTitle';
import CategoryList from '@/components/UI/CategoryList';
import SearchInput from '@/components/UI/SearchInput';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(''); 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.safe}>
        <BigTitle title={'Categories'} />
        <SearchInput 
          value={searchQuery} 
          onChangeText={setSearchQuery}  
        />
        <CategoryList searchQuery={searchQuery} /> 
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#FFFF',
    paddingHorizontal: 18,
    flex: 1,
  },
});