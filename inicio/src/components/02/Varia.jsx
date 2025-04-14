import {useState} from "react";

const Varia = () => {
    const [algo, alterAlgo] = useState(0);
    console.log(algo);

    return (
        <>
            <p style={{
                fontSize: "40px",
                backgroundColor: "white",
                color: "black"
            }}>
                Minha variavel: {algo}
            </p>
            <div>
                <button onClick={() => {
                    alterAlgo(algo+1);
                }}>
                    +
                </button>
                <button onClick={() => {
                    alterAlgo(0);
                }}>
                    Resete
                </button>
                <button onClick={() => {
                    if(algo > 0){
                        alterAlgo(algo-1);
                    }
                }}>
                    -
                </button>
            </div>
        </>
    )
}

export default Varia