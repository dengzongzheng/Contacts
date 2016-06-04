/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import {
    AppRegistry,
    Image,
    StyleSheet,
    NavigatorIOS,
    Text,
    View,
    NavigationIOS,
    ScrollView,
    TextInput,
    TabBarIOS,
    AlertIOS,
    ActionSheetIOS,
    ListView
} from 'react-native';
import React, {Component} from 'react';

/*var Flex = require("./flexbox/FlexBox");
var List = require("./storage/Storage");


var _TabBar = React.createClass({

    render: function () {

    }

});

var Contacts = React.createClass({
    render: function () {
        return (
            <View style={{flex:1}}>
                <Flex></Flex>
                <Flex></Flex>
            </View>
        )
    }
});

var styles = StyleSheet.create({});

var App_List = React.createClass({
   render:function () {
       return (
           <View>
               <List></List>
           </View>
       )
   }
});



AppRegistry.registerComponent('Contacts', () => App_List);*/

var NewHouse  = require('./house/new');

var Header= require('./house/header');
var App_House = React.createClass({


    render: function () {
        return (
            <View style={styles.contain}>
                <NewHouse></NewHouse>
            </View>
        )
    }
});
var styles = StyleSheet.create({
    contain:{
        flex:1,
        marginTop:10,
        marginRight:10,
        marginLeft:10

    }
});


var ListViewTest = require('./listview/ListViewTest');

var App_List = React.createClass({
   
    render:function () {
        return(
            <View>
                <View style={styles.contain}>
                    <ListViewTest></ListViewTest>
                </View>
            </View>
        )
    }
});


AppRegistry.registerComponent('Contacts', () => App_House);