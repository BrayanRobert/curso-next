import GlobalStyle from '../src/theme/GlobalStyle';


function MyAApp({Component, pageProps}){
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyAApp;