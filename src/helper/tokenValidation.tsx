import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { checkTokenValidity } from './tokenValidator'; 

const useTokenValidation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleTokenValidation = async () => {
      const tokenStatus = await checkTokenValidity();
      if (!tokenStatus.valid) {
        
        navigation.navigate('Login');
      }
    };

    handleTokenValidation();
  }, [navigation]);
};

export default useTokenValidation;
