import React from 'react'
import { Text,View,StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native'
function Search({navigation}){
     return (
            <View style={Styles.Container}>
              <View style={Styles.Header}>
              <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:'15%'}}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Image source={require('../Image/Menu.png')} style={{height:'70%',width:50,marginTop:10}}/>
                </TouchableOpacity>
             </View>
              </View>
              <View >
                <View style={{borderWidth:1,borderBottomColor:'black',flexDirection:'row',marginTop:10,marginLeft:10,width:410}}>
                <TextInput style={Styles.input}
                placeholder="Tìm kiếm sản phẩm"
                    onChangeText={text => setText(text)}
                    />
                    <TouchableOpacity>
                    <Image source={require('../Image/iconSearch.png')} style={{height:40,width:40,marginLeft:230,marginTop:5}}/>
                    </TouchableOpacity>
                </View>

              </View>
            </View>
     )
    
}
export default Search;
const Styles=StyleSheet.create({
    Container:{
        flex:1,
    },
    Header:{
        backgroundColor:'#008080',
        height:50,
        
    },
    TextInput:{
        borderWidth : 1,
      height:50,
      width:300,
      
      
    }
})