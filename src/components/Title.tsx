export type TitleProps = {
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  fontSize?: string;
};

export function Title({
  children,
  marginTop = "0",
  marginBottom = "0",
  marginLeft = "0",
  marginRight = "0",
  fontSize = "1.7rem",
}: TitleProps) {
  const titleStyle = {
    fontSize,
    color: "#FECE15",
    fontWeight: "bold",
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  };

  return <div style={titleStyle}>{children}</div>;
}
