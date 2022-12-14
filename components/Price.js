import React, { useEffect, useState } from "react";
import{View, Text, StyleSheet} from 'react-native';
const Price= (props) => {
    const [arr, setArr] = useState(props.finalObj)

    // console.log(props.finalObj.map((item) => {
    //     return (
    //         console.log(Object.keys(item), "here")
    //     )
    // }))
    
    return (
        <View>
         

            <View>
                {arr.map((item) => {
                    return Object.keys(item).map((data) => {
                        return (
                        <Text key={data}>{data} {item[data]}</Text>    
                        )
                    })
                })}
            </View>
           
           
        </View>
        
    )
}
export default Price;

const styles= StyleSheet.create({

    item:{
        backgroundColor: '#fff',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom:20,

    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',

    },
    square:{

        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:20,

    },
    itemText:{
        maxWidth:'80%',


    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
    },


})
