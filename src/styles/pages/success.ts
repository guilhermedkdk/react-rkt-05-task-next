import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  height: 656,
  margin: "0 auto",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    textAlign: "center",

    maxWidth: 560,
    marginTop: "2rem",

    fontSize: "$xl",
    lineHeight: 1.4,
    color: "$gray300",
  },

  a: {
    display: "block",
    marginTop: "5rem",

    fontSize: "$lg",
    fontWeight: "bold",
    textDecoration: "none",
    color: "$green500",
  },

  "&:hover": {
    color: "$green300",
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  maxWidth: 130,
  height: 145,

  padding: "0.25rem",
  marginTop: "4rem",

  borderRadius: 8,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  img: {
    objectFit: "cover",
  },
});
