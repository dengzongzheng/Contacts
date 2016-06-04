import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

var styles = StyleSheet.create({

    contain: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    border: {
        borderWidth: 1,
        borderColor: '#ddd'
    },
    border_right:{
        borderRightWidth:1,
        borderRightColor:'#ddd'
    },
    back:{
        justifyContent:'center',
        alignItems:'center'
    },
    back_imag:{

    },
    flex_row_3:{
        flex:2.5,
        flexDirection:'row',
    },
    type_text:{
        borderWidth:1,
        borderColor:"#ddd",
        height:30
    },
    text:{
        textAlign:'center',
        overflow:'hidden'
    },
    back_red:{
        backgroundColor:'red',
        overflow:'hidden'
    },
    type_back:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    }

});

var Header = React.createClass({
    
    getInitialState:function () {
        return{
            _currentPage:this.props._currentPage
        }
    },
    _newHouse:function () {
       this.props._newHouse();
    },
    _secondHouse:function () {
        this.props._secondHouse();
    },
    _rentHouse:function () {
        this.props._rentHouse();
    },
    render: function () {
        var header;
        if(this.state._currentPage=="new"){
            header = (
                <View style={[styles.flex_row_3,styles.type_text]}>
                    <View style={[styles.flex_row,styles.type_back,styles.back_red]}>
                        <TouchableHighlight onPress={this._newHouse}>
                            <Text style={[styles.flex_row,styles.text]}>新房</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={[styles.flex_row,styles.type_back,this.props.back]}>
                        <TouchableHighlight onPress={this._secondHouse}>
                            <Text style={[styles.flex_row,styles.text]}>二手房</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={[styles.flex_row,styles.type_back]}>
                        <TouchableHighlight onPress={this._rentHouse}>
                            <Text style={[styles.flex_row,styles.text]}>租房</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }else if(this.state._currentPage=="second"){
            header = (
                <View style={[styles.flex_row_3,styles.type_text]}>
                    <View style={[styles.flex_row,styles.type_back]}>
                        <TouchableHighlight onPress={this._newHouse}>
                            <Text style={[styles.flex_row,styles.text]}>新房</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={[styles.flex_row,styles.type_back,styles.back_red]}>
                        <TouchableHighlight onPress={this._secondHouse}>
                            <Text style={[styles.flex_row,styles.text]}>二手房</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={[styles.flex_row,styles.type_back]}>
                        <TouchableHighlight onPress={this._rentHouse}>
                            <Text style={[styles.flex_row,styles.text]}>租房</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }

        return (
            <View style={[styles.contain]}>
                <View style={[styles.flex_row,styles.back]}>
                    <Image style={[styles.back_imag]} source={require('../images/back_button.png')} />
                </View>
                {header}
                <View style={[styles.flex_row,styles.back]}>
                    <Image source={require('../images/home_search.png')}></Image>
                </View>
                <View style={[styles.flex_row,styles.back]}>
                    <Image source={require('../images/dibiao.png')}></Image>
                </View>
            </View>
        )
    }
});
module.exports=Header;