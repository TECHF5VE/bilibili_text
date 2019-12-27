import * as React from 'react';
import * as style from './style.scss';
import UploadItem from './UploadItem';

export default function UploadContent() {
  return (
    <div className={style.container}>
      <UploadItem tag="专栏" />
      <UploadItem tag="视频" />
      <UploadItem tag="音频" />
      <UploadItem tag="其他" />
    </div>
  );
}
