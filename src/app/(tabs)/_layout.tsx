import { makeServer } from '@/src/service/server';
import { Tabs } from 'expo-router';
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
        }}
      />
      <Tabs.Screen
        name="schools"
        options={{
          title: 'Escolas',
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Turmas',
        }}
      />
    </Tabs>
  );
}
