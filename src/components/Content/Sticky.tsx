type Props = {
  height?: number;
  children: React.ReactNode;
}

export const Sticky = ({ ...props }: Props) => {
  return <div className={`h-[80px] bg-white flex items-center`}>
    {props.children}
  </div>
}