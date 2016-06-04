import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

var Flex = React.createClass({

    render: function () {
        return (
            <View style={[styles.container]}>
                <View style={[styles.box]}>
                    <View style={[styles.flex,styles.borderBottom,styles.flexDistrict]}>
                        <View style={[styles.flex]}></View>
                        <View style={[styles.flex,styles.borderLeft]}></View>
                    </View>
                    <View style={[styles.flex]}></View>
                </View>
                <View style={[styles.box]}></View>
            </View>
        )
    }
});

var styles = StyleSheet.create({

    container: {
        flex: 1,
        borderColor: '#ddd',
        backgroundColor: '#ddd',
        marginTop: 20,
        justifyContent: 'center'
    },
    box: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#ddd',
    },
    flexDistrict:{
      flexDirection:'row'
    },
    borderBottom: {
        borderBottomWidth: 1
    },
    borderLeft:{
      borderLeftWidth:1
    },
    flex: {
        flex: 1
    }

});

module.exports = Flex;