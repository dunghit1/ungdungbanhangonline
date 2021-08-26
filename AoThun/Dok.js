import React from 'react'
import { Text,View,StyleSheet, TouchableOpacity,Image, ScrollView,Dimensions } from 'react-native'
import {SliderBox} from 'react-native-image-slider-box';
const windowWidth = Dimensions.get('window').width;
const Dok=({navigation})=>{
  const C= [
            require('../Image/ao3.png'),
            require('../Image/ao5.png'),
            require('../Image/ao1.png'),
            require('../Image/ao4.png'),
                ]
     return (
       <View style={Styles.container}>
            <ScrollView >
                
              <View style={Styles.slide}>
              <SliderBox images={C}
             sliderBoxHeight={400}
             onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
             dotColor="#FFEE58"
             inactiveDotColor="#90A4AE"
             />

              </View>
              <View style={Styles.foot}>
                 <Text style={{fontSize:20,marginTop:10,marginLeft:10}}>Áo phông unisex OK DOK</Text>
                 <Text style={{fontSize:20,marginTop:10,marginLeft:10,color:'red'}}>₫260.000</Text>
                 
              </View>
              <View style={Styles.mucSize}>
                 <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>Chọn loại hàng (3 size)</Text>
                 <View style={{flexDirection:'row'}}>
                   <TouchableOpacity style={Styles.size}>
                     <Text>M</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={Styles.size}>
                     <Text>L</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={Styles.size}>
                     <Text>XL</Text>
                   </TouchableOpacity>
                 </View>
              </View>
              <View style={Styles.addShop}>
                <View>
                <Image source={require('../Image/logo.png')} style={Styles.logo}/>
                </View>
                <View style={{marginLeft:10}}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>Hip Shop</Text>
                  <View style={{flexDirection:'row',marginTop:2}}>
                    <Image source={require('../Image/online.png')} style={{height:10,width:10,marginTop:6}}/>
                    <Text style={{fontSize:16, marginLeft:5}}>Đang Online</Text>
                  </View>
                  <View style={{flexDirection:'row',marginTop:5}}>
                    <Image source={require('../Image/dinhvi.png')} style={{height:15,width:12}}/>
                    <Text style={{fontSize:16,marginLeft:5}}>Hà Nội</Text>
                  </View>
                </View>
              </View>
              <View style={Styles.spkhac}>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,marginLeft:10}}>Các Sản Phẩm Khác Của Shop</Text>
                <View >
                <ScrollView horizontal={true}>
            
                  <TouchableOpacity>
                  <View style={Styles.iconsp}>
                    <Image source={require('../Image/ao5.png')} style={Styles.imagespkhac}/>
                    <Text style={Styles.Textspkhac}>Áo ADLV</Text>
                    <Text style={{color:'red',fontSize:18}}>₫260.000</Text>
                  </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={()=>navigation.navigate('SkyHigh')}>
                    <View style={Styles.iconsp}>
                      <Image source={require('../Image/aowash1.png')} style={Styles.imagespkhac}/>
                      <Text style={Styles.Textspkhac}>Áo Wash Skyhigh</Text>
                      <Text style={{color:'red',fontSize:18}}>₫290.000</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('NikeSb')}>
                  <View style={Styles.iconsp}>
                    <Image source={require('../Image/quandui5.png')} style={Styles.imagespkhac}/>
                    <Text style={Styles.Textspkhac}>Quần Nike Sb</Text>
                    <Text style={{color:'red',fontSize:18}}>₫290.000</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('Adidas')}>
                  <View style={Styles.iconsp}>
                   <Image source={require('../Image/quandui1.png')} style={Styles.imagespkhac}/>
                   <Text style={Styles.Textspkhac}>Quần Adidas</Text>
                    <Text style={{color:'red',fontSize:18}}>₫290.000</Text>
                  </View>
                  </TouchableOpacity>
                 
               </ScrollView>
                </View>
              </View>
              <View style={Styles.thongtin}>
                <View style={{backgroundColor:'white',height:50,justifyContent:'center'}}>
                   <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>Chi tiết sản phẩm</Text>
                </View>
                <View style={Styles.thongtin2}>
                   <View style={Styles.TextChiTiet}>
                       <Text style={{fontSize:20,marginTop:10,marginLeft:10}}>Kho</Text>
                       <Text style={{fontSize:20,marginLeft:105,marginTop:10}}>999</Text>
                   </View>
                   <View style={Styles.TextChiTiet}>
                       <Text style={{fontSize:20,marginTop:15,marginLeft:10}}>Xuất xứ</Text>
                       <Text style={{fontSize:20,marginLeft:72,marginTop:15}}>Việt Nam</Text>
                   </View>
                   <View style={Styles.TextChiTiet}>
                       <Text style={{fontSize:20,marginTop:15,marginLeft:10}}>Chất liệu</Text>
                       <Text style={{fontSize:20,marginLeft:60,marginTop:15}}>Cotton</Text>
                   </View>
                   <View style={Styles.TextChiTiet}>
                      <Text style={{fontSize:20,marginTop:15,marginLeft:10}}>Cổ áo</Text>
                      <Text style={{fontSize:20,marginLeft:85,marginTop:15}}>Tròn</Text>
                   </View>
                   <View style={Styles.TextChiTiet}>
                      <Text style={{fontSize:20,marginTop:15,marginLeft:10}}>Mẫu</Text>
                      <Text style={{fontSize:20,marginLeft:99,marginTop:15}}>In</Text>
                   </View>
                   <View style={Styles.TextChiTiet}>
                      <Text style={{fontSize:20,marginTop:15,marginLeft:10}}>Gửi từ</Text>
                      <Text style={{fontSize:20,marginLeft:83,marginTop:15}}>Quận Hà Đông, Hà Nội</Text>
                   </View>
                   
                </View>
              </View>
              <View style={Styles.danhGia}>
                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>Chưa có đánh giá</Text>
              </View>
            </ScrollView>
            <View style={Styles.thanhcongcu}>
              <TouchableOpacity style={{width:windowWidth/5,borderRightWidth:1,borderRightColor:'white',backgroundColor:'#08A37A'}}>
                 <View style={{alignItems:'center'}}>
                     <Image source={require('../Image/Picture2.png')} style={{height:30,width:40,marginTop:4}}/>
                     <Text style={{color:'white'}}>Chat Ngay</Text>
                 </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:windowWidth/3,borderRightWidth:1,borderRightColor:'white',backgroundColor:'#08A37A'}}>
              <View style={{alignItems:'center'}} >
              <Image source={require('../Image/giohang.png')} style={{height:30,width:40,marginTop:4}}/>

                 <Text style={{color:'white'}}>Thêm Vào Giỏ Hàng</Text>
                 </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:windowWidth/2,backgroundColor:'#FF3300'}}>
              <View style={{alignItems:'center',justifyContent:'center',height:50}}>
                 <Text style={{color:'white',fontSize:20}}>Mua Ngay</Text>
                 </View>
              </TouchableOpacity>
            </View>
          </View>
     )
    
}
const Styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#DCDCDC'
  },
  slide:{
    height:400,
    
  },
  foot:{
     backgroundColor:'white',
     height:80
  },
  size:{
    height:30,
    width:100,
    backgroundColor:'#DCDCDC',
    marginLeft:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  mucSize:{
    backgroundColor:'white',
    height:90,
    marginTop:10
  },
  logo:{
    height:60,
    width:60,
    borderRadius:30,
    marginTop:10
  },
  addShop:{
    backgroundColor:'white',
    marginTop:10,
    height:100,
    flexDirection:'row'
  },
  spkhac: {
    height:390,
    backgroundColor:'white',
    marginTop:10,
  },
  iconsp: {
    height:320,
    width:210,
    marginLeft:15,
    marginTop:20,
    fontWeight:'bold',
    borderColor: '#D3D3D3',
    borderWidth:1,
    alignItems:'center'
  },
  thongtin: {
    height:300,
    marginTop:10
  },
  imagespkhac: {
    height:250,
    width:200,
    
  },
  Textspkhac:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:10
  },
  thongtin2:{
    backgroundColor:'white',
    height:270,
    marginTop:2
  },
  TextChiTiet: {
    flexDirection:'row'
  },
  danhGia: {
    height:40,
    backgroundColor:'white',
    marginTop:33,
    marginBottom:20,
    justifyContent:'center',
    
    
  },
  thanhcongcu:{
    height:55,
    flexDirection:'row'
  },
  thanhcongcu:{
    height:55,
    flexDirection:'row'
  }
})
export default Dok;