import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Recomendations from './components/Recomendations';
import Header from '../../components/Header';
import Line from '../../components/Line';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {SelfieScreenProps} from '../../navigators/types';
import Service from '../../services/service/service';
import type {ResponseProduct} from '../../typings/Product';
import IconButton from '../../uikit/IconButton';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';
import SearchProduct from '../Search/components/SearchProduct';

const ProductResultScreen = ({
  navigation,
}: SelfieScreenProps<'ProductResultScreen'>) => {
  const {palette} = useTheme();
  const insets = useSafeAreaInsets();
  const [isShow, setIsShow] = React.useState(true);
  const [products, setProducts] = useState<ResponseProduct[]>([]);

  useEffect(() => {
    Service.getProducts('foundation').then(res => {
      console.log(res);
      setProducts(res);
    });
  }, []);

  const firstTwoProducts = products.slice(0, 2);
  const otherProducts = products.slice(2);

  return (
    <ScreenContainer style={[styles.con, {}]}>
      <Header
        goBack={() => {
          navigation.navigate('TabNavigator', {
            screen: 'CategoryNavigator',
          });
        }}
        title="Products result"
        rightView={
          <IconButton
            iconName="Refresh"
            size={sizes[18]}
            containerStyle={{
              marginRight: sizes[16],
            }}
          />
        }
      />
      <FlatList
        keyExtractor={(info, index) => index.toString()}
        data={otherProducts}
        ListHeaderComponent={() => {
          if (firstTwoProducts.length === 0) return null;
          return (
            <View>
              <Font20.W600
                style={{
                  marginTop: sizes[16],
                }}
                textAlign="center">
                Top 2 products for you
              </Font20.W600>
              {firstTwoProducts.map((product, index) => (
                <SearchProduct
                  product={product}
                  onBuy={() => {
                    navigation.navigate('DetailProductResultScreen');
                  }}
                  key={index}
                />
              ))}
              <Font20.W600
                style={{
                  marginTop: sizes[16],
                }}
                textAlign="center">
                Complete the Routine
              </Font20.W600>
            </View>
          );
        }}
        renderItem={info => {
          return (
            <SearchProduct
              product={info.item}
              onBuy={() => {
                navigation.navigate('DetailProductResultScreen');
              }}
            />
          );
        }}
        contentContainerStyle={{
          paddingBottom: sizes[16],
        }}
        ItemSeparatorComponent={() => (
          <Line
            style={{
              marginTop: sizes[16],
            }}
          />
        )}
      />
      {isShow && (
        <Recomendations
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
  icon: {},
});
export default ProductResultScreen;
