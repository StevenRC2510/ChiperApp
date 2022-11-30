import {Categories} from '@app/interfaces/posts';

export type TabTopProps = {
  name: Categories;
  component: React.FC<any>;
};

export type TabsTopProps = {
  data: Array<TabTopProps>;
};
