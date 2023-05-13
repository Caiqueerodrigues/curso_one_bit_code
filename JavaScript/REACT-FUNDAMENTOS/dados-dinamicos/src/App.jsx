import { Status } from "./Components/Status";
import SubTitle from "./Components/SubTitle";
import Title from "./Components/Title";
import Styles from "./Styles/App.module.css"

export default function App() {
  return (
    <div 
      className={Styles.app}
    >
      <Title />
      <SubTitle />
      <Status />
    </div>
  )
}

