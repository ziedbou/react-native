import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { WebView } from 'react-native';
import { setCustomSourceTransformer } from 'react-native/Libraries/Image/resolveAssetSource';

setCustomSourceTransformer(function (resolver) {
  debugger;
  if (Platform.OS === 'android'
    && !resolver.serverUrl
    && !resolver.bundlePath
    && resolver.asset.type === 'html') {
    resolver.bundlePath = '/android_asset/';
  }

  return resolver.defaultAsset();
});


export default class App extends React.Component {


  render() {
    return (

       <WebView
           onError={e => console.log(e)}
           source={{ uri: Platform.OS === 'android' ? 'file:///android_asset/web/index.html' : 'web/index.html', baseUrl: 'web/' }}
           style={{ flex: 1 }}
           ref="webview"
         />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
