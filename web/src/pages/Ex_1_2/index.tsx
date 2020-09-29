import React, { useCallback, useMemo, useState } from 'react';

import {
  Container,
  Content,
  ButtonGrups,
  Mask,
  NoMask,
  Input,
  Message,
  Validate,
} from './styles';

import { isValid, format, strip } from '../../utils/cnpjValidator';
import Header from '../../components/Header';

const Ex_1_2: React.FC = () => {
  const [cnpj, setCnpj] = useState('');
  const [hasMask, setHasMask] = useState(false);
  const [cnpjValid, setCnpjValid] = useState(0);

  const handleValidateCNPJ = useCallback(() => {
    if (cnpj.length) {
      const valid = isValid(cnpj);
      setCnpjValid(valid ? 1 : 2);
    }
  }, [cnpj]);

  const handleSetMask = useCallback(() => {
    setHasMask(true);
    setCnpj(format(cnpj));
  }, [cnpj]);

  const handleRemoveMask = useCallback(() => {
    setHasMask(false);
    setCnpj(strip(cnpj, true));
  }, [cnpj]);

  const handleChangeCnpj = useCallback((value: string) => {
    const number = value.replace(/[^0-9]/gi, '');
    setCnpj(number);
  }, []);

  const handleCnpj = useMemo(() => {
    if (hasMask) return format(cnpj);
    else return cnpj;
  }, [cnpj, hasMask]);

  return (
    <>
      <Header>Validate CNPJ</Header>
      <Container>
        <Content>
          <ButtonGrups>
            <Mask onClick={handleSetMask}>Formatted</Mask>
            <NoMask onClick={handleRemoveMask}>Number only</NoMask>
          </ButtonGrups>

          <Input
            maxLength={14}
            max={18}
            value={handleCnpj}
            onChange={e => handleChangeCnpj(e.target.value)}
          />

          {cnpjValid === 1 && (
            <Message style={{ color: '#00ff00' }}>CNPJ Valid</Message>
          )}
          {cnpjValid === 2 && (
            <Message style={{ color: '#ff0000' }}>CNPJ Invalid</Message>
          )}

          <Validate onClick={handleValidateCNPJ}>Validate</Validate>
        </Content>
      </Container>
    </>
  );
};

export default Ex_1_2;
