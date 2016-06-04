import React,{Component} from 'react'
import {
    Image,
    Text,
    StyleSheet,
    View,
    ListView,
    ScrollView,
    RecyclerViewBackedScrollView
}from 'react-native'


var new_Styles = StyleSheet.create({

    container:{
        flex:1,
        height:100,
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        paddingBottom:10

    },
    border:{
        borderWidth:1,
        borderColor:'#ddd'
    },
    border_Bottom:{
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },
    flex_row:{
        flex:1,
        flexDirection:'row',
    },
    flex_column:{
        flex:1,
        flexDirection:'column',
    },
    border_Right:{
        borderRightWidth:1,
        borderRightColor:'#ddd'
    },
    img:{
        height:90,
        width:120
    },
    title_text:{
        fontSize:15,
        textAlign:'justify',
        alignItems:'flex-end'
    },
    position_text:{
        fontSize:12,
        textAlign:'justify',
        alignItems:'flex-end'
    },
    flex_0_8:{
       flex:0.8
    },
    font_price:{
        color:'red',
        fontSize:12
    },
    font_area:{
        fontSize:12,
        color:'#ddd'
    },
    tag_text:{
        borderWidth:1,
        borderColor:'#ddd',
        fontSize:11,
        padding:2,
        textAlign:'center',
        height:16,
        marginRight:2
    },
    padding_right:{
        paddingRight:2
    },
    padding_top:{
        paddingTop:2
    },
    margin_right:{
        marginRight:5
    }


});
var imagePath = "http://image1.jyall.com/v1/tfs/";

var Util = require('../house/util');
var Header= require('../house/header');


var NewHouse = React.createClass({

    getInitialState:function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return{
            _newData:[],
            _secondData:[],
            _rentData:[],
            _newDataSource: ds,
            _secondDataSource: ds,
            _rentDataSource: ds,
            _currentPage:'new',
            _newIsLoading: true,
            _secondIsLoading: true,
            _rentIsLoading: true,
            _newPageNo:1,
            _secondPageNo:1,
            _rentPageNo:1
        }
    },
    componentDidMount:function () {
        this._getNewRows();

    },
    _newHouse:function () {
        this.setState({
            _currentPage:'new'
        });
    },
    _secondHouse:function () {
        alert('second');
        this.setState({
            _currentPage:'second'
        });
        this._getSecondRows();
    },
    _rentHouse:function () {
        this.setState({
            _currentPage:'rent'
        })
    },
    _newRenderRow:function (rowData) {
        var tags = [];
        for(var i in rowData.tags){
            var tag = (
                <Text key={rowData.tags[i].tagName} style={[new_Styles.tag_text]}>{rowData.tags[i].tagName}</Text>
            );
            tags.push(tag);
        }
        return(
            <View style={[new_Styles.container,new_Styles.border_Bottom]}>
                <View style={[new_Styles.flex_row,new_Styles.flex_0_8,new_Styles.margin_right]}>
                    <Image style={[new_Styles.img,new_Styles.flex_column]} source={{uri:imagePath+rowData.realImg}}></Image>
                </View>
                <View style={[new_Styles.flex_column]}>
                    <View style={[new_Styles.flex_row]}>
                        <View style={[new_Styles.flex_row,new_Styles.flex_0_8]}>
                            <Text numberOfLines={1} style={[new_Styles.flex_column,new_Styles.title_text]}>{rowData.title}</Text>
                        </View>
                        <View style={[new_Styles.flex_row]}>
                            <Text style={[new_Styles.font_price]}>{rowData.averagePrice} 元/m2</Text>
                        </View>
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        <View style={[new_Styles.flex_row]}>
                            <Text numberOfLines={1} style={[new_Styles.flex_column,new_Styles.position_text]}>{rowData.position}</Text>
                        </View>
                        <View style={[new_Styles.flex_row]}>
                            <Text numberOfLines={1} style={[new_Styles.font_area]}>{rowData.area} m2</Text>
                        </View>
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        {tags}
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        <Text style={[new_Styles.font_area]}>{rowData.privilege}</Text>
                    </View>
                </View>
            </View>
        )
    },
    _getNewRows:function () {
        var pageNo = this.state._newPageNo;
        var url = 'http://jiaju.jyall.com/newHouse/getHouses?cityId=10002&pageNo='+pageNo+'&pageSize=10';
        var that  = this;
        fetch(url).then((response)=>response.json()).then((responseData)=>{
            console.log(responseData);
            var data = this.state._newData.concat(responseData.data);
            console.log(this.state._newPageNo);
            that.setState({
                _newData:data,
                _newPageNo:pageNo+1,
                _newDataSource:this.state._newDataSource.cloneWithRows(data),
                _newIsLoading:false
            })
        }).done();
    },
    _secondRenderRow: function (rowData) {
        var tags = [];
        for (var i in rowData.tags) {
            var tag = (
                <Text key={rowData.tags[i].tagName} style={[new_Styles.tag_text]}>{rowData.tags[i].tagName}</Text>
            );
            tags.push(tag);
        }
        return (
            <View style={[new_Styles.container,new_Styles.border_Bottom]}>
                <View style={[new_Styles.flex_row,new_Styles.flex_0_8,new_Styles.margin_right]}>
                    <Image style={[new_Styles.img,new_Styles.flex_column]} source={{uri:imagePath+rowData.realImg}}></Image>
                </View>
                <View style={[new_Styles.flex_column]}>
                    <View style={[new_Styles.flex_row]}>
                        <View style={[new_Styles.flex_row,new_Styles.flex_0_8]}>
                            <Text numberOfLines={1}
                                  style={[new_Styles.flex_column,new_Styles.title_text]}>{rowData.title}</Text>
                        </View>
                        <View style={[new_Styles.flex_row]}>
                            <Text style={[new_Styles.font_price]}>{rowData.averagePrice} 元/m2</Text>
                        </View>
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        <View style={[new_Styles.flex_row]}>
                            <Text numberOfLines={1}
                                  style={[new_Styles.flex_column,new_Styles.position_text]}>{rowData.position}</Text>
                        </View>
                        <View style={[new_Styles.flex_row]}>
                            <Text numberOfLines={1} style={[new_Styles.font_area]}>{rowData.area} m2</Text>
                        </View>
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        {tags}
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        <Text style={[new_Styles.font_area]}>{rowData.privilege}</Text>
                    </View>
                </View>
            </View>
        )
    },
    _getSecondRows: function () {
        var pageNo = this.state._secondPageNo;
        var url = 'http://jiaju.jyall.com/secondHouse/getHouses?cityId=10002&pageNo=' + pageNo + '&pageSize=10';
        var that = this;
        fetch(url).then((response)=>response.json()).then((responseData)=> {
            console.log(responseData);
            var data = this.state._secondData.concat(responseData.data);
            console.log(this.state._secondData);
            that.setState({
                _secondData: data,
                _secondPageNo: pageNo + 1,
                _secondDataSource: this.state._secondDataSource.cloneWithRows(data),
                _newIsLoading: false
            })
        }).done();
    },
    _rentRenderRow: function (rowData) {
        var tags = [];
        for (var i in rowData.tags) {
            var tag = (
                <Text key={rowData.tags[i].tagName} style={[new_Styles.tag_text]}>{rowData.tags[i].tagName}</Text>
            );
            tags.push(tag);
        }
        return (
            <View style={[new_Styles.container,new_Styles.border_Bottom]}>
                <View style={[new_Styles.flex_row,new_Styles.flex_0_8,new_Styles.margin_right]}>
                    <Image style={[new_Styles.img,new_Styles.flex_column]} source={{uri:imagePath+rowData.realImg}}></Image>
                </View>
                <View style={[new_Styles.flex_column]}>
                    <View style={[new_Styles.flex_row]}>
                        <View style={[new_Styles.flex_row,new_Styles.flex_0_8]}>
                            <Text numberOfLines={1}
                                  style={[new_Styles.flex_column,new_Styles.title_text]}>{rowData.title}</Text>
                        </View>
                        <View style={[new_Styles.flex_row]}>
                            <Text style={[new_Styles.font_price]}>{rowData.averagePrice} 元/m2</Text>
                        </View>
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        <View style={[new_Styles.flex_row]}>
                            <Text numberOfLines={1}
                                  style={[new_Styles.flex_column,new_Styles.position_text]}>{rowData.position}</Text>
                        </View>
                        <View style={[new_Styles.flex_row]}>
                            <Text numberOfLines={1} style={[new_Styles.font_area]}>{rowData.area} m2</Text>
                        </View>
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        {tags}
                    </View>
                    <View style={[new_Styles.flex_row]}>
                        <Text style={[new_Styles.font_area]}>{rowData.privilege}</Text>
                    </View>
                </View>
            </View>
        )
    },
    _getRentRows: function () {
        var pageNo = this.state._newPageNo;
        var url = 'http://jiaju.jyall.com/rentHouse/getHouses?cityId=10002&pageNo=' + pageNo + '&pageSize=10';
        var that = this;
        fetch(url).then((response)=>response.json()).then((responseData)=> {
            console.log(responseData);
            var data = this.state._newData.concat(responseData.data);
            console.log(this.state._newPageNo);
            that.setState({
                _newData: data,
                _newPageNo: pageNo + 1,
                _newdataSource: this.state._newdataSource.cloneWithRows(data),
                _newIsLoading: false
            })
        }).done();
    },
    loading:function () {
        return (
            <View><Text>loading.....</Text></View>
        )
    },
    render:function () {
        var content;
        if(this.state._newIsLoading ){
            content = this.loading();
        }else if(this.state._currentPage=='new'){
            content = (
                <ListView
                    initialListSize={90}
                    dataSource={this.state._newDataSource}
                    renderRow={this._newRenderRow}
                    pageSize={3}
                    onEndReached={this._getNewRows}
                >
                </ListView>
            );
        }else if(this.state._currentPage=='second'){
            content = (
                <ListView
                    initialListSize={90}
                    dataSource={this.state._secondDataSource}
                    renderRow={this._newRenderRow}
                    pageSize={3}
                    onEndReached={this._getNewRows}
                >
                </ListView>
            );
        }else if(this.state._currentPage=='rent'){
            content = (
                <ListView
                    initialListSize={90}
                    dataSource={this.state._rentDataSource}
                    renderRow={this._newRenderRow}
                    pageSize={3}
                    onEndReached={this._getNewRows}
                >
                </ListView>
            );
        }

        return (

            <View style={{flex:1}}>
                <View>
                    <Header _currentPage={this.state._currentPage} _newHouse={this._newHouse} _secondHouse={this._secondHouse} _rentHouse={this._rentHouse}></Header>
                </View>
                {content}
            </View>
        );
    }
});


module.exports=NewHouse;