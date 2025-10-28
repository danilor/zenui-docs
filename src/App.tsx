import './App.css';
import HeaderComponent from './components/HeaderComponent.tsx';
import FooterComponent from './components/FooterComponent.tsx';
import IntroComponent from './components/IntroComponent.tsx';
import FeaturesComponent from './components/FeaturesComponent.tsx';
import ElementsComponent from './components/ElementsComponent.tsx';
import InstallComponent from './components/InstallComponent.tsx';
import CodeExpoExample from "./components/CodeExpoExample.tsx";
import IntroInstallationComponent from "./components/IntroInstallationComponent.tsx";

function App() {
    return (
        <>
            <HeaderComponent/>
            <IntroComponent/>

            <FeaturesComponent/>
            {/*<PhoneExample/>*/}
            <CodeExpoExample />
            <IntroInstallationComponent />
            <InstallComponent/>
            <ElementsComponent/>
            <FooterComponent/>
        </>
    );
}

export default App;
