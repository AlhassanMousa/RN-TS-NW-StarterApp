import React from 'react';
import {
  Platform,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'react-native';

const Home: React.FC = () => {
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
            <Text>Home page ***</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
export default Home;
