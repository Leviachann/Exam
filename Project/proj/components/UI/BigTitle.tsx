import { StyleSheet, Text, TextStyle } from 'react-native';

interface BigTitleProps {
  title: string;
  style?:  TextStyle; 
}

const BigTitle = ({ title, style }: BigTitleProps) => {
  return (
      <Text style={[styles.mainTitle, style]}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    color: '#2D0C57',
    fontSize: 34,
    fontWeight: '900',
  },
});

export default BigTitle;
