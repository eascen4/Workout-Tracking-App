import { Tabs } from 'expo-router';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen name="profile" options={{headerShown: false}} />
      <Tabs.Screen name="workouts" options={{headerShown: false}} />
      <Tabs.Screen name="leaderboard" options={{headerShown: false}} />
    </Tabs>
  );
}
