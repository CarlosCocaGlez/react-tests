import { useCounter, useFetch } from '../hooks';
import { Blockquote, LoadingQuote } from '../03-Examples';

export const Layout = () => {

    const { counter, increment } = useCounter();
    const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                isLoading
                    ? <LoadingQuote />
                    : <Blockquote author={ author } quote={ quote } />
            }

            <button
                className='btn btn-primary'
                disabled={ isLoading }
                onClick={ () => increment() }
            >
                Next quote
            </button>
        </>
    );
};
