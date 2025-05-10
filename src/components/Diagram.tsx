// components/Diagram.tsx
import React from "react";
import {
  ReactFlow,
  Background,
  Controls,
  type Edge,
  type Node,
} from "@xyflow/react";

type Table = {
  tableName: string;
  columns: { id: string; label: string; type: string }[];
};

type Props = {
  tables: Table[];
};

const Diagram: React.FC<Props> = ({ tables }) => {
  const nodes: Node[] = tables.map((table, i) => ({
    id: table.tableName,
    position: { x: i * 250, y: 0 },
    data: {
      label: (
        <div className="p-2">
          <div className="font-bold">{table.tableName}</div>
          <ul className="text-xs text-left">
            {table.columns.map((col) => (
              <li key={col.id}>
                {col.label} ({col.type})
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    type: "default",
  }));

  const edges: Edge[] = []; // puedes generar relaciones luego

  return (
    <div className="w-full h-full">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
