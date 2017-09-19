import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
     
       <WebView
           
           source={{ uri: 'build/index.html', baseUrl: 'build/' }}
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
