import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {View} from 'react-native';
import {Font14} from '../uikit/Typography/Font14';
import {responsiveWidth} from '../utils/responsive-dimensions';
import sizes from '../utils/sizes';
import Post from './Post';
import ViewAll from './Views/ViewAll';
import Points from './Points';
import useTheme from '../Context/ThemeContext';
import {useAppNavigation} from '../navigators/hooks';

const Posts = () => {
  const navigation = useAppNavigation();

  const {palette} = useTheme();
  const [index, setIndex] = React.useState(0);

  return (
    <View
      style={{
        paddingVertical: sizes[16],
        borderBottomWidth: 1,
        borderBottomColor: palette.line,
      }}>
      <ViewAll
        title="Latest posts"
        onPress={() => {
          navigation.navigate('PostsScreen');
        }}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => {
          return {
            length: width,
            offset: width * index,
            index,
          };
        }}
        style={{}}
        onScroll={e => {
          console.log(e.nativeEvent.contentOffset.x);
          setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
        }}
        snapToInterval={width}
        horizontal
        data={[1, 2, 3]}
        renderItem={() => (
          <Post
            style={{
              width,
              paddingHorizontal: sizes[4],
            }}
          />
        )}
      />
      <Points index={index} length={3} />
    </View>
  );
};

const width = responsiveWidth(100) - sizes[32];

export default Posts;
