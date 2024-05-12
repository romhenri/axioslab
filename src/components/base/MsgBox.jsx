const MsgBox = ({ children }) => {
  return (
    <div className="bg-slate-200 p-2 rounded min-w-64">
      {
        children
      }
    </div>
  );
};

export default MsgBox;