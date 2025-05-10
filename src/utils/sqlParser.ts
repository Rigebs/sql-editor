// utils/sqlParser.ts
export function parseCreateTable(sql: string) {
  const matches = [
    ...sql.matchAll(/create\s+table\s+(\w+)\s*\(([\s\S]*?)\)/gi),
  ];

  return matches.map(([, tableName, columnsBlock]) => {
    const columns = columnsBlock
      .split(",")
      .map((col) => col.trim())
      .filter(Boolean)
      .map((col, i) => ({
        id: `${tableName}-col-${i}`,
        label: col.split(" ")[0],
        type: col.split(" ").slice(1).join(" "),
      }));

    return {
      tableName,
      columns,
    };
  });
}
