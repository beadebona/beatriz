import { Box, ModalHeader,  Modal,ModalCloseButton, ModalFooter, ModalBody, ModalContent, Button, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import {HiMenu} from "react-icons/hi"
import { NavButton } from "../NavBar/NavButton"

export const PopUp =()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()

  
    return (
      <>  
          <HiMenu onClick={onOpen}/>
       
        <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="beige.50">
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
                <NavButton onClose={onClose} href="about" name="about me" />
                <NavButton href="projects" name="my projects" />
                <NavButton href="contact" name="Contact me" />
              
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }