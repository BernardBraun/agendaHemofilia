import React from 'react';

import useTokenValidation from '../../helper/tokenValidation';
import ScreenContainer from '../commons/ScreenContainer';
import ResponsiveHomeScreen from './components/ResponsiveHomeScreen';

export default function Home() {

    useTokenValidation();

    return <ScreenContainer>
        <ResponsiveHomeScreen />
    </ScreenContainer>
}
