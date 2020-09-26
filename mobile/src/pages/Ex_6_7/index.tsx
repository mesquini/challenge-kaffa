import React, {useCallback, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import Header from '../../components/Header';

import {
  Container,
  ButtonTime,
  ButtonTimeText,
  Times,
  Label,
  Time,
} from './styles';

interface ITimeZone {
  datetime: Date;
  utc_datetime: Date;
}

const Ex_6_7: React.FC = () => {
  const [time, setTime] = useState<ITimeZone>();
  const [loading, setLoading] = useState(false);

  const handleGetTime = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      'http://worldtimeapi.org/api/timezone/America/Sao_Paulo',
    );

    if (response.ok) {
      const data = (await response.json()) as ITimeZone;
      setTime(data);
    }

    setLoading(false);
  }, []);

  return (
    <Container>
      <Header>Rest Client</Header>
      <View style={{marginVertical: 150, alignItems: 'center'}}>
        <ButtonTime onPress={handleGetTime} enabled={loading ? false : true}>
          {loading ? (
            <ActivityIndicator size="large" color="#f1f1f1" />
          ) : (
            <ButtonTimeText>Get Time</ButtonTimeText>
          )}
        </ButtonTime>
        {time && (
          <Times>
            <Label>Date Time</Label>
            <Time>{new Date(time.datetime).toLocaleString()}</Time>
            <Label>Date Time UTC</Label>
            <Time>{new Date(time.utc_datetime).toUTCString()}</Time>
          </Times>
        )}
      </View>
    </Container>
  );
};

export default Ex_6_7;
