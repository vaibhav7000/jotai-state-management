import { textAtom } from "./store"
import { usernameAtom } from "./store"
import { useAtom, useAtomValue } from "jotai"

export default function Dashboard() {
    const username = useAtomValue(usernameAtom);
    return (
        <div>
            {username.name}
        </div>
    )
}