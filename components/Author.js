import React,{useState} from "react";
import{View, Text, StyleSheet, StatusBar, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import Task from './Task'


export default function Author({navigation}){

  const [task, setTask]=useState();
  const[taskItems, setTaskItems]=useState([]);

  const handleAddTask= () => {
    
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completTask= (index) => {
      // let itemsCopy=[...taskItems];
      // itemsCopy.splice(index, 1);
      // setTaskItems(itemsCopy);
      navigation.navigate('Course')
      
      

  }
  console.log(taskItems, "taskItems")

  return(
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
      
      
      
      
      <View style={styles.tasksWrapper}>

      <Text style={styles.sectionTitle}>
        Author list

      </Text>
      <View style={styles.items}>
        {
          taskItems.map((item, index) =>{
            return(
            <TouchableOpacity key={index} onPress={()=>completTask(index)}>
              <Task text={item} />

            </TouchableOpacity>

          )})
        }
      {/* <Task test={'Task 1'}/>
      <Task test={'Task 2'}/> */}

      </View>
      </View>
      </ScrollView>

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Enter Author name"}
        value={task} 
        onChangeText={text => setTask(text)}/>
        <TouchableOpacity  onPress={() => 
            handleAddTask()
      } >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>
            Add Author
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