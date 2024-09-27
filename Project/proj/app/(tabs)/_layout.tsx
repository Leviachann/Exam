import { router, Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon'; 
import UserIcon from '@/components/svg/UserIcon';
import { TouchableOpacity, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        title:''
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '', 
          headerLeft: () => (
            <TouchableOpacity onPress={() => {{
              router.push('../');}}}>
              <Text style={{color:'#2D0C57', margin:18}}>
              <AntDesign name="left" size={24} color="#2D0C57" />
              </Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} color={color} iconType="grid" />
          ),
        }}
      />
      <Tabs.Screen
        name="ShoppingCart"
        options={{
          title: 'Checkout', 
                   
          headerLeft: () => (
            <TouchableOpacity onPress={() => {{
              router.push('../');}}}>
              <Text style={{color:'#2D0C57', margin:18}}>
              <AntDesign name="left" size={24} color="#2D0C57" />
              </Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} color={color} iconType="cart" />
          ),
        }}
      />      
      <Tabs.Screen
        name="Profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <UserIcon></UserIcon>
          ),
        }}
    />
    </Tabs>
  );
}
