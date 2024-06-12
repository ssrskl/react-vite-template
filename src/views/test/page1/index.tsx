import {useTest} from "@/views/test/actions";
import {Button} from "antd";


export const TestPageOne = () => {

    const {data} = useTest();
    return <div className={"flex flex-col justify-center items-center min-h-dvh"}>
        <h1>Test Page One</h1>
        <div>{data?.data.msg}</div>
        <Button type="primary">Primary Button</Button>
    </div>
}