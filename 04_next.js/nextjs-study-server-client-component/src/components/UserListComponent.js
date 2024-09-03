import database from "@/lib/database"

export default async function UserListComponent() {
    const users = await database.getUsers()
    return <div>
        <h1>Users</h1>
        <ul>
            {
                users.map(u => <li>{u.id}</li>)
            }
        </ul>
    </div>
}
