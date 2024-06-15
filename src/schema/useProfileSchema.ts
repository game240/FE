import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    id: z
      .string()
      .min(5, { message: "아이디는 최소 5글자 이상입니다." })
      .max(11, { message: "아이디는 최대 10글자 이하입니다." }),

    password: z
      .string()
      .min(5, { message: "비밀번호는 최소 5글자 이상입니다." })
      .max(11, { message: "비밀번호는 최대 11글자 이하입니다." }),

    confirmPassword: z.string(),

    nick_name: z
      .string()
      .min(3, { message: "닉네임은 최소 3글자 이상입니다." })
      .max(8, { message: "닉네임은 최대 8글자 이하입니다." }),

    email: z
      .string()
      .regex(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
        { message: "이메일 형식과 맞지 않습니다." }
      ),
  })
  .superRefine((data, context) => {
    if (data.password !== data.confirmPassword) {
      context.addIssue({
        code: "custom",
        message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
        path: ["confirmPassword"],
      });
    }
  });

export const useProfileSchema = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, errors, isValid };
};
