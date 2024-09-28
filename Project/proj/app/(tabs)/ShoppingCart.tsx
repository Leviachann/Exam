import IconBike from '@/components/svg/BikeIcon';
import CheckmarkIcon from '@/components/svg/CheckMarkIcon';
import DroneIcon from '@/components/svg/DroneIcon';
import IconWalk from '@/components/svg/WalkIcon';
import ChangeText from '@/components/UI/ChangeText';
import YesNoToggle from '@/components/UI/ToggleSwitch';
import {  StyleSheet, View, Text } from 'react-native';


const ShoppingCart=()=> {
  return (
    <View>
      <ChangeText iconType='card' title='Payment Method' content="**** **** **** 4747"></ChangeText>
      <ChangeText iconType='home' title="Delivery address" content="Alexandra Smith
      Cesu 31 k-2 5.st, SIA Chili
      Riga
      LV–1012
      Latvia">
      
      </ChangeText>
      <ChangeText title="Delivery options"></ChangeText>
      <View style={styles.cont}>
        <IconWalk></IconWalk>
        <Text style={styles.text}>I’ll pick it up myself</Text>
      </View>
      <View style={styles.cont}>
        <IconBike></IconBike>
        <Text style={styles.text}>By courier</Text>
      </View>
      <View style={styles.cont}>
        <DroneIcon></DroneIcon>
        <Text style={styles.textsel}>By Drone</Text>
        <CheckmarkIcon></CheckmarkIcon>
      </View>
      <View style={styles.topSect}>
      <Text style={styles.main}>Non-contact-delivery</Text>
      <YesNoToggle></YesNoToggle>
      </View>
      
    </View>
  );
}
export default ShoppingCart;
const styles = StyleSheet.create({
  cont:{
    flexDirection:'row', 
    marginHorizontal:18,
    paddingVertical:20,
  },
  text:{
    color:'#9586A8', 
    fontSize:17, 
    paddingHorizontal:12
  },
  textsel:{
    color:'#7203FF', 
    fontSize:17, 
    fontWeight:'600',
    paddingHorizontal:12,
    paddingRight:'60%'
  },
  main:{
    color: '#2D0C57', 
    fontSize: 22, 
    fontWeight: '700', 
    paddingRight: '15%',
    paddingTop:5

  },
  topSect:{ 
    flexDirection: 'row', 
    marginHorizontal: 18, 
    paddingTop: 40 
  },
});
