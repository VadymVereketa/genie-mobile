import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';

import DefaultImage from '../../../assets/defaultImg';
import ComparePrice from '../../../components/ComparePrice';
import FigmaIcon from '../../../components/FigmaIcon/FigmaIcon';
import Rating from '../../../components/Rating';
import useTheme from '../../../Context/ThemeContext';
import type {SearchScreenProps} from '../../../navigators/types';
import type {ResponseProduct} from '../../../typings/Product';
import Button from '../../../uikit/Button';
import IconButton from '../../../uikit/IconButton';
import {Font12} from '../../../uikit/Typography/Font12';
import {Font14} from '../../../uikit/Typography/Font14';
import {Font16} from '../../../uikit/Typography/Font16';
import sizes from '../../../utils/sizes';

type Props = {
  progress?: number;
  onBuy?: () => void;
  product: ResponseProduct;
};
const SearchProduct = ({progress, onBuy, product}: Props) => {
  const [isShow, setIsShow] = React.useState(false);
  const [isDefaultImage, setIsDefaultImage] = React.useState(false);
  const {palette} = useTheme();
  const navigation =
    useNavigation<SearchScreenProps<'ResultScreen'>['navigation']>();

  return (
    <View>
      {progress && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: sizes[12],
          }}>
          <View
            style={{
              backgroundColor: '#F6F8FC',
              borderRadius: sizes[30],
              height: sizes[8],
              flexGrow: 1,
              marginRight: sizes[16],
            }}>
            <View
              style={{
                backgroundColor: palette.primary,
                borderRadius: sizes[30],
                width: `${progress}%`,
                height: sizes[8],
                opacity: progress / 100,
              }}
            />
          </View>
          <Font14.W600>{progress}%</Font14.W600>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: sizes[16],
          paddingTop: sizes[16],
        }}>
        <Image
          style={{
            marginRight: sizes[16],
            width: sizes[100],
            height: sizes[100],
          }}
          source={
            isDefaultImage
              ? DefaultImage
              : {
                  uri: product.image_link,
                }
          }
          onError={e => {
            setIsDefaultImage(true);
          }}
        />
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Font12.W600
              style={{
                flex: 1,
                marginRight: sizes[16],
              }}>
              {product.name}
            </Font12.W600>
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
          </View>

          <Font12.W400 color="textLight">Foundation cream</Font12.W400>
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
          <Font16.W600>
            {product.price_sign}
            {product.price}
          </Font16.W600>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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
        <Button
          onPress={() => {
            onBuy && onBuy();
            //navigation.navigate('DetailProductScreen');
          }}
          containerStyle={{
            width: '48%',
          }}>
          Buy
        </Button>
      </View>
      {isShow && (
        <ComparePrice
          isShow={isShow}
          onClose={() => {
            setIsShow(false);
          }}
        />
      )}
    </View>
  );
};

export default SearchProduct;
