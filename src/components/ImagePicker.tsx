import React, {useImperativeHandle} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet, View} from 'react-native';
import PlusButton from '../uikit/PlusButton';
import useTheme from '../Context/ThemeContext';
import sizes from '../utils/sizes';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Asset} from 'react-native-image-picker/src/types';
import {responsiveWidth} from '../utils/responsive-dimensions';
import IconButton from '../uikit/IconButton';

export interface IImagePickerInterface {
  getAssets: () => Asset[];
}

const ImagePicker = (
  {}: any,
  ref: React.ForwardedRef<IImagePickerInterface>,
) => {
  const {palette} = useTheme();
  const [assets, setAssets] = React.useState<Asset[]>([]);

  const handleAddImage = async () => {
    const result = await launchImageLibrary({
      selectionLimit: 1,
      presentationStyle: 'popover',
      mediaType: 'photo',
    });
    if (result.assets?.[0]) {
      setAssets([...assets, result.assets[0]]);
    }
  };

  useImperativeHandle(ref, () => ({
    getAssets: () => assets,
  }));

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={handleAddImage} style={styles.touchable2}>
        <PlusButton
          disabled
          style={{
            backgroundColor: palette.placeholder,
          }}
        />
      </TouchableOpacity>
      {assets.map((asset, index) => {
        return (
          <View
            style={{
              width: size,
              height: size,
              margin: sizes[4],
            }}
            key={asset.uri}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: sizes[8],
              }}
              source={{
                uri: asset.uri,
              }}
            />
            <IconButton
              onPress={() => {
                const newAssets = [...assets];
                newAssets.splice(index, 1);
                setAssets(newAssets);
              }}
              activeOpacity={0.8}
              style={{
                width: sizes[32],
                height: sizes[32],
                borderRadius: sizes[40],
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: palette.border,
              }}
              containerStyle={{
                position: 'absolute',
                right: -sizes[4],
                top: -sizes[4],
              }}
              iconName="Close"
              size={sizes[16]}
              fill={palette.background}
            />
          </View>
        );
      })}
    </View>
  );
};

export default React.forwardRef(ImagePicker);

const size = (responsiveWidth(100) - sizes[32]) / 3 - sizes[8];

const styles = StyleSheet.create({
  view: {
    marginVertical: sizes[16],
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -sizes[4],
    flexGrow: 1,
  },
  touchable2: {
    backgroundColor: '#F7F7F7',
    borderRadius: sizes[8],
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    margin: sizes[4],
  },
});
