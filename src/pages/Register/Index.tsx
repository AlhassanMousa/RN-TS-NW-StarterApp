import React from 'react';
import {
  Platform,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'react-native';

const Register: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <View>
            <Text>this is Register</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
export default Register;
