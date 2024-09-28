import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const YesNoToggle = () => {
  const [isYes, setIsYes] = useState(true); 

  const handleToggle = () => {
    setIsYes(!isYes); 
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={[styles.toggleBackground, isYes ? styles.yesBackground : styles.noBackground]}>
        <Text style={[styles.toggleText, isYes ? styles.yesText : styles.noText]}>
          {isYes ? 'Yes' : 'No'}
        </Text>
        <View style={[styles.circle, isYes ? styles.circleYesPosition : styles.circleNoPosition]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleBackground: {
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  yesBackground: {
    backgroundColor: '#E0BBE4',
  },
  noBackground: {
    backgroundColor: '#D3D3D3',
  },
  toggleText: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
  },
  yesText: {
    color: '#6A1B9A',
    left: 40,
  },
  noText: {
    color: '#666',
    right: 40,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    position: 'absolute',
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3, 
  },
  circleYesPosition: {
    left: 5,
  },
  circleNoPosition: {
    right: 5,
  },
});

export default YesNoToggle;
