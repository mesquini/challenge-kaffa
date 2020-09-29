import React, { useCallback, useState } from 'react';

import { Container, Content, Times } from './styles';

import Header from '../../components/Header';

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
      const data: ITimeZone = await response.json();
      setTime(data);
    }

    setLoading(false);
  }, []);

  return (
    <>
      <Header>Rest Client - World Clock</Header>
      <Container>
        <Content>
          <button onClick={handleGetTime}>
            {loading ? 'Carregando...' : 'Get Time'}
          </button>

          {time && (
            <Times>
              <h3>Date Time</h3>
              <p>{new Date(time.datetime).toLocaleString()}</p>
              <h3>Date Time UTC</h3>
              <p>{new Date(time.utc_datetime).toUTCString()}</p>
            </Times>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Ex_6_7;
