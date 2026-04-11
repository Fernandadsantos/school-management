import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
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
        name="schoolClasses"
        options={{
          title: 'Turmas',
        }}
      />
    </Tabs>
  );
}
