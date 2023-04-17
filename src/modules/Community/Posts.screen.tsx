import React from 'react';

import {Modal, StyleSheet, View} from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';
import useTheme from '../../Context/ThemeContext';
import {CommunityScreenProps} from '../../navigators/types';
import Header from '../../components/Header';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {Font14} from '../../uikit/Typography/Font14';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Dropdown from '../../components/Dropdown';
import {sortOptions} from '../../data/sortOptions';
import {allGroupOptions} from '../../data/groupOptions';
import {responsiveWidth} from '../../utils/responsive-dimensions';
import Post from '../../components/Post';
import HeaderRight from './components/HeaderRight';

const PostsScreen = ({navigation}: CommunityScreenProps<'PostsScreen'>) => {
  const {palette} = useTheme();
  const [pointGroups, setPointGroups] = React.useState({x: 0, y: 0});
  const [pointSort, setPointSort] = React.useState({x: 0, y: 0});
  const [isShowGroup, setIsShowGroup] = React.useState(false);
  const [isShowSort, setIsShowSort] = React.useState(false);
  const [sort, setSort] = React.useState(sortOptions[0]);
  const [group, setGroup] = React.useState(allGroupOptions[0]);

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
        title="All posts"
        rightView={<HeaderRight />}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: sizes[16],
          borderBottomWidth: 1,
          borderBottomColor: palette.line,
        }}>
        <TouchableOpacity
          onPress={() => {
            setIsShowGroup(true);
          }}
          onLayout={e => {
            e.target.measure((x, y, width, height, pageX, pageY) => {
              console.log(x, y, width, height, pageX, pageY);
              setPointGroups({x: pageX, y: pageY + height});
            });
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Font14.W400
            style={{
              marginRight: sizes[8],
              maxWidth: responsiveWidth(40),
            }}>
            Groups: {group.label}
          </Font14.W400>
          <FigmaIcon name="ArrowDown" size={sizes[14]} fill="transparent" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsShowSort(true);
          }}
          onLayout={e => {
            e.target.measure((x, y, width, height, pageX, pageY) => {
              console.log(x, y, width, height, pageX, pageY);
              setPointSort({x: pageX, y: pageY + height + sizes[8]});
            });
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Font14.W400
            style={{
              marginRight: sizes[8],
            }}>
            Sort by: {sort.label}
          </Font14.W400>
          <FigmaIcon name="ArrowDown" size={sizes[14]} fill="transparent" />
        </TouchableOpacity>
      </View>
      <Post
        style={{
          borderBottomWidth: 1,
          borderBottomColor: palette.line,
          paddingBottom: sizes[16],
          marginBottom: sizes[16],
        }}
      />
      <Post />
      <Dropdown
        onChange={setGroup}
        onClose={() => setIsShowGroup(false)}
        options={allGroupOptions}
        point={pointGroups}
        visible={isShowGroup}
        value={group}
      />
      <Dropdown
        onChange={setSort}
        onClose={() => setIsShowSort(false)}
        options={sortOptions}
        point={pointSort}
        visible={isShowSort}
        value={sort}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default PostsScreen;
