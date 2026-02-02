import { tv, cn } from 'tailwind-variants';

const table = tv({
  slots: {
    base: 'overflow-x-auto border border-cyan/20 rounded-sm bg-background-dark/40 backdrop-blur-sm',
    table: 'w-full font-mono text-sm md:text-base',
    header: 'bg-cyan/5',
    headerCell: 'text-primary text-left uppercase tracking-widest font-bold p-4 border border-cyan/20',
    row: 'hover:bg-white/5 transition-colors',
    cell: 'text-slate-400 p-4 border border-cyan/20',
    cellCyan: 'text-cyan p-4 border border-cyan/20',
  },
});

export interface TableProps {
  headers: string[];
  rows: Array<Array<{ text: string; variant?: 'default' | 'cyan' }>>;
  className?: string;
}

export function Table({ headers, rows, className }: TableProps) {
  const { base, table: tableClass, header, headerCell, row, cell, cellCyan } = table();

  return (
    <div className={cn(base(), className)}>
      <table className={tableClass()}>
        <thead>
          <tr className={header()}>
            {headers.map((headerText, index) => (
              <th key={index} className={headerCell()}>
                {headerText}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rowCells, rowIndex) => (
            <tr key={`row-${rowIndex}-${rowCells.map(cell => cell.text).join('-')}`} className={row()}>
              {rowCells.map((cellData, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}-${cellData.text}`}
                  className={cellData.variant === 'cyan' ? cellCyan() : cell()}
                >
                  {cellData.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
