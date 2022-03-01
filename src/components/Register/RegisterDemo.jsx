import { Link } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Card, Container, Typography } from "@mui/material";
// layouts
//import AuthLayout from "./AuthLayout";
// components
import Page from "../Login/Page";
import RegisterForm from "../Login/RegisterForm";
import AuthSocial from "../Login/AuthSocial";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const RegisterDemo = () => {
  return (
    <RootStyle title="Register | Minimal-UI">
      <>
        Already have an account?
        {/*    <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          to="/login"
        > */}
        Login
        {/* </Link> */}
      </>

      <SectionStyle sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          Manage the job more effectively with Minimal
        </Typography>
        <img
          alt="register"
          src="/static/illustrations/illustration_register.png"
        />
      </SectionStyle>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Get started absolutely free.
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Free forever. No credit card needed.
            </Typography>
          </Box>

          {/*  <AuthSocial /> */}

          {/*   <RegisterForm /> */}

          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 3 }}
          >
            By registering, I agree to Minimal
            {/*   <Link underline="always" color="textPrimary"> */}
            Terms of Service
            {/* </Link> */}
            and
            {/*  <Link underline="always" color="textPrimary"> */}
            Privacy Policy
            {/*  </Link> */}.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              mt: 3,
              textAlign: "center",
              display: { sm: "none" },
            }}
          >
            Already have an account?
            {/*     <Link underline="hover" to="/login" component={RouterLink}> */}
            Login
            {/*    </Link> */}
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};
export default RegisterDemo;
