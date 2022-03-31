import { Link } from "react-router-dom";
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
import FacebookIcon from "@material-ui/icons/Facebook";
import { useFormik } from "formik";
import Page from "./Page";
import Login from "./Login";
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
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              }
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
