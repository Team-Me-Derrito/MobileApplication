import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState, String, useEffect} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { resolveAssetSource } from 'react-native/Libraries/Image/resolveAssetSource';
import { getAccount } from '../API/Account';

const imgSource = [
    require('../images/G01.png'),
    require('../images/G11.png'),
    require('../images/G21.png'),
    require('../images/G31.png'),
    require('../images/G41.png'),
  
    require('../images/I01.png'),
    require('../images/I11.png'),
    require('../images/I21.png'),
    require('../images/I31.png'),
    require('../images/I41.png'),
  
    require('../images/F01.png'),
    require('../images/F11.png'),
    require('../images/F21.png'),
    require('../images/F31.png'),
    require('../images/F41.png'),
  
    require('../images/P01.png'),
    require('../images/P11.png'),
    require('../images/P21.png'),
    require('../images/P31.png'),
    require('../images/P41.png')
];

export default function Base_Template() {

    const [account, setAccount] = useState([]);
    useEffect(() => {
      async function getData() {
          const result = await getAccount();
          setAccount(result);
      }
      if (! account.length) {
          getData();
      }
        
    }, []);

    console.log('account', account);

    const [theme, setTheme] = useState(3);

    //const accScore = account.score;
    let accScore = account.score;

    if(accScore < 10){
        accScore = 0;
    } else if (accScore >= 10 && accScore < 20){
        accScore = 1;
    }
    else if (accScore >= 20 && accScore < 30){
        accScore = 2;
    }
    else if (accScore >= 30 && accScore < 40){
        accScore = 3;
    }
    else if (accScore >= 40){
        accScore = 4;
    }

    const tree = (theme*5) + accScore;

    const treePath = imgSource[tree];

    function changeTheme() { setTheme((theme + 1) % 4); }

    //Code goes here
    return (
        <View style={styles.showContainer}>
            <View>
                <View style={styles.row}>
                    <Header text="Events" />
                </View>
                
            </View>
            <View style={styles.container}>
                <View>
                    <Image source={treePath} style={styles.image}/>
                </View>
                <Button title="Change Theme" onPress={() => changeTheme()}/>
            </View>
            <View style={styles.row}>
                    <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom: {
        flex: 1, // Ensure it takes up the remaining space
        justifyContent: 'flex-end', // Push content to the bottom
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    showContainer: {
        flex: 1
    },
    image: {
        width: 400,
        height: 400,
    }
});
