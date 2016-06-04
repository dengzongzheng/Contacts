import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    StyleSheet,
    AsyncStorage,
    ScrollView
} from 'react-native'

'use district'

var Model = [
    {
        id: '1',
        title: '佳沛新西兰进口猕猴桃',
        desc: '12个装',
        price: 99,
        url: 'http://vczero.github.io/ctrip/guo_1.jpg'
    },
    {
        id:'2',
        title: '墨西哥进口牛油果',
        desc: '6个装',
        price: 59,
        url: 'http://vczero.github.io/ctrip/guo_2.jpg'
    },
    {
        id:'3',
        title: '美国加州进口车厘子',
        desc: '1000g',
        price: 91.5,
        url: 'http://vczero.github.io/ctrip/guo_3.jpg'
    },
    {
        id:'4',
        title: '新疆特产西梅',
        desc: '1000g',
        price: 69,
        url: 'http://vczero.github.io/ctrip/guo_4.jpg'
    },
    {
        id:'5',
        title: '陕西大荔冬枣',
        desc: '2000g',
        price: 59.9,
        url: 'http://vczero.github.io/ctrip/guo_5.jpg'
    },
    {
        id:'6',
        title: '南非红心西柚',
        desc: '2500g',
        price: 29.9,
        url: 'http://vczero.github.io/ctrip/guo_6.jpg'
    }
];

var styles = StyleSheet.create({

    item:{
        flex:1,
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderColor:'#ddd'
    },
    img:{
        flex:1,
        height:50,
        width:50
    },
    item_text:{
        lineHeight:18,
        textAlign:'center'
    }

});

var Item = React.createClass({

    render: function () {
        return (
            <View style={[styles.item]}>
                <TouchableOpacity onPress={this.props.press}>
                    <Image resizeMode="contain" style={[styles.img]} source={{uri:this.props.url}}>
                        <Text numberOfLines={1} style={styles.item_text}>{this.props.title}</Text>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }
});



var List = React.createClass({
    getInitialState:function () {
        return {
            count:0
        }
    },
    componentDidMount:function () {
        var _that = this;
        AsyncStorage.getAllKeys(function (err,keys) {
            if(err){
                console.log('error');
            }
            _that.setState({
                count:keys.length
            });
        });
    },
    press:function () {
      var count = this.state.count;
      count ++;
      this.setState({
          count:count
      })
    },
    render:function () {
        var list = [];
        for(var i in Model){
            var row = (
                <View>
                    <Item url={Model[i].url} title={Model[i].title} press={this.press.bind(this,Model[i])}></Item>
                </View>
            );
            list.push(row);
        }
        var count = this.state.count;
        var str = null;
        if(count){
            str = '共'+count+" 件商品";
        }
        return(
            <ScrollView style={{marginTop:30}}>
                {list}
            </ScrollView>
        )
    }

});
module.exports=List;

