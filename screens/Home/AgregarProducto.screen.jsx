import { useNavigation } from "@react-navigation/core";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React,{useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput, Alert} from "react-native";
// auth is an instance of firebase.auth() and it is imported from the firebase.js file
import { auth } from "../../firebase";
import logo from "../../media/images/fod.png";
import logo2 from "../../media/images/ju.png";
import logo3 from "../../media/images/man.png";

const AgregarProducto = () => {
  const navigation = useNavigation();
   const [busqueda, setBusqueda] = useState("");

    const [cantidad, setCantidad] = useState('0');
     const [precio, setPrecio] = useState('0');
      const [oferta, setOferta] = useState('0');
      const cero = () =>{
        setBusqueda('')
        setCantidad('');
        setPrecio('');
        setOferta('');
        Alert.alert('Producto Agregado Correctamente')
      }
    return(
        <View style={{}}>
            <View style={{paddingTop:35, flexDirection:"row"}}>
                  <View style={{flexDirection:"column" , flex:0.5,   alignItems: "center",    justifyContent: "center", backgroundColor:'#A4CC00'}}>
         
                  <MaterialCommunityIcons onPress={()=> navigation.goBack()} name="keyboard-backspace" color={'white'} size={28} />
                </View>
        <View style={{flexDirection:"column" , flex:1.4,   alignItems: "center",    justifyContent: "center", backgroundColor:'#A4CC00'}}>
         
            <Text style={{fontSize:40, color:'white'}}>
               
                Agregando</Text>
        </View>
        <View style={{flexDirection:"column", flex:1}}>
           <Image source={logo} style={{  height: 60,
            width: 150,resizeMode: 'contain'}}></Image>
        </View>
   
       
      </View>

      <View style={{ paddingHorizontal:10, justifyContent: "center",}}>

          <TextInput placeholder="Buscar producto " value={busqueda}
          onChangeText={(text) => setBusqueda(text)}
          style={ { backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10,
          marginTop: 20,}}/>

      </View>

      <View style={{paddingHorizontal:10, paddingVertical:10, justifyContent: "center", flexDirection:"row"}}>
        {busqueda==='Naranja'?( <Image source={logo2}  style={{height: 150, 
            width: 200,resizeMode: 'contain'}} />):( <Text style={{paddingVertical:100}}></Text>)}
        {busqueda==='Manzana'?( <Image source={logo3}  style={{height: 150, 
            width: 200,resizeMode: 'contain'}} />):( <Text style={{paddingVertical:100}}></Text>)}
         
      </View>

      
        <View style={{ paddingHorizontal:10, justifyContent: "center",flexDirection:"row"}}>
            <View style={{flexDirection:"column" , flex:2,  justifyContent: "center", }}>
                <View style={{flexDirection:"row", paddingVertical:10 }}>
                    <Text style={{fontSize:40, color:'#556b2f', }}>Cantidad:</Text>
                    <TextInput placeholder="0"  value={cantidad} keyboardType={"numeric"}
                    onChangeText={(text) => setCantidad(text)} style={ { fontSize:30, paddingHorizontal:10 }}/>
                      <Text style={{fontSize:40, color:'#556b2f'}}>Kg.</Text>
         </View>
          
        </View>
        <View style={{flexDirection:"column", flex:1}}></View>
   
       

      </View>
         <View style={{ paddingHorizontal:10, justifyContent: "center",flexDirection:"row"}}>
            <View style={{flexDirection:"column" , flex:2,  justifyContent: "center", }}>
                <View style={{flexDirection:"row",paddingVertical:10 }}>
                    <Text style={{fontSize:40, color:'#556b2f'}}>Precio:</Text>
                    <Text style={{fontSize:40, color:'#556b2f'}}>$</Text>
                    <TextInput placeholder="0"  value={precio} keyboardType={"numeric"}
                    onChangeText={(text) => setPrecio(text)} style={ { fontSize:30, paddingHorizontal:10 }}/>
                      
         </View>
          
        </View>
        <View style={{flexDirection:"column", flex:1}}></View>
   
       

      </View>
         <View style={{ paddingHorizontal:10, justifyContent: "center",flexDirection:"row"}}>
            <View style={{flexDirection:"column" , flex:2,  justifyContent: "center", }}>
                <View style={{flexDirection:"row",paddingVertical:10 }}>
                    <Text style={{fontSize:40, color:'#556b2f'}}>Oferta:</Text>
                    <Text style={{fontSize:40, color:'#556b2f'}}>%.</Text>
                    <TextInput placeholder="0"  value={oferta} keyboardType={"numeric"}
                    onChangeText={(text) => setOferta(text)} style={ { fontSize:30, paddingHorizontal:10 }}/>
                      
         </View>
          
        </View>
        <View style={{flexDirection:"column", flex:1}}></View>
   
       

      </View>

      <View style={{ paddingHorizontal:70,flexDirection:"row", justifyContent: "center",paddingVertical:10 }}>
             <TouchableOpacity onPress={cero}  style={{   backgroundColor: "#556b2f",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin:15}}>
          <Text style={{   color: "white",
    fontWeight: "700",
    fontSize: 16,}}>Listo</Text>
        </TouchableOpacity>
      </View>
      
  
        </View>
    );

};
export default AgregarProducto;