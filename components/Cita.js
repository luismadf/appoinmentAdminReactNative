import React from "react";
import { Text, View } from "react-native";

const Cita = ({ cita }) => {
  return (
    <View>
      <View>
        <Text>Paciente:</Text>
        <Text>{cita.paciente}</Text>
      </View>
      <View>
        <Text>Propietario:</Text>
        <Text>{cita.propietario}</Text>
      </View>
      <View>
        <Text>Sintomas:</Text>
        <Text>{cita.sintomas}</Text>
      </View>
    </View>
  );
};

export default Cita;
