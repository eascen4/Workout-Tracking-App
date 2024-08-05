import {
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import auth from "@react-native-firebase/auth"

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.username === "" || form.password === "") {
      Alert.alert("Please fill all the fields");
      return;
    }
    setIsLoading(true);

    try {
      await auth().createUserWithEmailAndPassword(form.email, form.password);
      
    } catch (error) {
      Alert.alert("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="h-full bg-background">
      <ScrollView className="px-4">
        <Text className="text-2xl text-text-primary">Signup</Text>

        <FormField
          label="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.nativeEvent.text })}
        />

        <FormField
          label="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.nativeEvent.text })}
        />

        <FormField
          label="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.nativeEvent.text })}
        />

        <Text className="text-text-primary">{JSON.stringify(form)}</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={submit}
          disabled={isLoading}
          className="bg-amber-500 w-full min-h-[62px] justify-center items-center rounded-xl mt-3"
        >
          <Text className="text-background text-lg">Sign Up</Text>
          {isLoading && <Text>Loading...</Text>}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
