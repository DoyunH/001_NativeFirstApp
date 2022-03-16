import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView>
      <Greeting name={21} />
      <Button title="toggle" onPress={onPress} />
      {visible && (
        <>
          <Box rounded color="gray" />
          <Box size="medium" />
          <Box rounded size="large" color="#405196" />
        </>
      )}
    </SafeAreaView>
  );
};

export default App;
