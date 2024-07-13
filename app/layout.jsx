import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: "Discover & share Ai prompt",
    
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div classname="main">
                <div classname="gradient"/>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout