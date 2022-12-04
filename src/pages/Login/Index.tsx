import React from 'react';
import {Platform, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/*
import {
  NavigationStackOptions,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import {NavigationActions} from 'react-navigation';*/

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const [password, setPassword] = React.useState('');

  // allow show the password:
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            <TextInput
              className="text-blackBlue"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            {showPassword ? (
              <Icon
                style={{
                  fontSize: 25,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  marginRight: 10,
                }}
                name="eye"
                onPress={handleShowPassword}
              />
            ) : (
              <Icon
                style={{
                  fontSize: 25,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  marginRight: 10,
                }}
                name="eye-off"
                onPress={handleShowPassword}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
export default Login;
