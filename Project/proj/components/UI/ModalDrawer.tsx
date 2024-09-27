import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import BigTitle from './BigTitle'; 
import GreenButton from './GreenButton'; 
import Description from './Description';

const ModalDrawer = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const translateY = new Animated.Value(300); 

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <Text style={{ color: '#6200EE' }}>Open Modal</Text>
      </TouchableOpacity>
      
      <Modal transparent={true} visible={modalVisible} animationType="none">
        <View style={styles.overlay}>
          <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }]}>
            <View style={{ marginHorizontal: 20 }}>
              <BigTitle title="Non-Contact Deliveries" style={{ textAlign: 'center', marginHorizontal: 50, marginTop: 18 }} />
              <Description style={{ textAlign: 'center', marginTop: 18 }} content="When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door." />
              <GreenButton title='ORDER NOW' />
              <TouchableOpacity onPress={closeModal}>
                <Text style={{ color: '#9586A8', fontWeight: '600', fontSize: 15, textAlign: 'center', marginTop: 30 }}>DISMISS</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 300, // Adjust height as needed
  },
});

export default ModalDrawer;
