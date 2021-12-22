import { Grid } from "../components/Grid";
import { Header } from "../components/Header";
import { Billboard } from "../components/Billboard";
import { IntroHome } from "../components/IntroHome";
import { Footer } from "../components/Footer";

export function Home(){
    return(
        <div>
            <Header />
            <IntroHome />
            <Billboard />
            <Grid />
            <Footer />
        </div>
    )
} 