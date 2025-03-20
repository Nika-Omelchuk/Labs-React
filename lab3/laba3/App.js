import React, { useState } from "react";
import {SafeAreaView, Button } from 'react-native';
import RowLayoutScreen from "./components/RowLayoutScreen.tsx";
import ColumnLayoutScreen from "./components/ColumnLayoutScreen.tsx";

export default function App() {
  const [showRowLayout, setShowRowLayout] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <Button
        title="Switch layout"
        onPress={() => setShowRowLayout(!showRowLayout)}
      />
      {showRowLayout ? <RowLayoutScreen /> : <ColumnLayoutScreen />}
    </SafeAreaView>
  );
}
