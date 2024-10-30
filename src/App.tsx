import { Header } from './components/Header';
import { TypeZen } from './components/TypeZen';

function App() {
    return (
        <main className="relative flex flex-col px-5 font-serif sm:px-10">
            <div className="mx-auto w-full max-w-7xl">
                <Header />
                <TypeZen />
            </div>
        </main>
    );
}

export default App;
