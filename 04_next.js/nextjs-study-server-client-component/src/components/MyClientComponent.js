"use client"

import { useState } from "react"

export default function MyClientComponent() {
    const [count, setCount] = useState(0)
    console.log("from My Cilent Component")
    return <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>click</button>
    </div>
}
