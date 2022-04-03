import { useForm } from 'react-hook-form';
import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../Components/Form/Input";


export default function Home() {
  const { register, handleSubmit, formState } = useForm();

  async function handleSignIn(values) {
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
            {...register('email')}
          />

          <Input 
            name="password"
            type="password"
            label="Senha"
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
