import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

const SignIn = () => {
  return (
    <>
    
      <Box
      sx={{
        width: {
          xs: "90%", // for extra small devices like mobile
          sm: "80%", // for small devices like tablets
          md: "60%", // for medium devices
          lg: "40%", // for large devices
          xl: "27rem", // for extra large devices 
        }
      }}
       
        padding={4}
        border={"2px solid black"}
        fontWeight={"900"}
        fontFamily={"sans-serif"}
        bgcolor={"rgb(5,13,23)"}
        color={"white"}
        borderColor={"rgb(51,59,77)"}
      >
        <Typography variant="h4" fontWeight={700}>
          Sign in
        </Typography>
        <Typography
          variant="subtitle2"
          my={1}
          color="rgb(148,160,184)"
          fontWeight={500}
        >
          Email
        </Typography>
        <TextField
          fullWidth
          type="email"
          placeholder="your@email.com"
          color="primary"
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "white",
              fontFamily: "Arial",
              fontSize: "0.87em",
              height: " 2.6rem",
              bgcolor: "rgb(5,7,10)",

              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(51,59,77)",
                borderWidth: "1px",
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgb(72,118,238)",
                  borderWidth: "3px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#2e2e2e",
                // fontWeight: "bold",
                "&.Mui-focused": {
                  color: "blue",
                  fontWeight: "bold",
                },
              },
            },
          }}
        />
        <div className=" flex justify-between my-2">
          <Typography variant="subtitle2" color="rgb(148,160,184)">
            Password
          </Typography>

          <Link>
            <Typography variant="body2" color="white">
              Forgot your Password?
            </Typography>
          </Link>
        </div>
        <TextField
          fullWidth
          type="password"
          placeholder="....."
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "white",
              fontFamily: "Arial",
              fontSize: "0.87em",
              height: " 2.6rem",
              bgcolor: "rgb(5,7,10)",

              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(51,59,77)",
                borderWidth: "1px",
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgb(72,118,238)",
                  borderWidth: "3px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#2e2e2e",
                // fontWeight: "bold",
                "&.Mui-focused": {
                  color: "blue",
                  fontWeight: "bold",
                },
              },
            },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              sx={{
                color: "rgb(51,59,77)", // Unchecked color
                "&.Mui-checked": {
                  color: "blue", // Checked color
                },
              }}
            />
          }
          label={
            <Typography variant="caption" my={3}>
              Remember Me
            </Typography>
          }
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            textTransform: " capitalize",
            borderRadius: "0.5em",
          }}
        >
          Sign In
        </Button>
        <Typography
          variant="subtitle2"
          display={"flex"}
          justifyContent={"center"}
          my={2}
        >
          {`Don't  have an account?`}
          <Link>
            {" "}
            <Typography variant="subtitle2" color="white" fontWeight={500}>
              Sign Up
            </Typography>
          </Link>
        </Typography>
        <div className=" flex flex-row justify-center items-center gap-2 my-4">
          <hr className=" w-72  border-none h-[0.4px] bg-[rgb(51,59,77)] " />
          <Typography variant="body2">or</Typography>
          <hr className=" w-72   border-none h-[0.4px] bg-[rgb(51,59,77)]" />
        </div>
        <Box display={"flex"} flexDirection={"column"} gap={"1em"}>
          <Button
            sx={{
              bgcolor: "rgb(11,14,20)",
              color: "white ",
              border: " 1px solid rgb(51,59,77)",
              borderRadius: "0.5em",
              textTransform: "capitalize",
            }}
            fullWidth
            variant="contained"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="23"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>{" "}
            Sign in with Google
          </Button>
          <Button
            sx={{
              bgcolor: "rgb(11,14,20)",
              color: "white ",
              border: " 1px solid rgb(51,59,77)",
              borderRadius: "0.5em",
              textTransform: "capitalize",
            }}
            fullWidth
            variant="contained"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="27"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
            Sign in with Facebook
          </Button>
        </Box>
      </Box>
    
    </>
  );
};

export default SignIn;
