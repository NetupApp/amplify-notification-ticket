import { useSelector } from "react-redux";
import { View, Text } from "react-native";

const TestScreen = () => {
    const token = useSelector(state => state.token.token);
    return (
        <View>
        <Text>Test</Text>
        <Text>{token}</Text>
        </View>
    );
};

export default TestScreen;