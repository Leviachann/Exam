import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const CategoryBox = ({ title, count, img, onClick }: any) => {
  return (
    <TouchableOpacity onPress={onClick} style={{ marginTop: 30 }}>
      <Image source={{ uri: img }} style={styles.imgs} resizeMode="cover" />
      <View style={styles.lowerSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>({count})</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgs: {
    height: 140,
    width: 177,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  lowerSection: {
    borderColor: '#D9D0E3',
    borderWidth: 1,
    width: 177,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    color: '#2D0C57',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 5,
  },
  count: {
    color: '#9586A8',
    fontSize: 12,
    paddingBottom: 10,
  },
});

export default CategoryBox;
