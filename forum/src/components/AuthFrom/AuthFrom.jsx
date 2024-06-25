import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
		<Box border={"1px solid gray"} borderRadius={4} padding={5} textAlign="center">
      <VStack spacing={4}>
        <h1 size="3xl" fontWeight="bold">
          Financial Forum
        </h1>
        <p style={{ fontStyle: 'italic' }}>where discussion begins</p>

        {isLogin ? <Login /> : <Signup />}

					{/* ---------------- OR -------------- */}
				</VStack>
			</Box>

			<Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<Flex alignItems={"center"} justifyContent={"center"}>
					<Box mx={2} fontSize={14}>
						{isLogin ? "If you have not registerd?" : "If you have already registerd?"}
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
