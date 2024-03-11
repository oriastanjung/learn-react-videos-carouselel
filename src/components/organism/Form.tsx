"use client";
import { feedbackFormSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
  });
  const onSubmit = async (val: z.infer<typeof feedbackFormSchema>) => {
    console.log(val);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="form flex flex-col gap-10"
    >
      <input
        className="input"
        placeholder="email"
        {...form.register("email")}
      />
      {form.formState.errors.email && (
        <span>{form.formState.errors.email.message}</span>
      )}
      <input
        className="input"
        placeholder="password"
        {...form.register("password")}
      />
      {form.formState.errors.password && (
        <span>{form.formState.errors.password.message}</span>
      )}
      <button type="submit" className="bg-blue-500 px-4 py-3">
        submit!
      </button>
    </form>
  );
};

export default Form;
