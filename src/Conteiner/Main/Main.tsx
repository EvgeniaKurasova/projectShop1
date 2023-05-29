import { Container } from "@mui/material"
import Home from "pages/Home/Home"

type Props = {}


const Main = (props: Props) => {
  return (
    <Container sx={{padding: "40px 0px"}}>
    <Home/>
    </Container>
  )
}

export default Main