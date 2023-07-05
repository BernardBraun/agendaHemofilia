import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";



export default function DateTimePicker() {
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const startDate = getFormatedDate(new Date(getToday()),"DD/MM/YYYY - h:m");
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const [startedDate, setStartedDate] = useState(getToday());

    function handleChangeStartDate(propDate) {
        setStartedDate(propDate);
    }

    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
    };

    return (
        <><View style={{ width: "100%" }}>
            <View>
                <TouchableOpacity
                    style={styles.inputBtn}
                    onPress={handleOnPressStartDate}
                >
                    <Text style={{color: "#EB0102", fontWeight: "bold"}}>{selectedStartDate}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
        >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker
                            mode="datepicker"
                            minimumDate={startDate}
                            selected={startedDate}
                            onDateChange={handleChangeStartDate}
                            onSelectedChange={(date) => setSelectedStartDate(date)}
                            options={{
                                backgroundColor: "#FFFFFF",
                                textHeaderColor: "#EB0102",
                                textDefaultColor: "#EB0102",
                                selectedTextColor: "#FFF",
                                mainColor: "#EB0102",
                                textSecondaryColor: "#EB0102",
                                borderColor: "#EB0102",
                            }} />

                        <TouchableOpacity onPress={handleOnPressStartDate}>
                            <Text style={{ color: "#EB0102" }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal></>
    );
};

const styles = StyleSheet.create({
    textHeader: {
      fontSize: 36,
      marginVertical: 60,
      color: "#EB0102",
    },
    textSubHeader: {
      fontSize: 25,
      color: "#EB0102",
    },
    inputBtn: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "#EB0102",
      height: 50,
      paddingLeft: 8,
      fontSize: 18,
      justifyContent: "center",
      marginTop: 14,
      color: "#EB0102"
    },
    submitBtn: {
      backgroundColor: "#342342",
      paddingVertical: 22,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      marginVertical: 16,
    },
    centeredView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      color: "#EB0102"
    },
    modalView: {
      margin: 20,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 35,
      width: "90%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });