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
                    ` `
                }
            })
        
        const data = await results.json()

        console.log(data)
    }


    return (<div>Results</div>)
}

export default UserResults