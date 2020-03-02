import React, {useContext, useState, useEffect} from 'react';
import {KeyboardAvoidingView, Text, StyleSheet} from 'react-native';

import {AuthContext} from 'contexts/AuthContext';

import {View, Button} from 'components/Base';
import {StyledTextInput} from 'components/Input';

const LoginScreen = ({formStyle}) => {
  const {login, register} = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [isLogin]);

  const submit = () => {
    if (isLogin) {
      login({
        email,
        password,
      }).catch(e => {
        setError('Your email or password is incorrect.');
      });
    } else {
      register({
        email,
        password,
        password_confirmation,
      }).catch(e => {
        setError('Something went wrong.');
      });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior="padding" enabled>
      <View style={styles.container}>
        <View style={[styles.form, StyleSheet.flatten(formStyle)]}>
          <Text style={[styles.error]}>{error}</Text>
          <View style={styles.input}>
            <StyledTextInput
              autoFocus={true}
              autoCapitalize="none"
              returnKeyType={'next'}
              placeholder="Email"
              value={email}
              onChangeText={val => setEmail(val)}
            />
          </View>
          <View style={styles.input}>
            <StyledTextInput
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={val => setPassword(val)}
              onSubmitEditing={submit}
            />
          </View>
          {!isLogin && (
            <View style={styles.input}>
              <StyledTextInput
                secureTextEntry={true}
                placeholder="Confirm Password"
                value={password_confirmation}
                onChangeText={val => setPasswordConfirmation(val)}
                onSubmitEditing={submit}
              />
            </View>
          )}
          <Button
            buttonStyle={[styles.button, styles.filledButton]}
            title={isLogin ? 'Login' : 'Register'}
            onPress={submit}
            fill="main"
            color="white"
          />
          <Button
            buttonStyle={styles.button}
            title={!isLogin ? 'Login' : 'Register'}
            color="placeholder"
            onPress={() => setIsLogin(!isLogin)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  container: {
    padding: 15,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    paddingBottom: 50,
  },
  input: {
    height: 50,
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginBottom: 10,
  },
});
