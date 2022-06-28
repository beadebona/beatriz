import { Input, Text } from "@chakra-ui/react"

export const InputContact = ({ id, name, errors })=>{
    return(
        <>
        <Input borderRadius="2px" mt="8px" _active={{
            outline: "none",
            outlineOffset:"none"
        }} 
        id={id}
        name={name}
        fontFamily="BEBAS NEUE"
        border="none"
        _focusVisible={{
            border: "none",
        }}
        placeholder={name.toUpperCase()}
        _placeholder={{
            color:"#A39E96",
            fontFamily:"BEBAS NEUE"
        }}
        bg="grey.text" outline="none" color={"beige.50"}/>
        <Text  fontFamily="PT Sans" fontSize="14px">
            {errors?.map(erro=>{if(erro.field ===name){
                return `${name.charAt(0).toUpperCase() + name.slice(1)} is a required field` 
            }})} 
        </Text>
        </>
    )
}