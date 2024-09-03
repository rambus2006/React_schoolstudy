const sleep = ms => new Promise(r => setTimeout(r, ms));

const database = {
    getUsers: async function() {
        await sleep(2000) //2초 기다렸다가 가져오기 
        return [
            { id: "user1" },
            { id: "user2" },
            { id: "user3" }
        ]
    }
}

export default database
