import CardIcon from '@/components/svg/CreditCard';
import CustomInput from '@/components/svg/CustomInput';
import BigTitle from '@/components/UI/BigTitle';
import GreenButton from '@/components/UI/GreenButton';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Profile=()=> {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  return (
    <View style={{backgroundColor:'#ffff'}}>
      <BigTitle title={'Credit / Debit card'} style={{marginHorizontal:18}}></BigTitle>
      <View style={styles.container}>
      <Image source={require('@/assets/images/card.png')} style={styles.img} />
      <CustomInput
        label="Name on card"
        value={name}
        placeholder="Alexandra Smith"
        onChangeText={setName}
        keyboardType="default"
      />

      <CustomInput
        label="Card number"
        value={cardNumber}
        placeholder="XXXX XXXX XXXX XXXX"
        onChangeText={setCardNumber}
        keyboardType="numeric"
        icon={<Ionicons name="card" size={24} color="orange" />}
      />

      <View style={styles.row}>
        <CustomInput
          label="Expiry date"
          value={expiryDate}
          placeholder="MM/YY"
          onChangeText={setExpiryDate}
          keyboardType="numeric"
          style={styles.halfInput}
        />

        <CustomInput
          label="CVC"
          value={cvc}
          placeholder="CVC"
          onChangeText={setCvc}
          keyboardType="numeric"
          icon={<Ionicons name="lock-closed" size={24} color="orange" />}
          style={styles.halfInput}
        />
      </View>
    </View>
    <View style={{marginHorizontal:18}}>
      
    <GreenButton title="USE THIS CARD"></GreenButton>
    </View>
    </View>

  );
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1, 
    marginHorizontal: 5,
  },
  img:{ 
    width: 374, 
    height: 240,
    borderRadius:8, 
    marginBottom:20
  },
});