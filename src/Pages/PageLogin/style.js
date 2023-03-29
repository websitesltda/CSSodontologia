import { StyleSheet } from "react-native";
import Config from "../../Configs/config";

const Style = StyleSheet.create({
    SafeAreaViewCliente: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Config.CorPrimary
    },
    SafeAreaViewProfissional: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Config.CorWhite
    },
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.2
    },
    Session1: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Logo: {
        width: '100%'
    },
    SessionProfissional: {
        width: '100%',
        height: '10%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Config.CorSecondary
    },
    SessionCliente: {
        width: '100%',
        height: '10%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Config.CorWhite
    },
});

export default Style;