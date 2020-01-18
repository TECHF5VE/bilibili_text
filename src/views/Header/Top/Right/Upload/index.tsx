import * as React from 'react';
import { Popover, Button } from 'antd';
import UploadContent from './UploadContent';

export default function Upload() {
  return (
    <Popover title={null} content={<UploadContent />} placement="bottomRight">
      <Button type="primary">投稿</Button>
    </Popover>
  );
}
