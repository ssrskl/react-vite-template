import {createBrowserRouter} from "react-router-dom";
import {TestPageOne} from "@/views/test/page1";
import RootLayout from "@/layouts/RootLayout";
import { HomePage } from "@/views/Home/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "/test/page1",
                element: <TestPageOne/>,
            }
        ]
    }
]);

export default router