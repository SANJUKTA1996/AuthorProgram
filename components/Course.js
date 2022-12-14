// import React from "react";
// import{View, Text} from 'react-native';

// export default function Course(){
//     return(
//         <View>
//             <Text>
//                 Course
//             </Text>
//         </View>
//     )
// }






import React,{useState} from "react";
import{View, Text, StyleSheet, StatusBar, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import Price from './Price';


export default function Course(){

  const [bname, setBname]=useState("");
  const[bnameItems, setBnameItems]=useState([]);
  const [price,setPrice]=useState([]);
  const[priceItem, setPriceitem]=useState([]);
  const [finalArr, setFinalArr] = useState([])
  const [finalObj, setFinalObj] = useState([{}])
  const [name, setName] = useState([])
  const [prc, setPrc] = useState([])

  const handleAddTask= () => {
    // name.push(bname)
    // setName(name)
    // prc.push(price)
    // setPrc(prc)
    // setFinalArr([...finalArr, bname, price])
    finalObj.push({[bname]: price})
    setFinalObj(finalObj)
  }
  console.log(name, "name")
  console.log(prc, "prc")
  const completTask= (index) => {
      let itemsCopy=[...bnameItems];
      itemsCopy.splice(index, 1);
      setBnameItems(itemsCopy);
   
      
      

  }
  // console.log(bname, "here")
  // console.log(finalArr, "array")
  // console.log("obj", Object.keys(finalObj))
  console.log(finalObj, "finalObj")

  return(
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
      
      
      
      
      <View style={styles.tasksWrapper}>

      <Text style={styles.sectionTitle}>
        Book Details

      </Text>
     
      <View style={styles.items}>
        {/* {
          Object.keys(finalObj).map((item, index) =>{
            console.log(finalObj[item]) */}
            
            <TouchableOpacity>
              <Price finalObj={finalObj} />
                {/* <Price price1={item} /> */}
            </TouchableOpacity>
            
           

          {/* )}) */}
        {/* } */}
      {/* <Task test={'Task 1'}/>
      <Task test={'Task 2'}/> */}

      </View>
          
   

      
      </View>
      </ScrollView>

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <View>
        <TextInput style={styles.input} placeholder={"Enter Book name"}
        value={bname} 
        onChangeText={name => setBname(name)}/>
        
        <TextInput style={styles.input} placeholder={"Enter Book Price"}
        value={price}
        onChangeText={price1 => setPrice(price1)}
        />
        
        
        </View>
        <TouchableOpacity  onPress={() => 
            handleAddTask()
      } >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>
            Add Ditels
          </Text>

        </View>
       
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#E8EAED",
    
  },
  tasksWrapper:{
    paddingTop:40,
    paddingHorizontal:20,


  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',

  },
  items:{
        marginTop:30,
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  input:{
    paddingVertical:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,

  },
  addWrapper:{
    width:100,
    height:60,
    backgroundColor:'Black',
    color:"blue",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'Blue',
    borderWidth:1,

  },
  addText:{},

})






