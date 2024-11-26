import {View, Text, useColorScheme, Switch} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const systemColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useState(systemColorScheme === 'dark');
  const toggle = () => {
    setColorScheme(!colorScheme);
  };

  return (
    <View
      style={[
        {flex: 1, padding: 30},
        colorScheme ? {backgroundColor: 'black'} : {backgroundColor: 'white'},
      ]}>
      <View style={{flex: 1}}>
        <Text
          style={[
            {
              textAlign: 'center',

              fontSize: 28,
              fontWeight: 'bold',
            },
            colorScheme ? {color: 'white'} : {color: 'black'},
          ]}>
          Theme Toggle
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                {textAlign: 'center', fontSize: 18, fontWeight: 'bold'},
                colorScheme ? {color: 'white'} : {color: 'black'},
              ]}>
              Toggle Here
            </Text>
            <Switch value={colorScheme} onValueChange={toggle} />
          </View>
          <Text
            style={[
              {padding: 20, fontSize: 20, textAlign: 'center'},
              colorScheme ? {color: 'white'} : {color: 'black'},
            ]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit
            omnis reprehenderit laborum repellendus a laudantium voluptate,
            quidem officiis tenetur, eveniet neque exercitationem deleniti
            vitae, iusto ipsam eaque magnam repellat!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
