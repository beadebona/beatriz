import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import { FormspreeProvider } from '@formspree/react';

export const Providers= ({children}) =>{
    return (
        <FormspreeProvider project="1974261607429045771">
        <ChakraProvider theme={theme} >
            {children}
        </ChakraProvider>
        </FormspreeProvider>
    )
}