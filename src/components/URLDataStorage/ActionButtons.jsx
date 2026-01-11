import React from 'react';
import { Button, Space, Upload } from 'antd';
import {
  CopyOutlined,
  DownloadOutlined,
  UploadOutlined,
  ClearOutlined,
} from '@ant-design/icons';


export const ActionButtons = ({
  onShare,
  onExport,
  onImport,
  onClear,
  disabled,
}) => {
  return (
    <div style={{ marginBottom: 24 }}>
      <Space wrap>
        <Button
          type="primary"
          icon={<CopyOutlined />}
          onClick={onShare}
          disabled={disabled}
        >
          Copy Shareable URL
        </Button>

        <Button
          icon={<DownloadOutlined />}
          onClick={onExport}
          disabled={disabled}
          style={{
            background: disabled ? undefined : '#10b981',
            borderColor: disabled ? undefined : '#10b981',
            color: disabled ? undefined : 'white',
          }}
        >
          Export JSON
        </Button>

        <Upload accept=".json" beforeUpload={onImport} showUploadList={false}>
          <Button
            icon={<UploadOutlined />}
            style={{
              background: '#9333ea',
              borderColor: '#9333ea',
              color: 'white',
            }}
          >
            Import JSON
          </Button>
        </Upload>

        <Button icon={<ClearOutlined />} onClick={onClear}>
          Clear
        </Button>
      </Space>
    </div>
  );
};