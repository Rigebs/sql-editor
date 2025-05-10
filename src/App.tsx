import { useEffect, useState } from "react";
import SqlEditor from "./components/SQLEditor";
import { parseCreateTable } from "./utils/sqlParser";
import Diagram from "./components/Diagram";
import "@xyflow/react/dist/style.css";

// Definir el tipo de las tablas
type Column = {
  id: string;
  label: string;
  type: string;
};

type Table = {
  tableName: string;
  columns: Column[];
};

function App() {
  const [sql, setSql] = useState("CREATE TABLE users (id INT, name TEXT);");
  const [tables, setTables] = useState<Table[]>([]);

  const handleSqlChange = (value: string | undefined) => {
    setSql(value ?? "");
  };

  useEffect(() => {
    const parsed = parseCreateTable(sql);
    setTables(parsed);
  }, [sql]);

  return (
    <div className="h-screen flex flex-col p-6 bg-gray-50">
      <h1 className="text-xl font-bold mb-4">SQL Editor</h1>
      <div className="flex flex-grow gap-4">
        <div className="w-1/2 p-2 flex-grow">
          <SqlEditor value={sql} onChange={handleSqlChange} />
        </div>
        <div className="w-1/2 p-4 bg-white shadow overflow-hidden flex-grow">
          <Diagram tables={tables} />
        </div>
      </div>
    </div>
  );
}

export default App;
