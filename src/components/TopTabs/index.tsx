import React, {useState} from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TabsTopProps} from './types';
import {Categories} from '@app/interfaces/posts';

import Posts from '@app/views/Posts';

import {topBaStyles} from './styles';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = ({data}: TabsTopProps) => {
  const {top} = useSafeAreaInsets();
  const [tabSelected, setTabSelected] = useState<Categories>(data[0].name);

  return (
    <Tab.Navigator style={{paddingTop: top}} tabBarOptions={topBaStyles}>
      {data.map(({name, component: Component}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={() => <Posts newCategory={tabSelected} />}
          listeners={() => ({
            tabPress: () => setTabSelected(name),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabs;
