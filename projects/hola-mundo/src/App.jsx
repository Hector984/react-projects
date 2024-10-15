import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export default function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran"/>
            <TwitterFollowCard userName="elonmusk" name="Elon Musk"/>
        </section>
    )
}