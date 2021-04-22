import React from "react";
import {
   SafeAreaView, 
   StyleSheet, 
   Text, 
   View 
  } from "react-native";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.emoji}>
          🥳
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <Button
            title="Começar"
          />
        </View>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30
  },
  emoji:{
    fontSize:72,
  },
  title: {
    fontSize:22,
    fontFamily:fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight:38,
    padding:20
  },
  subtitle: {
    fontFamily:fonts.text,
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 10,
    color: colors.heading
  },
  footer: {
    width:'100%',
    marginTop:20,
    paddingHorizontal:50
  }
})