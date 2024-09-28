import React, {CSSProperties} from "react";

interface BYKProps {
    styles?: {[key: string]: CSSProperties};
}

const BYK: React.FC<BYKProps> = ({ styles }) => {
    return(
        <section>
            <div style={styles?.introduction} className="introduction">
                <h1 style={styles?.introductionh1}>Build Your Own Kitchen</h1>
                <p style={styles?.introductionp}>Hello My name is nino</p>
            </div>
        </section>
    )
}


export default BYK;