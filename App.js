import React, { useState } from 'react'
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from 'react-native'
import Cita from './components/Cita'
import Formulario from './components/Formulario'

const App = () => {
    const [citas, setCitas] = useState([
        { id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'no come' },
        {
            id: '2',
            paciente: 'Redux',
            propietario: 'Itzel',
            sintomas: 'no come',
        },
        {
            id: '3',
            paciente: 'Native',
            propietario: 'Josue',
            sintomas: 'no come',
        },
    ])

    const [mostrarForm, setMostrarForm] = useState(false)

    const eliminarPaciente = (id) => {
        setCitas((citasActuales) => {
            return citasActuales.filter((cita) => cita.id !== id)
        })
    }

    const mostrarFormulario = () => {
        setMostrarForm(!mostrarForm)
    }

    const cerrarTeclado = () => {
        Keyboard.dismiss()
        console.log('aqui...')
    }

    return (
        <>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Administrador de Citas</Text>

                <TouchableHighlight
                    onPress={() => mostrarFormulario()}
                    style={styles.btnMostrarForm}
                >
                    <Text style={styles.textMostrarForm}>
                        {mostrarForm
                            ? 'Cancelar Nueva Cita'
                            : 'Crear Nueva Cita'}
                    </Text>
                </TouchableHighlight>
                <View style={styles.contenido}>
                    {mostrarForm ? (
                        <>
                            <Text style={styles.subTitulo}>
                                Crear Nueva Cita
                            </Text>
                            <Formulario
                                citas={citas}
                                setCitas={setCitas}
                                setMostrarForm={setMostrarForm}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={styles.subTitulo}>
                                {citas.length > 0
                                    ? 'Administra tus citas'
                                    : 'No hay citas'}
                            </Text>

                            <FlatList
                                style={styles.listado}
                                data={citas}
                                renderItem={({ item }) => (
                                    <Cita
                                        cita={item}
                                        eliminarPaciente={eliminarPaciente}
                                    />
                                )}
                                keyExtractor={(cita) => cita.id}
                            />
                        </>
                    )}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#AA076D',
        flex: 1,
    },
    contenido: {
        flex: 1,
        marginHorizontal: '2.5%',
    },
    listado: {
        flex: 1,
    },
    titulo: {
        color: '#FFF',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitulo: {
        color: '#FFF',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnMostrarForm: {
        padding: 10,
        backgroundColor: '#7D024E',
        marginVertical: 10,
    },
    textMostrarForm: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default App
