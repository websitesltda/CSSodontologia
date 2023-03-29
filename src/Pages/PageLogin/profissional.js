import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import Config from "./../../Configs/config";
import Logo from "./../../../assets/logo.png";
import Background from "./../../../assets/background.jpg";
import Style from './style';

export default function Profissional({ setModo }) {
    return (
        <SafeAreaView style={Style.SafeAreaViewProfissional} >
            <StatusBar style="auto" backgroundColor={Config.CorWhite} />
            <ImageBackground style={Style.ImageBackground} source={Background} />

            <View style={Style.Session1}>
                <Image style={Style.Logo} resizeMode="contain" source={Logo} />
            </View>

            <View style={Style.SessionProfissional}>

                <TouchableOpacity onPress={() => setModo('Cliente')} style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: Config.CorSecondary }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: Config.CorWhite }}>Cliente</Text>
                </TouchableOpacity>

                <TouchableOpacity disabled style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: Config.CorWhite, borderTopLeftRadius: 50 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: Config.CorSecondary }}>Profissional</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};