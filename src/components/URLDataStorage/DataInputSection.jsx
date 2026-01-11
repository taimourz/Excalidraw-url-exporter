import React from 'react';
import { Input, Typography } from 'antd';


const { TextArea } = Input;
const { Text } = Typography;

export const DataInputSection = ({ 
  title, 
  content, 
  onTitleChange, 
  onContentChange 
}) => {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Text strong style={{ display: 'block', marginBottom: 8 }}>
          Title
        </Text>
        <Input
          placeholder="Enter a title..."
          size="large"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          aria-label="Title input"
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Text strong style={{ display: 'block', marginBottom: 8 }}>
          Content
        </Text>
        <TextArea
          placeholder="Enter your content here..."
          rows={12}
          style={{ fontFamily: 'monospace', fontSize: '13px' }}
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          aria-label="Content input"
        />
      </div>
    </>
  );
};