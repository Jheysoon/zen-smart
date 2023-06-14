import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const BASE_URL = "http://localhost/api/v1";

function App() {
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const response = await fetch(BASE_URL + "/getCount", {
      method: "GET",
    });
    const jsonData = await response.json();

    setCount(jsonData.count);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async () => {
    await fetch(BASE_URL + "/saveClick", {
      method: "POST",
    });
    //const jsonData = await response.json();

    setCount((count) => count + 1);

    //setCount(jsonData.count)
  };

  return (
    <Container sx={{ width: 200, padding: 2 }}>
      <Card sx={{ border: "1px solid #355bf9", marginBottom: 1 }}>
        <CardContent>
          <Typography style={{ textAlign: "center" }}>{count}</Typography>
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
