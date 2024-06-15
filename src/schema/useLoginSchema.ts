import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  id: z
    .string()
    .min(5, { message: "아이디는 최소 5글자 이상입니다." })
    .max(11, { message: "아이디는 최대 10글자 이하입니다." })
    .refine((value) => value === "correct_id", {
      message: "아이디가 올바르지 않습니다.",
    }),

  password: z
    .string()
    .min(5, { message: "비밀번호는 최소 5글자 이상입니다." })
    .max(11, { message: "비밀번호는 최대 11글자 이하입니다." })
    .refine((value) => value === "correct_pw", {
      message: "비밀번호가 올바르지 않습니다.",
    }),
});

export const useLoginSchema = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, errors };
};
