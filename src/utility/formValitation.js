import * as Yup from "yup";

 export const FormData = Yup.object().shape({
  species: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  rarity: Yup.string()
    .oneOf(["common", "rare", "extremely rare"])
    .required("Required"),
  notes: Yup.string().required("Required"),

});
