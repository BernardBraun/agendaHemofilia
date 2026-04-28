import React from "react";

import ScreenContainer from "../commons/ScreenContainer";
import ResponsiveRegisterScreen from "./components/ResponsiveRegisterScreen";

export default function Register() {
    return <ScreenContainer scrollable={true}>
        <ResponsiveRegisterScreen />
    </ScreenContainer>
}
