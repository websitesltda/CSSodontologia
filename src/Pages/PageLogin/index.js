import { useState } from 'react';
import { View } from 'react-native';
import Style from './style';
import Profissional from "./profissional";
import Cliente from "./cliente";

export default function PreLogin({ navigation }) {

    const [Modo, setModo] = useState('Cliente');

    return (
        <View style={Style.Container}>
            {Modo === 'Cliente' && <Cliente setModo={setModo} />}
            {Modo === 'Profissional' && <Profissional setModo={setModo} />}
        </View>
    );
};