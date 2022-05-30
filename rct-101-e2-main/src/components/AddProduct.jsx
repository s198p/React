import React from "react";
import { Button, RadioGroup, Input, Select, Radio, FormLabel } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  //   const Input = () => <div />;
  //  const Select = () => <div />;
  //  const RadioGroup = () => <div />;
  //  const Radio = () => <div />;


  
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const { isOpen, onOpen, onClose } = useDisclosure();
  



  return (
    <>
    
      <Button my={4} data-cy="add-product-button" colorScheme='yellow' size='xl'   onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
      }} style={{
        textAlign: "center",
        marginLeft: "700px",
        marginTop:"100px",
        }}>Add New Product</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl>
              <FormLabel>Title</FormLabel>
              <Input data-cy="add-product-title" placeholder="Title" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
          <Select data-cy="add-product-category" _placeholder="Category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
              </RadioGroup>
            </FormControl>
            <FormLabel>Price</FormLabel>
            <Input data-cy="add-product-price" placeholder="Price" type="number" />
            <ModalFooter>
            <Button data-cy="add-product-submit-button"onClick={onClose}>Save</Button>
          </ModalFooter>
        
          </ModalBody>
      
          </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
