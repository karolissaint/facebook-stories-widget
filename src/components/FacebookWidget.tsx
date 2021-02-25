import * as React from 'react';
import {
    Image,
    ImageSourcePropType,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Animated from 'react-native-reanimated';
import userImage from './../assets/img/XzA3NjA4MTAuanBn.jpg'
import storyImage from './../assets/img/skater.jpg'
interface WidgetProps {

}

interface StoryCardInterface {
    item: {
        user: ImageSourcePropType,
        story: ImageSourcePropType
    },
    index: number,
    scrollX: Animated.Node<number>
}

const CARD_WIDTH = 120;
const FLOATING_WIDTH = 50;
const TRANSITION = 42;

const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30,
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 10,
        backgroundColor: 'gray',
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#3d6ad6'
    },
    firstCard: {
        position: "absolute",
        width: CARD_WIDTH,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#999',
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        zIndex: 2,
        paddingBottom: 40
    },
    firstCardAvatar: {
        width: CARD_WIDTH,
        height: 120,
        // aspectRatio: 1,
        overflow: 'hidden'
    },
    storyImage: {
        width: CARD_WIDTH,
        height: undefined,
        aspectRatio: 4 / 6,
        zIndex: 1
    },
    storyCard: {
        marginHorizontal: 7,
        borderRadius: 10,
        borderWidth: 0,
        overflow: "hidden",
        position: "relative"
    },
    textHolder: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        padding: 5,
    },
    text: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 13
    },
    firstText: {
        textAlign: 'center',
        color: '#999999',
        fontWeight: '500',
        padding: 10,
    },
    firstTextHolder: {
        position: 'absolute',
        bottom: 5,
        left: 5
    },
    addButton: {
        position: 'absolute',
        top: -18,
        backgroundColor: '#3d6ad6',
        width: 36,
        height: 36,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        borderWidth: 2,
        borderColor: '#fff'
    },
    addButtonText: {
        marginTop: -3,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 26,
        fontWeight: '600'
    },
    widgetHolder: {
        position: 'relative'
    },
    floatingAddButton: {
        position: 'absolute',
        left: 0,
        top: '42%',
        width: FLOATING_WIDTH,
        height: 40,
        backgroundColor: '#fff',
        zIndex: 4,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50
    },
    absoluteCenter: {
        position: "absolute",
        top: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        zIndex: 2,
    },
    whiteBackground: {
        backgroundColor: '#fff',
        width: 70,
        height: 71,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    }
})

const StoryCard: React.FC<StoryCardInterface> = ({item, index, scrollX}) => {

    if (index === 0) {
        return (
            <View style={{
                width: CARD_WIDTH + 20,
            }}>
            </View>
        )
    }
    return (
        <View style={styles.storyCard}>
            <Image source={item.user} style={styles.avatar}/>
            <Image
                style={styles.storyImage}
                source={item.story}
            />
            <View style={styles.textHolder}>
                <Text style={styles.text}>
                    Karolis Muliuolis
                </Text>
            </View>
        </View>
    )
}

export const FacebookWidget: React.FC<WidgetProps> = (props) => {
    const data = new Array(6).fill({}).map((item, index) => {
        return {
            id: index,
            user: userImage,
            story: storyImage
        }
    })

    const scrollX = new Animated.Value(0)

    const onScrollHandler = Animated.event([{
        nativeEvent: {
            contentOffset: {
                x: scrollX
            }
        }
    }]);

    const translateX = Animated.interpolate(scrollX, {
        inputRange: [0, 100],
        outputRange: [0, 20],
        extrapolate: Animated.Extrapolate.CLAMP
    })
    const translateY = Animated.interpolate(scrollX, {
        inputRange: [10, 100],
        outputRange: [0, -TRANSITION]
    });
    const scale = Animated.interpolate(scrollX, {
        inputRange: [10, 100],
        outputRange: [1, 0.5]
    });
    const paddingBottom = Animated.interpolate(scrollX, {
        inputRange: [0, 100],
        outputRange: [100, 0]
    });
    const hide = Animated.interpolate(scrollX, {
        inputRange: [10, 100],
        outputRange: [0, 100]
    });
    const imageRadius = Animated.interpolate(scrollX, {
        inputRange: [10, 100],
        outputRange: [0, 100]
    });
    const cardRadius = Animated.interpolate(scrollX, {
        inputRange: [10, 100],
        outputRange: [10, 100]
    });
    const translateYPosition = Animated.interpolate(scrollX, {
        inputRange: [40, 60],
        outputRange: [0, 40]
    });
    const translateXPosition = Animated.interpolate(scrollX, {
        inputRange: [10, 60],
        outputRange: [0, -30]
    });
    const border = Animated.interpolate(scrollX, {
        inputRange: [10, 100],
        outputRange: [1, 0],
        extrapolate: Animated.Extrapolate.CLAMP
    });
    const blockScale = Animated.interpolate(scrollX, {
        inputRange: [80, 100],
        outputRange: [0, 1],
        extrapolate: Animated.Extrapolate.CLAMP
    });


    return (
        <SafeAreaView style={{marginTop: 300}}>
            <Animated.View style={[styles.absoluteCenter, {
                transform: [
                    {
                        scale: blockScale
                    }
                ]
            }]}>
                <View style={[styles.whiteBackground]}>

                </View>
            </Animated.View>
            <Animated.View style={[styles.firstCard, {
                borderRadius: Animated.max(cardRadius, 10),
                borderWidth: border,
                paddingBottom: Animated.min(paddingBottom, 59),
                transform: [
                    {
                        scale: Animated.max(Animated.min(scale, 1), 0.6)
                    },
                    {
                        translateY: Animated.max(Animated.min(translateYPosition, 50), 0)
                    },
                    {
                        translateX: Animated.max(Animated.min(translateXPosition, 0), -30)
                    }
                ]
            }]}>
                <Animated.Image
                    style={[styles.firstCardAvatar, {
                        borderRadius: imageRadius,
                        transform: [
                            {
                                scale: Animated.max(Animated.min(scale, 1), 0.75)
                            },
                        ]
                    }]}
                    source={userImage}/>
                <View style={{position: 'relative'}}>
                    <Animated.View style={[
                        styles.addButton,
                        {
                            transform: [
                                {
                                    translateY: Animated.max(Animated.min(translateY, 0), -30)
                                },
                                {
                                    translateX: Animated.min(Animated.max(translateX, 0), 20)
                                },
                            ]
                        }]}>
                        <Text style={styles.addButtonText}>
                            +
                        </Text>
                    </Animated.View>
                </View>
                <Animated.View style={[styles.firstTextHolder, {
                    transform: [
                        {translateY: Animated.max(hide, 0)}
                    ]
                }]}>
                    <Text style={styles.firstText}>
                        Create a Story
                    </Text>
                </Animated.View>
            </Animated.View>
            <Animated.ScrollView
                horizontal={true}
                onScroll={onScrollHandler}
                scrollEventThrottle={6}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            >
                <Animated.View style={{flexDirection: "row"}}>
                    {!!data && data.map((item, index) => {
                        return (
                            <StoryCard key={index} item={item} index={index} scrollX={scrollX}/>
                        )
                    })}
                </Animated.View>
            </Animated.ScrollView>
        </SafeAreaView>
    )
}
