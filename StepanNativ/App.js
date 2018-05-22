import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'SWIPE',
            loading: false,
            source: require('./assets/kisapisa.jpg')
        };
    }

    onSwipeLeft(gestureState) {
        this.setState({
            mode: 'CAT',
            source: {uri: 'https://loremflickr.com/400/300?id=' + Math.random()}
        })
    }

    onSwipeUp(gestureState) {
        this.setState({
            mode: 'SWIPE',
            source: require('./assets/kisapisa.jpg')
        })
    }

    onSwipeDown(gestureState) {
        this.setState({
            mode: 'МИШАНЯ',
            source: require('./assets/pisakisa.jpg')
        })
    }

    onSwipeRight(gestureState) {
        this.setState({
            mode: 'DOG',
            source: {uri: 'https://loremflickr.com/400/300/dog?id=' + Math.random()}
        })
    }

    render() {
       return (
            <View
                style={styles.container}>
                <Text style={styles.textStyle}>Bogdan</Text>
                <GestureRecognizer
                    onSwipeUp={(state) => this.onSwipeUp(state)}
                    onSwipeDown={(state) => this.onSwipeDown(state)}
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                >
                    <Image
                        onLoadStart={(e) => this.setState({loading: true})}
                        onLoadEnd={(e) => this.setState({loading: false})}
                        style={{width: 400, height: 300}}
                        source={this.state.source}
                    />
                </GestureRecognizer>
                <Text style={styles.textStyle}>{this.state.loading ? 'LOADING' : this.state.mode}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    callButton: {
        fontSize: 28
    },
    textStyle: {
        // color: 'white',
        fontSize: 48
    }
});
