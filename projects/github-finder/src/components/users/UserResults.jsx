import { useEffect } from "react"


const UserResults = () => {

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const results = await fetch(
            `https://api.github.com/users`, {
                headers: {
                    Authorization: 
                    `token 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
                    `
                }
            })
        
        const data = await results.json()

        console.log(data)
    }


    return (<div>Results</div>)
}

export default UserResults