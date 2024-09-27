import { StyleSheet, Text, TextStyle } from 'react-native';

interface DescriptionProps {
  content: string;
  style?: TextStyle; 
}

const Description = ({ content, style }: DescriptionProps) => {
  return (
      <Text style={[styles.mainTitle, style]}>{content}</Text>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    color: '#9586A8',
    fontSize: 17,
  },
});

export default Description;
