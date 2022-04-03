import React, { useState } from 'react';
import { TextInput, Text, View, Button } from "react-native";
import ResultIMC from './ResultIMC'
import styles from "./style"

export default function Form(props) {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura")
    const [IMC, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setIMC((weight / (height * height)).toFixed(2));
    }

    function validationIMC() {
        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC("Seu IMC é: ");
            setTextButton("Calcular novamente")
            return;
        }
        setIMC(null);
        setTextButton("Calcular");
        setMessageIMC("Preencha o peso a altura");
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura: </Text>
                <TextInput style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex.: 1.77"
                />

                <Text style={styles.formLabel}>Peso: </Text>
                <TextInput style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex.: 60.250"
                />
                <Button
                    onPress={() => validationIMC()}
                    title={textButton}
                />
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} />
        </View>
    );
}