import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import TodoList from "./pages/TodoList"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<TodoList />} />
                <Route path={"/detail/:id"} element={<Detail />} />
            </Routes>
        </BrowserRouter>

    );
}
export default Router;