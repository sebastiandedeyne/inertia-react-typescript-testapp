import React from "react";
import { usePageProps } from "inertia-react";

export default function Index() {
    const { name } = usePageProps();

    return <div>Hello, {name}!</div>;
}
