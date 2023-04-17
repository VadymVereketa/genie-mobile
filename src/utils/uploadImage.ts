import type {Asset} from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

import {isIOS} from './isPlatform';

const uploadImage = async ({data, url}: {data: Asset; url: string}) => {
  const path = isIOS ? data.uri?.replace('file://', '') : data.uri;

  try {
    const res = await RNFetchBlob.fetch(
      'POST',
      url,
      {
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'file',
          filename: data.fileName ?? `unnamed_` + Date.now(),
          type: data.type,
          data: RNFetchBlob.wrap(path!),
        },
      ],
    );

    return {
      success: true,
      data: JSON.parse(res.data),
    };
  } catch (e) {
    return {
      success: false,
      data: null,
    };
  }
};

export default uploadImage;
