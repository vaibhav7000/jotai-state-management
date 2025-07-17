import { useAtom, useAtomValue } from "jotai"
import { userIdAtom, usernameAtom } from "./store"

export default function UserInfo() {
    const [id, setId] = useAtom(userIdAtom);
    const username = useAtomValue(usernameAtom);

    return (
        <div>
            <div>
                {id}
            </div>

            <button onClick={() => {
                setId((id) => id + 1);
            }}>
                Change user id
            </button>

            <div>{username.name}</div>
        </div>
    )
}