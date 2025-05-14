import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  botonActive: {
   borderWidth: 4,
    borderColor: "white",
    width: "45%",
     height: 40,
      borderRadius: 14,
       display: "flex",
        justifyContent: "center",
         alignItems: "center",
          backgroundColor: "hsl(199, 76%, 28%)",
          borderColor:"#34cee6"
  } ,
  botonDesactivado: {
    borderWidth: 4,
     borderColor: "hsl(199, 76%, 28%)",
    width: "45%",
     height: 40,
      borderRadius: 14,
       display: "flex",
        justifyContent: "center",
         alignItems: "center",
          backgroundColor: "hsl(199, 76%, 28%)",
  },

  botonOn: {
    borderWidth: 4, 
    borderColor: "white",
    width: "45%",
     height: 40,
      borderRadius: 14,
       display: "flex",
        justifyContent: "center",
         alignItems: "center",
          backgroundColor: "hsl(199, 76%, 28%)",
          borderColor:"#34cee6"
  }
})

export default styles