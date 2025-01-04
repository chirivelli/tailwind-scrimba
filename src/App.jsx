import './App.css'

function App() {
    return (
        <main className={'h-screen'}> {/*MAIN has a height of 100vh*/}

            <section className={'bg-red-400 w-72 h-20'}>
                Fixed Units
            </section>

            {/*CHALLENGE 1: Make this section 100% of the viewport height*/}
            <section className={'bg-blue-400 h-screen'}>
                Percentage Units
            </section>

            {/*CHALLENGE 2: Make this section 1/3 height and*/}
            {/*1/2 width of the parent container's*/}
            <section className={'bg-green-400 h-1/3 w-1/2'}>
                Viewport Units
            </section>

            <div>
                <button className={'px-4 py-1 bg-blue-400 rounded'}>Button</button>
            </div>
        </main>
    )
}

export default App
