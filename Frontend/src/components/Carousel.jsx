import React from "react";
import { Card, CardBody, CardFooter,
             Stack,
              Image,
              Heading,
              Text,
              ButtonGroup,
              Button,
              Divider,
              Box,
              Flex,
             
              } from "@chakra-ui/react";  
              import { useToast } from '@chakra-ui/react'

const Carousel = () => {
  
    const toast = useToast()
    
  






  return (
    <>
<Flex alignItems="center" justifyContent="center" mx="auto" gap= "10">  

 <Card maxW='sm'
 zIndex={1}>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'
      onClick={() => {
        // Create an example promise that resolves in 5s
        const examplePromise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(200), 5000)
        })

        // Will display the loading toast until the promise is either resolved
        // or rejected.
        toast.promise(examplePromise, {
          success: { title: 'Order Placed ', description: 'Thankyou for order',isClosable: true },
          error: { title: 'Order cancelled', description: 'Something wrong' },
          loading: { title: 'Order Pending', description: 'Please wait',isClosable: true },
          
        })
      }}
      
      >
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Box>


<Card maxW='sm'
zIndex= "1">
<CardBody>
  <Image
    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>Living room Sofa</Heading>
    <Text>
      This sofa is perfect for modern tropical spaces, baroque inspired
      spaces, earthy toned spaces and for people who love a chic design with a
      sprinkle of vintage design.
    </Text>
    <Text color='blue.600' fontSize='2xl'>
      $450
    </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
  <ButtonGroup spacing='2'>
    <Button variant='solid' colorScheme='blue'
    onClick={() => {
      // Create an example promise that resolves in 5s
      const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 5000)
      })

      // Will display the loading toast until the promise is either resolved
      // or rejected.
      toast.promise(examplePromise, {
        success: { title: 'Order Placed ', description: 'Thankyou for order',isClosable: true },
        error: { title: 'Order cancelled', description: 'Something wrong' },
        loading: { title: 'Order Pending', description: 'Please wait',isClosable: true },
        
      })
    }}
    
    >
      Buy now
    </Button>
    <Button variant='ghost' colorScheme='blue'>
      Add to cart
    </Button>
  </ButtonGroup>
</CardFooter>
</Card>

</Box>

</Flex>  
</> 
  );
}


export default Carousel;
