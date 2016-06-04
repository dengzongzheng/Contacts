import React,{Component} from 'react'
import {
    Text,
    View,
    Image,
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView
} from 'react-native'


var data = [
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试1'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试1'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试1'
    }

];
var data2 = [
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    },
    {
        url:'http://image2.jyall.com/v1/tfs/T1i3h_BgCT1RXrhCrK.jpg',
        title:'测试2'
    }
];
var ListViewTest = React.createClass({

    _data:{

    },

    getInitialState:function () {
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        return{
            dataSource:ds,
            pageNo:1,
            data:[]
        }
    },
    componentDidMount:function () {
        this.goTo();
    },
    goTo:function () {
        var pageNo = this.state.pageNo;
        var url = 'http://jiaju.jyall.com/newHouse/getHouses?cityId=10002&pageNo='+pageNo+'&pageSize=10';
        var that  = this;
        fetch(url).then((response)=>response.json()).then((responseData)=>{
            console.log(responseData);
            console.log(this.state.pageNo);
            var data = this.state.data.concat(responseData.data);
            that.setState({
                data:data,
                pageNo:pageNo+1,
                dataSource:this.state.dataSource.cloneWithRows(data)

            })
        }).done();
    },
    renderRow:function (rowData) {

        return(
            <View style={styles.contain}>
                <View>
                    <Image source={{uri:'http://image2.jyall.com/v1/tfs/'+rowData.realImg}} style={styles.image}></Image>
                </View>
                <View><Text>{rowData.title}</Text></View>
            </View>

        )

    },
    render:function () {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                onEndReached={this.goTo}
                initialListSize={90}
            >
            </ListView>
        )
    }

});

var styles = StyleSheet.create({

    image:{
        flex:1,
        height:50,
        width:50
    },
    contain:{
        flex:1,
        height:100
    },
    flex:{
        flex:1
    }

});

module.exports = ListViewTest;