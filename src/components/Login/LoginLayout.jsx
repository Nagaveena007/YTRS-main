import { Link } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {
  Card,
  Stack,
  
  Container,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";

import { Facebook as FacebookIcon } from "../icons/facebook";
import { Google as GoogleIcon } from "../icons/google";
import AuthLayout from "./AuthLayout";
import { useFormik } from "formik";
import Page from "./Page";
import Login from "./Login";
import AuthSocial from "./AuthSocial";
import * as Yup from "yup";

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 600,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 600,
  margin: "auto",
  display: "flex",
  minHeight: "90vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(0, 0),
}));

// ----------------------------------------------------------------------

export default function LoginLayout() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      router.push("/");
    },
  });
  return (
    <Container maxWidth="sm">
      <ContentStyle>
        <Stack sx={{ mb: 3 }} className="ml-2">
          <Typography variant="h4" gutterBottom>
            Sign in to Youtube Recipe Store
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Enter your details below.
          </Typography>
        </Stack>
        {/*   <AuthSocial /> */}
        <Grid container spacing={3} className="">
          <Grid item xs={12} md={6}>
            <Button
              color="info"
              fullWidth
              startIcon={<FacebookIcon />}
              onClick={formik.handleSubmit}
              size="large"
              variant="contained"
            >
              Login with Facebook
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              color="error"
              startIcon={<GoogleIcon />}
              onClick={formik.handleSubmit}
              size="large"
              variant="contained"
            >
              Login with Google
            </Button>
          </Grid>
        </Grid>
        <Box
          className="mb-2"
          sx={{
            pb: 1,
            pt: 3,
          }}
        >
          <Typography align="center" color="textSecondary" variant="body1">
            or login with email address
          </Typography>
        </Box>
        <Login />
        <Typography
          color="textSecondary"
          variant="body2"
          style={{}}
          className="mt-3 justify-content-center"
        >
          Don&apos;t have an account?
          <Link to={"/register"}>
            <span> Sign Up</span>
          </Link>
        </Typography>
      </ContentStyle>
    </Container>
  );
}
