import { View } from 'react-native';
import WebView from 'react-native-webview';


export default function RootLayout() {
  return (
    <View style={{ width: '100%', height: "96%", marginTop:"auto" }}>
      <WebView
        source={{ uri: "https://americamedic.us/collections/all" }}
      />
    </View>
  );
}