import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Quill from 'quill';

// Extend Quill's Bold format
const Inline = Quill.import('blots/inline');

class CustomBold extends Inline {
  static create() {
    let node = super.create();
    node.setAttribute('class', 'custom-bold'); // Apply custom class
    return node;
  }

  static formats() {
    return true;
  }

  optimize(context) {
    super.optimize(context);
    if (this.domNode.tagName !== 'STRONG') {
      this.replaceWith(CustomBold.blotName);
    }
  }
}

CustomBold.blotName = 'bold';
CustomBold.tagName = 'STRONG';
CustomBold.className = 'custom-bold';

Quill.register(CustomBold, true); // Register the custom Bold format

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
  ],
};

const Texteditor = () => {
  const [value, setValue] = useState('');
  return (
    <div className="">
      <div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          placeholder="Write Text Here"
        />
      </div>
      <div className="w-full border px-4 content-center h-auto min-h-7 mt-2 break-words rounded">
        <div className="break-words whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: value }}></div>
      </div>
    </div>
  );
};

export default Texteditor;
