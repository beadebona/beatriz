import { Box, Button, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"
import { InputContact } from "./input"
import { useToast } from '@chakra-ui/react'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TextareaContact } from "./textarea";

export const Form = () =>{
    const toast = useToast()
    const [state, handleSubmit] = useForm("contactForm");
    const id = 'toast'

  if (state.succeeded && !toast.isActive(id)) {
        toast({
            id,
            position: 'bottom-right',
            title: "Your message has been delivered!",
            description: "Soon you're going to hear from me!",
            status: 'success',
            duration: 300,
            isClosable: true,
      })
  }


    return(
        <Box as="form" onSubmit={()=>handleSubmit()} maxW="300px" m="16px 32px" paddingBottom="100px">
            <InputContact id="name" name="name" errors={state.errors}/>
            <InputContact id="email" name="email" errors={state.errors}/>
            <InputContact id="subject" name="subject" errors={state.errors}/>
            <TextareaContact  id="message" name="message" errors={state.errors}/>
            <Button
            mt="8px"
            border="none"
            fontWeight="400"
            color="beige.50"
            borderRadius="2px"
            fontFamily={"Bebas neue"}
            bg="grey.text" outline="none"
            type="submit"
            _hover={{
                bg:"grey.hover"
            }}
            isLoading={state.submitting}
            >Enviar</Button>
        </Box>
    )
}