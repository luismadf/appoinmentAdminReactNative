import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import Cita from "./components/Cita";

const App = () => {
  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: "Juan", sintomas: "no come" },
    { id: "2", paciente: "Redux", propietario: "Itzel", sintomas: "no come" },
    { id: "3", paciente: "Native", propietario: "Josue", sintomas: "no come" },
  ]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <FlatList
        data={citas}
        renderItem={({ item }) => <Cita cita={item} />}
        keyExtractor={(cita) => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#AA076D",
    flex: 1,
  },
  titulo: {
    color: "#FFF",
    marginTop: 40,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
