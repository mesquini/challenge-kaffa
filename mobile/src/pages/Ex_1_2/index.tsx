import React, {useCallback, useMemo, useState} from 'react';
import {ToastAndroid} from 'react-native';

import {
  Container,
  Content,
  ViewButton,
  Mask,
  ButtonText,
  NoMask,
  InputCNPJ,
  ButtonValidate,
} from './styles';

import {isValid, format, strip} from '../../utils/cnpjValidator';
import Header from '../../components/Header';

const Ex_1_2: React.FC = () => {
  const [cnpj, setCnpj] = useState('');
  const [hasMask, setHasMask] = useState(false);
  const [cnpjValid, setCnpjValid] = useState(0);

  const handleValidateCNPJ = useCallback(() => {
    if (cnpj.length) {
      const valid = isValid(cnpj);
      setCnpjValid(valid ? 1 : 2);
    } else {
      ToastAndroid.showWithGravity(
        'Insert one CNPJ',
        1000,
        ToastAndroid.CENTER,
      );
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

  const handleChangeCnpj = useCallback(
    (value: string) => {
      const number = value.replace(/[^0-9]/gi, '');
      setCnpj(number);
    },
    [hasMask],
  );

  const handleCnpj = useMemo(() => {
    if (hasMask) return format(cnpj);
    else return cnpj;
  }, [cnpj, hasMask]);

  return (
    <Container>
      <Header>Validate CNPJ</Header>
      <Content>
        <ViewButton>
          <Mask onPress={handleSetMask}>
            <ButtonText>CNPJ with mask</ButtonText>
          </Mask>
          <NoMask onPress={handleRemoveMask}>
            <ButtonText>CNPJ without mask</ButtonText>
          </NoMask>
        </ViewButton>

        <InputCNPJ
          keyboardAppearance="dark"
          keyboardType="number-pad"
          placeholder="Insert CNPJ"
          maxLength={18}
          onChangeText={(e) => handleChangeCnpj(e)}
          value={handleCnpj}
        />

        {cnpjValid === 1 && (
          <ButtonText style={{color: '#00ff00'}}>CNPJ Valid</ButtonText>
        )}

        {cnpjValid === 2 && (
          <ButtonText style={{color: '#ff0000'}}>CNPJ Invalid</ButtonText>
        )}

        <ButtonValidate onPress={handleValidateCNPJ}>
          <ButtonText>Validate</ButtonText>
        </ButtonValidate>
      </Content>
    </Container>
  );
};

export default Ex_1_2;
