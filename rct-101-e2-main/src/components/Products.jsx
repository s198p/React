import React from "react";
import Pagination from "./Pagination";
import AddProduct from "./AddProduct";
import { Flex, Grid } from '@chakra-ui/react';



const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct />
  
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
      <Pagination />
    
    
    </Flex>
  );
};

export default Products;