import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Servicios from './Servicios';
import Contacto from './ui/Contacto';
import Calculadora from './screen/Calcauladora'
import CalculadoraMudanza from './ui/CalculadoraMudanza';
import LoginTab from './ui/LoginTab';
import Registro from './ui/Registro';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex} 
          setSelectedIndex={setSelectedIndex} 
        />
        
        <Switch>
          <Route 
            exact 
            path="/" 
            render={props => (
            <LandingPage
            {...props}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            />
          )}
           />
          <Route exact path="/servicios" 
            render={props => (
            <Servicios
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
              />
            )} 
          />
           <Route exact path="/calculadora" 
            render={props => (
            <Calculadora
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
              />
            )} 
          />
          <Route exact path="/sobre_nosotros" component={() => <div>Sobre Nosotros</div>} />
          <Route
           exact path="/contacto" 
           render={props => (
            <Contacto
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
              />
            )} 
             />
              <Route
           exact path="/calcularMudanza" 
           render={props => (
            <CalculadoraMudanza
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
              />
            )} 
             />
             <Route
           exact path="/login" 
           render={props => (
            <LoginTab
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
              />
            )} 
             />
              <Route
           exact path="/registro" 
           render={props => (
            <Registro
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
              />
            )} 
             />
             
          <Route exact path="/reglog" component={() => <div>Ingresar/Login</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
