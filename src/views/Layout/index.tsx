import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Categories} from '@app/interfaces/posts';
import {TabTopProps} from '@app/components/TopTabs/types';

import TopTabs from '@app/components/TopTabs';
import PostsList from '@app/views/Posts/List';

const Layout = () => {
  const tabsData: TabTopProps[] = [
    {
      name: Categories.NEW,
      component: PostsList,
    },
    {
      name: Categories.TOP,
      component: PostsList,
    },
    {
      name: Categories.HOT,
      component: PostsList,
    },
    {
      name: Categories.CONTROVERSIAL,
      component: PostsList,
    },
  ];

  return (
    <NavigationContainer>
      <TopTabs data={tabsData} />
    </NavigationContainer>
  );
};

export default Layout;
