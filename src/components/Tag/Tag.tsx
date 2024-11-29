import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

interface TagProps {
  title?: string;
  desc?: string;
  type?: string;
  year?: number;
  width: string;
}

//TODO: Add real year and description

export default function Tag({ title, desc, type, width, year }: TagProps) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Playwrite GB S"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: width,
          backgroundColor: "white",
          textAlign: "center",
          height: "50px",
          borderRadius: "5px",
          marginTop: "8px",
        }}
      >
        <Typography
          fontFamily={"Roboto"}
          variant='h4'
        >{`${title} `}</Typography>
        {/* <Typography fontFamily={"Roboto"} variant='h4'>
          by Shannon Ilg
        </Typography> */}
        {/* <Typography variant='h4'>{"TODO: Add description"}</Typography> */}
      </div>
    </ThemeProvider>
  );
}
