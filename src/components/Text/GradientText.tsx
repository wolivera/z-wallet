type Props = {
  text: string;
};

export const GradientText = ({ text }: Props) => {
  return (
    <h1 className="text-5xl font-black text-white text-center">
      <span className="bg-gradient-to-r text-transparent bg-clip-text from-gray-400 to-blue-500">
        {text}
      </span>
    </h1>
  );
};
