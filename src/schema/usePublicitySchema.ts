import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string(),
  name: z.string(),
  term: z.string(),
  link: z.string(),
});

export const usePublicitySchema = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, isDirty };
};
