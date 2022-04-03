import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../Components/Form/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: Yup.string().required('Senha obrigatório')
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn:SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email"
            type="email"
            label="E-mail"
            errors={errors.email}
            {...register('email')}
          />

          <Input 
            name="password"
            type="password"
            label="Senha"
            errors={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
