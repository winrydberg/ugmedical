import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react'

const styles = StyleSheet.create({
  thead: {
    backgroundColor: "#F4F0EF",
    height: 20,
    // padding: 5,
  },
  trow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle:{
    fontSize: 14,
  }
});

export default function THead() {
  return (
    <View style={styles.thead}>
      <View style={styles.trow}>
        <Text style={styles.textStyle}>Question</Text>
        <Text style={styles.textStyle}>Response</Text>
      </View>
    </View>
  );
}
