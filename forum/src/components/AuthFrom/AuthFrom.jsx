import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import logo from "../../assets/images/logo.png";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5} textAlign="center">
        <VStack spacing={4}>
		<Image src={logo} h={10} cursor={"pointer"} alt='Finance' />
          <p style={{ fontStyle: "italic" }}>where discussion begins</p>

          {isLogin ? <Login /> : <Signup />}

          {/* ---------------- OR -------------- */}
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5} mt={4}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "If you have not registered?" : "If you have already registered?"}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Register" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
