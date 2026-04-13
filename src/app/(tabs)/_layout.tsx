import { makeServer } from '@/src/service/server';
import { Tabs } from 'expo-router';
import { Building, GraduationCap, Home } from 'lucide-react-native';
import React from 'react';

if (__DEV__) {
  makeServer();
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Home size={18} color={focused ? '#028ac8' : '#9e9e9e'} />,
        }}
      />
      <Tabs.Screen
        name="schools"
        options={{
          title: 'Escolas',
          tabBarIcon: ({ focused }) => (
            <Building size={18} color={focused ? '#028ac8' : '#9e9e9e'} />
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Turmas',
          tabBarIcon: ({ focused }) => (
            <GraduationCap size={18} color={focused ? '#028ac8' : '#9e9e9e'} />
          ),
        }}
      />
    </Tabs>
  );
}
