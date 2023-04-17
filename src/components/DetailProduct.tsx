import {BlurView} from '@react-native-community/blur';
import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import ComparePrice from './ComparePrice';
import FigmaIcon from './FigmaIcon/FigmaIcon';
import Header from './Header';
import Rating from './Rating';
import ScreenContainer from './ScreenContainer';
import ViewBorders from './Views/ViewBorders';
import DefaultImage from '../assets/defaultImg';
import useTheme from '../Context/ThemeContext';
import {useAppNavigation} from '../navigators/hooks';
import Button from '../uikit/Button';
import IconButton from '../uikit/IconButton';
import {Font12} from '../uikit/Typography/Font12';
import {Font14} from '../uikit/Typography/Font14';
import {Font16} from '../uikit/Typography/Font16';
import {Font20} from '../uikit/Typography/Font20';
import {responsiveHeight} from '../utils/responsive-dimensions';
import sizes from '../utils/sizes';

const DetailProduct = () => {
  const [isShow, setIsShow] = React.useState(false);
  const {palette} = useTheme();
  const navigation = useAppNavigation();

  return (
    <ScreenContainer style={styles.con}>
      <Header isBack title="Tonal cream" />
      <ScrollView bounces={false}>
        <View>
          <Image
            style={{
              width: '100%',
              height: responsiveHeight(30),
              marginTop: sizes[16],
            }}
            source={DefaultImage}
          />
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity activeOpacity={0.8}>
              <BlurView
                blurAmount={2}
                style={{
                  borderRadius: sizes[90],
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(6, 62, 207, 0.5)',
                  width: sizes[180],
                  height: sizes[180],
                }}
                blurType="light">
                <FigmaIcon name="Hand" size={sizes[34]} />
                <Font14.W600 color="background">Try it on yourself</Font14.W600>
              </BlurView>
            </TouchableOpacity>
          </View>
        </View>
        <ViewBorders
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: sizes[16],
          }}
          bottom>
          <IconButton
            style={{
              backgroundColor: palette.primaryLight,
              padding: sizes[12],
              borderRadius: sizes[30],
            }}
            iconName="Web"
            size={sizes[16]}
            fill={palette.background}
            onPress={() => {
              navigation.navigate('CommunityNavigator', {
                screen: 'ProductCommunityScreen',
              });
            }}
          />
          <Button
            variant="border"
            containerStyle={{
              marginLeft: sizes[16],
              flexGrow: 1,
            }}>
            Find similar product
          </Button>
        </ViewBorders>
        <Font14.W400 color="textLight">Foundation cream</Font14.W400>
        <Font16.W600>
          Bourjois Healthy Mix Anti-Fatigue Concealer. 51 Light. 10 ml – 0.34 fl
          oz
        </Font16.W600>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: sizes[8],
          }}>
          <Rating rating={0.2} />
          <Font12.W400
            style={{
              marginLeft: sizes[8],
            }}
            color="textLight">
            21 ratings
          </Font12.W400>
        </View>
        <ViewBorders
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: sizes[16],
          }}>
          <Button
            onPress={() => {
              setIsShow(true);
            }}
            variant="border"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            containerStyle={{
              width: '48%',
            }}>
            <FigmaIcon
              style={{
                marginRight: sizes[8],
              }}
              name="Tag"
              size={sizes[20]}
            />
            <Font14.W600 color="primary">Compare</Font14.W600>
          </Button>
          <Font20.W600
            style={{
              flexGrow: 1,
            }}
            textAlign="center">
            $62.00
          </Font20.W600>
        </ViewBorders>
        <Font14.W600>
          Color: <Font14.W400>51 Clair/Light</Font14.W400>
        </Font14.W600>
        <Font14.W600>
          Skin type: <Font14.W400>All</Font14.W400>
        </Font14.W600>
        <Font14.W600>
          Brand: <Font14.W400>Bourjois</Font14.W400>
        </Font14.W600>
        <Font14.W600>
          Skin tone: <Font14.W400>All</Font14.W400>
        </Font14.W600>
        <Font14.W600>
          Item weight: <Font14.W400>0.01 Kilograms</Font14.W400>
        </Font14.W600>
        <Font14.W600>
          Item dimensions LxWxH:{' '}
          <Font14.W400>21 x 21 x 76 millimeters</Font14.W400>
        </Font14.W600>
        <Button
          style={{
            marginTop: sizes[16],
          }}>
          Buy
        </Button>
      </ScrollView>

      {isShow && (
        <ComparePrice
          isShow={isShow}
          onClose={() => {
            setIsShow(false);
          }}
        />
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default DetailProduct;
