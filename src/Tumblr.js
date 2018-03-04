import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Easing,
    ImageBackground
} from "react-native";

import Util from "./utils";

class Tumblr extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            shift: new Animated.Value(-120)
        };
    }

    _pushMenu() {
        this.setState({ show: true });

        Animated.timing(this.state.shift, {
            toValue: Util.size.width === 375 ? 50 : 30,
            duration: 200,
            delay: 100,
            easing: Easing.elastic(1)
        }).start();
    }

    _popMenu() {
        Animated.timing(this.state.shift, {
            toValue: -120,
            duration: 200,
            delay: 100,
            easing: Easing.elastic(1)
        }).start();

        setTimeout(() => {
            this.setState({ show: false });
        }, 500);
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.imgContainer}
                    onPress={() => this._pushMenu()}
                >
                    <Image
                        source={require("./img/tumblr.png")}
                        style={styles.img}
                    />
                </TouchableOpacity>
                {this.state.show ? (
                    <ImageBackground
                        source={require("./img/tumblrblur.png")}
                        style={styles.menu}
                    >
                        <Animated.View style={[styles.menuItem1, { left: this.state.shift }]}>
                            <Image style={styles.menuImg} source={require("./img/tumblr-text.png")} />
                            <Text style={styles.menuText}>Text</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem2, { right: this.state.shift }]}>
                            <Image style={styles.menuImg} source={require("./img/tumblr-photo.png")} />
                            <Text style={styles.menuText}>Photo</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem3, { left: this.state.shift }]}>
                            <Image style={styles.menuImg} source={require("./img/tumblr-quote.png")} />
                            <Text style={styles.menuText}>Quote</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem4, { right: this.state.shift }]}>
                            <Image style={styles.menuImg} source={require("./img/tumblr-link.png")} />
                            <Text style={styles.menuText}>Link</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem5, { left: this.state.shift }]}>
                            <Image style={styles.menuImg} source={require("./img/tumblr-chat.png")} />
                            <Text style={styles.menuText}>Chat</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem6, { right: this.state.shift }]}>
                            <Image style={styles.menuImg} source={require("./img/tumblr-audio.png")} />
                            <Text style={styles.menuText}>Audio</Text>
                        </Animated.View>
                        <TouchableOpacity style={styles.dismissBtn} onPress={() => this._popMenu()}>
                            <Text style={styles.dismissText}>Never Mind</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                ) : (
                    <View />
                )}
            </View>
        );
    }
}

export default Tumblr;

const styles = StyleSheet.create({
    imgContainer: {},
    img: {
        resizeMode: "contain",
        marginTop: 15,
        height: Util.size.height - 3,
        width: Util.size.width
    },
    menu: {
        position: "absolute",
        top: 0,
        left: 0,
        width: Util.size.width,
        height: Util.size.height
    },
    menuImg: {
        width: 120,
        height: 100,
        resizeMode: "contain"
    },
    menuText: {
        color: "#fff",
        textAlign: "center"
    },
    menuItem1: {
        position: "absolute",
        left: 50,
        top: 80
    },
    menuItem2: {
        position: "absolute",
        right: 50,
        top: 80
    },
    menuItem3: {
        position: "absolute",
        left: 50,
        top: 250
    },
    menuItem4: {
        position: "absolute",
        right: 50,
        top: 250
    },
    menuItem5: {
        position: "absolute",
        left: 50,
        top: 420
    },
    menuItem6: {
        position: "absolute",
        right: 50,
        top: 420
    },
    dismissBtn: {
        position: "absolute",
        width: Util.size.width,
        left: 0,
        bottom: 50
    },
    dismissText: {
        color:"rgba(255,255,255,0.2)",
        fontWeight: "700",
        textAlign: "center"
    }
});
