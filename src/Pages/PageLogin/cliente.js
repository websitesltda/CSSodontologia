import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import Config from "./../../Configs/config";
import Logo from "./../../../assets/logo.png";
import Background from "./../../../assets/background.jpg";
import Style from './style';

export default function Cliente({ setModo }) {
    return (
        <SafeAreaView style={Style.SafeAreaViewCliente} >
            <StatusBar style="auto" backgroundColor={Config.CorPrimary} />
            <ImageBackground style={Style.ImageBackground} source={Background} />

            <View style={Style.Session1}>
                <Image style={Style.Logo} resizeMode="contain" source={Logo} />
            </View>

            

            <View style={Style.SessionCliente}>

                <TouchableOpacity disabled style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: Config.CorSecondary, borderTopRightRadius: 50 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: Config.CorWhite }}>Cliente</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModo('Profissional')} style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: Config.CorWhite }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: Config.CorSecondary }}>Profissional</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};