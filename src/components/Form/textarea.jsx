import { Text, Textarea } from "@chakra-ui/react"

export const TextareaContact = ({ id, name, errors})=>{
    return ( 
        <>
            <Textarea 
                mt="8px" 
                borderRadius="2px"
                id={id}
                name={name} 
                fontFamily="Bebas Neue"
                _active={{
                    outline: "none",
                    outlineOffset:"none"
                }} 
                _focusVisible={{
                    border: "none",
                }}
                border="none"
                placeholder={name.toUpperCase()}
                _placeholder={{
                    color:"#A39E96",
                    fontFamily:"BEBAS NEUE"
                }}
                bg="grey.text" 
                outline="none" 
                color={"beige.50"}
            />
            <Text  fontFamily="PT Sans" fontSize="14px">
            {errors?.map(erro=>{if(erro.field === name){
                return `${name.charAt(0).toUpperCase() + name.slice(1)} is a required field` 
            }})} 
        </Text>
        </>
    )
}