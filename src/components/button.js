import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
const Button_Ant = ({name}) => (
  <Flex gap="small" vertical>
    <Flex wrap gap="small">
      <Button type="primary" icon={<SearchOutlined />} href='https://www.timeshighereducation.com/world-university-rankings/2024/world-ranking#'>
        Search
      </Button>
    </Flex>
  </Flex>
);
export default Button_Ant;