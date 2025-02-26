import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",

  maxWidth: 1180,
  margin: "0 auto",
  gap: "4rem",
});

export const ImageContainer = styled("main", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  maxWidth: 576,
  height: "calc(656px - 0.5rem)",
  padding: "0.25rem",

  borderRadius: 8,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("main", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    display: "block",
    marginTop: "1rem",

    fontSize: "$2xl",
    color: "$gray300",
  },

  p: {
    marginTop: "2.5rem",

    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    padding: "1.25rem",
    marginTop: "auto",

    border: 0,
    borderRadius: 8,
    backgroundColor: "$green500",

    cursor: "pointer",
    fontSize: "$md",
    fontWeight: "bold",
    color: "$white",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});
