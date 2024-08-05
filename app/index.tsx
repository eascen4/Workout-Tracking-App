import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Main = () => {
  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-3xl font-bold text-text-primary">Strive</Text>
          <Text className="text-text-primary text-sm">
            Your Journey to <Text className="text-accent">fitness</Text> starts
            here.
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/signup")}
            className="bg-amber-500 w-full min-h-[62px] justify-center items-center rounded-xl mt-3"
          >
            <Text className="text-background text-lg">
              Get Started with your email
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

export default Main;
