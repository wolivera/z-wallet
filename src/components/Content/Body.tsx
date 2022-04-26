export const Body = ({ ...props }) => {
  return (
    <div className={`p-0 transition-opacity w-full text-sm container mx-auto flex items-center justify-between ${props.className}`}>
      {props.children}
    </div>
  );
};
