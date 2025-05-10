import { Editor } from "@monaco-editor/react";

type SqlEditorProps = {
  value: string;
  onChange: (value: string | undefined) => void;
};

const SqlEditor: React.FC<SqlEditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-[100%] overflow-hidden">
      <Editor
        defaultLanguage="sql"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default SqlEditor;
