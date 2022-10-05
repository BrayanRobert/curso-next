import { useEffect, useState } from 'react'
import FAQScreen from '../src/screens/FAQScreeen';

export default FAQScreen;

// getSideProps() Roda a cada acesso na página

// getStaticProps() Roda somente em build time

export async function getStaticProps() {
    const FAQ_APi_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_APi_URL).then((respostaDoServidor) => {
        return respostaDoServidor.json();
    }).then((resposta) => {
        return resposta;
    })
    return {
        props: {
            faq
        },
    }
}
