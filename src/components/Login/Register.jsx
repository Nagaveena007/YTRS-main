import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Card, Container, Typography } from "@mui/material";
import RegisterForm from "../Login/RegisterForm";
import AuthSocial from "../Login/AuthSocial";

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
  borderBlockColor: "grey",
  /*  padding: theme.spacing(0, 0), */
}));

const Register = () => {
  return (
    <>
      <ContentStyle>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" gutterBottom>
            Create a new account
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Use your email to create a new account
          </Typography>
        </Box>
        <AuthSocial />
        <RegisterForm />
        <Typography
          variant="subtitle2"
          color="textSecondary"
          sx={{
            mt: 3,
            textAlign: "center",
          }}
        >
          Already have an account?
          <Link to="/login"> Login</Link>
        </Typography>
      </ContentStyle>
    </>
  );
};
export default Register;
