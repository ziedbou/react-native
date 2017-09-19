import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native';

export default class App extends React.Component {

  
  render() {
    return (

       <WebView
           onError={e => console.log(e)}
           source={{ uri: "build/index.html", baseUrl:'build/' }}
           //source={{ uri: 'http://www.ziedbouhejba.com' }}
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
