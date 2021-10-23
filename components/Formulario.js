import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Button,
    Alert,
    ScrollView
} from 'react-native'
import shortid from 'shortid'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const Formulario = ({citas, setCitas, setMostrarForm}) => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false)

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleConfirmDate = (date) => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' }
        setFecha(date.toLocaleDateString('es-ES', opciones))
        hideDatePicker()
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true)
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }

    const handleConfirmTime = (hour) => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false }
        setHora(hour.toLocaleString('en-US', opciones))
        hideTimePicker()
    }

    const crearNuevaCita = () => {
        if (
            paciente.trim() === '' ||
            propietario.trim() === '' ||
            telefono.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''
        ) {
           showAlert()
           return
        }

        const cita = {paciente, propietario, telefono, fecha, hora,sintomas}
        cita.id = shortid.generate();
        const citasNuevos = [...citas, cita]
        setCitas(citasNuevos)
        setMostrarForm(false)


    }

    const showAlert = () => {
        Alert.alert(
            'Error', // Titulo
            'Todos los campos son obligatorios', // Descripción
            [{
                text: 'Ok' // Arreglo de botones
            }]
        )
    }

    return (
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => setPaciente(texto)}
                />
            </View>
            <View>
                <Text style={styles.label}>Propietario:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => setPropietario(texto)}
                />
            </View>
            <View>
                <Text style={styles.label}>Contacto:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => setTelefono(texto)}
                    keyboardType="numeric"
                />
            </View>
            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirmDate}
                    onCancel={hideDatePicker}
                    locale="es_ES"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                />
                <Text>{fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirmTime}
                    onCancel={hideTimePicker}
                    locale="es_ES"
                />
                <Text>{hora}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => setSintomas(texto)}
                    multiline
                />
            </View>
            <TouchableHighlight
                onPress={() => crearNuevaCita()}
                style={styles.btnSubmit}
            >
                <Text style={styles.textSubmit}>Enviar</Text>
            </TouchableHighlight>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#7D024E',
        marginVertical: 10,
    },
    textSubmit: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
    },
})

export default Formulario
