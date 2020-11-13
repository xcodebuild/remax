import * as React from 'react';
import { View } from '@alipay/remix';
import Foo from '../../components/foo';
import Bar from '../../components/bar';

export default () => {
  return (
    <View>
      <Foo />
      <Bar />
    </View>
  );
};
