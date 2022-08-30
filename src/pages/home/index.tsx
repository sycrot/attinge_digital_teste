import { AdministrativePanel } from "../../components/administrative_panel"
import { Apps } from "../../components/apps"
import { Board } from "../../components/board"
import { Footer } from "../../components/footer"
import Header from "../../components/header"
import { Products } from "../../components/products"
import * as C from './styles'

export const Home = () => (
    <div>
      <Header />

      <Board />

      <Products />

      <Apps />

      <AdministrativePanel />

      <Footer />
    </div>
)

