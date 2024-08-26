import React, {useContext} from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import {Context} from "../context/BlogContext";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const IndexScreen = () => {

    const {state,addBlogPost} = useContext(Context);
    return (
        <View>
            <Button title = "Add Post" 
                onPress={addBlogPost}
            />
            <FlatList
                data = {state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item}) =>{
                    return (
                       <View style = { styles.post}> 
                            <Text style={styles.title}>{item.title}</Text>
                            <EvilIcons style={styles.delete} name="trash" size={30} color="black" />
                       </View>
                    );

                }}
            />
        </View>
    );
    
}; 

const styles = StyleSheet.create ({

    post:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'lightblue',
        marginLeft:15,
        marginRight:15,
        height:40,
        borderRadius:10,
        marginTop:5,
        marginBottom:5,
    },

    title:{
        fontSize:20,
        marginLeft:18,
    },

    delete:{
        marginLeft:180, 
    }
});

export default IndexScreen;