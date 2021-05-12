import {FieldValues, useForm} from "react-hook-form";
import {UseFormProps, UseFormReturn} from "react-hook-form/dist/types";
import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";

type UseBulmaFormReturn<T> = Omit<UseFormReturn<T>, 'ref'>
type UseBulmaFormRegisterReturn = Omit<UseFormRegisterReturn, 'ref'>;

export const useBulmaForm = <
    TFieldValues extends FieldValues = FieldValues,
    TContext extends object = object
    >(
    options?: UseFormProps<TFieldValues, TContext>
) => {
    const { register, ...rest } = useForm(options);

    return {
        register: (name, ...args) => {
            const { ref, ...restRegister } = register(name, ...args);
            return { domRef: ref as any, ...restRegister } as UseBulmaFormRegisterReturn;
        },
        ...rest,
    } as  Omit<UseBulmaFormReturn<TFieldValues>, 'ref'>;
};
