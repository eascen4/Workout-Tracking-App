import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from "react-native";

const FormField = ({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  label: string;
}) => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="mt-2">
      <Text className="text-text-primary text-lg ml-1">{label}</Text>
      <View className="w-full mt-2 bg-surface h-16 px-4 rounded-xl border-2 border-surface/50 focus:border-amber-500/40 flex-row items-center">
        <TextInput
          className="flex-1 text-text-primary text-base"
          value={value}
          onChange={onChange}
          secureTextEntry={label === "Password" && !showPassword}
        />
        {label === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text className="text-primary">Show</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
