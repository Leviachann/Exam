import React from 'react';
import { View, Text, TouchableOpacity,  StyleSheet } from 'react-native';
import IconCart from '../svg/CardIcon';
import IconHome from '../svg/HomeIcon'; 

const ChangeText = ({ title, content, iconType }:any) => {
  const renderIcon = () => {
    if (iconType === 'card') {
      return <IconCart />;
    } else if (iconType === 'home') {
      return <IconHome />;
    }
    return null; 
  };

  return (
    <View>
      <View style={styles.topSect}>
        <Text style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={styles.button}>
            CHANGE
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        {renderIcon()}
        <Text style={styles.content}>
          {content}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    topSect:{ 
        flexDirection: 'row', 
        marginHorizontal: 18, 
        paddingTop: 40 
    },
    title:{ 
        color: '#2D0C57', 
        fontSize: 22, 
        fontWeight: '700', 
        paddingRight: '40%' 
    },
    button:{ 
        alignItems: 'flex-end',
        marginVertical: 5, 
        fontSize: 15, 
        color: '#7203FF', 
        fontWeight: '600' 
    },
    icon:{ 
        flexDirection: 'row', 
        marginHorizontal: 18, 
        paddingTop: 20 
    },
    content:{ 
        color: '#9586A8', 
        fontSize: 17, 
        paddingHorizontal: 10 
    },

});
export default ChangeText;
