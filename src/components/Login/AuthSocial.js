// material
import { Stack, Button, Divider, Typography } from "@mui/material";
// component
import Iconify from "./Iconify";

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          style={{ borderColor: "#bbb8b8" }}
        >
          <Iconify icon="eva:google-fill" color="#DF3E30" height={24} />
        </Button>

        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          style={{ borderColor: "#bbb8b8" }}
        >
          <Iconify icon="eva:facebook-fill" color="#1877F2" height={24} />
        </Button>

        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          style={{ borderColor: "#bbb8b8" }}
        >
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" height={24} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
