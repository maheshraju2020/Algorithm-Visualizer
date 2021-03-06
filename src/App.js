import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavbarComponent } from "./Components/NavbarComponent";
import HomePage from "./Pages/HomePage";
import { About } from "./Pages/About";
import SortingPage from "./Pages/SortingPage";
import { SortingAlgoSelector } from "./AlgoSelector/SortingAlgoSelector";
import { TreeAlgoSelector } from "./AlgoSelector/TreeAlgoSelector";
import { Helmet } from "react-helmet";
import TreePage from "./Pages/TreePage";

function App() {
    return (
        <BrowserRouter>
            <Helmet>
                <title>Algorithm Visualizer</title>
            </Helmet>
            <div className="App">
                <NavbarComponent />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route
                        path="/sorting-algorithms"
                        exact
                        component={SortingPage}
                    />
                    <Route
                        path="/selection-sort"
                        exact
                        component={SortingAlgoSelector}
                    />
                    <Route
                        path="/insertion-sort"
                        exact
                        component={SortingAlgoSelector}
                    />
                    <Route
                        path="/bubble-sort"
                        exact
                        component={SortingAlgoSelector}
                    />
                    <Route
                        path="/merge-sort"
                        exact
                        component={SortingAlgoSelector}
                    />
                    <Route path="/tree-algorithms" exact component={TreePage} />
                    <Route
                        path="/pre-order"
                        exact
                        component={TreeAlgoSelector}
                    />
                    <Route
                        path="/in-order"
                        exact
                        component={TreeAlgoSelector}
                    />
                    <Route
                        path="/post-order"
                        exact
                        component={TreeAlgoSelector}
                    />
                    <Route
                        path="/level-order"
                        exact
                        component={TreeAlgoSelector}
                    />
                    <Route path="/about" exact component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
