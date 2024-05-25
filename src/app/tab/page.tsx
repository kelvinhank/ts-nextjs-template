import * as React from 'react';

import { TabGroup } from '@/app/components/common/tab/tab-group';

export default function page() {
  return (
    <div>
      <TabGroup
        path='/route-groups'
        items={[
          {
            text: 'Home',
          },
        ]}
      />
    </div>
  );
}
