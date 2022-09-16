import "./App.css";

import Footer from "./components/Footer";
import Card from "./components/Card";
import Chart from "./components/Chart";
import Header from "./components/Header";
import Table from "./components/Table";
const App = () => {
    return (
        <main>
            <Header />
            {/*  <Employees /> */}
            <Card />
            <Table />
            <Chart />
            <Card />
            <Card />
            <Card />
            <Footer />
        </main>
    );
};

export default App;
