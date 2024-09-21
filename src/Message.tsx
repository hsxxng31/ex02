type Props = {
  value: string;
  color?: string;
  size?: number;
};

function Message({ value, size, color }: Props) {
  const msgStyle = { color: color || "black", fontSize: size || 20 };
  return <div style={msgStyle}>{value}</div>;
}

export default Message;
