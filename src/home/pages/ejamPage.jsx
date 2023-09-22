import { EjamLayout } from "../layout/EjamLayout"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { HomePage } from "../components/homePage"


export const EjamPage = () => {
    return (
       <EjamLayout>
        <Header />
        <HomePage />
        <Footer />
       </EjamLayout>
    )
}
