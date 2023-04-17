import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import MakeUpItem from './MakeUpItem';

const MakeUpSegment = () => {
  return (
    <FlatList
      numColumns={2}
      data={[1, 2, 3]}
      renderItem={info => {
        return <MakeUpItem />;
      }}
    />
  );
};

export default MakeUpSegment;
