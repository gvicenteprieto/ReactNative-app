
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hi World🛸 Welcome Home from React Native
//       </Text>
//       <Button title="Presióname" onPress={() => alert("¡Botón funcionando!")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
// });


import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState(''); // "M" o "F"

  const mostrarResumen = () => {
    if (!nombre || !edad || !genero) {
      alert("Completa todos los campos");
      return;
    }
    if (isNaN(Number(edad))) {
      alert("La edad debe ser un número");
      return;
    }
    const saludo = genero === 'F' ? 'Bienvenida' : 'Bienvenido';
    alert(`${saludo}, ${nombre}. Tenés ${edad} años.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario con género</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={edad}
        keyboardType="numeric"
        onChangeText={setEdad}
      />

      {/* Selector de género */}
      <Picker
        selectedValue={genero}
        style={styles.picker}
        onValueChange={(itemValue) => setGenero(itemValue)}
      >
        <Picker.Item label="Selecciona género..." value="" />
        <Picker.Item label="Masculino" value="M" />
        <Picker.Item label="Femenino" value="F" />
      </Picker>

      <Button title="Mostrar resumen" onPress={mostrarResumen} />

      {nombre !== '' && edad !== '' && genero !== '' && !isNaN(Number(edad)) && (
        <Text style={styles.result}>
          {genero === 'F' ? 'Bienvenida' : 'Bienvenido'}, {nombre}. Tenés {edad} años.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20,
  },
  result: { marginTop: 20, fontSize: 18, color: 'green' },
});