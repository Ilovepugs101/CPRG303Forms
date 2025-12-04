import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import * as Yup from "yup";
import { saveForm } from "../firebase";

// TypeScript interface for form values
interface EmployeeFormValues {
  name: string;
  email: string;
  employeeId: string;
  position: string;
  department: string;
}

// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  employeeId: Yup.string().required("Employee ID is required"),
  position: Yup.string().required("Position is required"),
  department: Yup.string().required("Department is required"),
});

const Employee: React.FC = () => {
  const initialValues: EmployeeFormValues = {
    name: "",
    email: "",
    employeeId: "",
    position: "",
    department: "",
  };

  const handleSubmit = async (values: EmployeeFormValues, resetForm: () => void) => {
    try {
      // Change collection name here if you want
      const id = await saveForm("employeeForms", values);
      Alert.alert("Saved", `Employee saved (id: ${id})`);
      resetForm();
    } catch (error: any) {
      console.error("Save failed", error);
      Alert.alert("Save failed", error?.message || "Please try again");
    }
  };

  return (
    <View>
      <Text>Employee Information</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values, resetForm);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            {/* Name */}
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            {/* Email */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* Employee ID */}
            <TextInput
              style={styles.input}
              placeholder="Employee ID"
              onChangeText={handleChange("employeeId")}
              onBlur={handleBlur("employeeId")}
              value={values.employeeId}
            />
            {touched.employeeId && errors.employeeId && (
              <Text style={styles.error}>{errors.employeeId}</Text>
            )}

            {/* Position */}
            <TextInput
              style={styles.input}
              placeholder="Position"
              onChangeText={handleChange("position")}
              onBlur={handleBlur("position")}
              value={values.position}
            />
            {touched.position && errors.position && (
              <Text style={styles.error}>{errors.position}</Text>
            )}

            {/* Department */}
            <TextInput
              style={styles.input}
              placeholder="Department"
              onChangeText={handleChange("department")}
              onBlur={handleBlur("department")}
              value={values.department}
            />
            {touched.department && errors.department && (
              <Text style={styles.error}>{errors.department}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
  },
  error: { color: "red", marginBottom: 8 },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
});
