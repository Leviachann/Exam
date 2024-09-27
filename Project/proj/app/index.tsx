import BoxIcon from '@/components/svg/BoxIcon';
import BigTitle from '@/components/UI/BigTitle';
import Description from '@/components/UI/Description';
import GreenButton from '@/components/UI/GreenButton';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router'; 
import { handleDismiss } from '@/hooks/handleDismiss';

export default function WelcomeScreen() {
  const router = useRouter(); 
  const handleOrderNow = () => {
    router.push('/(tabs)');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.drawer}>
        <View style={styles.package}>
          <BoxIcon />
        </View>
        <BigTitle
          title="Non-Contact Deliveries"
          style={styles.title}
        />
        <Description
          style={styles.description}
          content="When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door."
        />
        <GreenButton title='ORDER NOW' onPress={handleOrderNow} />
        <TouchableOpacity onPress={handleDismiss}>
          <Text style={styles.dismissText}>DISMISS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  package: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    paddingHorizontal: 50,
    paddingVertical: 50,
    width: '38%',
    margin: 'auto',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#A259FF',
    justifyContent: 'flex-end',
  },
  drawer: {
    backgroundColor: '#F6F5F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 18,
  },
  description: {
    textAlign: 'center',
    marginTop: 18,
  },
  dismissText: {
    color: '#9586A8',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 30,
  },
});
