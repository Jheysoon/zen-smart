import { useEffect } from "react";
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

function App() {
  const fetchData = async () => {};

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async () => {};

  return (
    <Container sx={{ width: 200, padding: 2 }}>
      <Card sx={{ border: "1px solid #355bf9", marginBottom: 1 }}>
        <CardContent>
          <Typography style={{ textAlign: "center" }}>0</Typography>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#096bec",
          "&:hover": { backgroundColor: "#1742e4" },
        }}
        onClick={handleClick}
      >
        Click Me!
      </Button>
    </Container>
  );
}

export default App;
