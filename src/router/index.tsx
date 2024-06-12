import {createBrowserRouter} from "react-router-dom";
import {TestPageOne} from "@/views/test/page1";

const router = createBrowserRouter([
    {
        path: "/test1",
        element: <TestPageOne/>
    }
]);

export default router