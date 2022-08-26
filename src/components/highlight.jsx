import "./style.css"
export const Highlight=()=>{
    return(
     <div className="highlight-main">
          <h2 className="highlight-head">Highlights</h2>
          <div className="main">
            <div className="highlight">
                <img className="highlight-image" src="https://tse2.mm.bing.net/th?id=OIP.bzKZMFE09fh-sebitAbDzAHaE5&pid=Api&P=0" alt="bicycle" />
                <div className="head-pos">
                 <div className="highlight-flex">
                    <p>Day 1 of BMX</p>
                    <p>5:12</p>
                 </div>
                 <div className="highlight-flex1">
                    <p className="sub-high">Heats</p>
                    <p className="sub-high">Highlights</p>
                 </div>
                </div>
            </div>
            <div className="highlight">
                <img className="highlight-image" src="https://tse1.mm.bing.net/th?id=OIP.gA6sMS0g0xun8Lx_TvEiNgHaFj&pid=Api&P=0" alt="bicycle" />
                <div className="head-pos">
                 <div className="highlight-flex">
                    <p>Day 2 of BMX</p>
                    <p>5:12</p>
                 </div>
                 <div className="highlight-flex1">
                    <p className="sub-high">Heats</p>
                    <p className="sub-high">Mixed</p>
                 </div>
                </div>
            </div>
            <div className="highlight">
                <img className="highlight-image" src="https://tse2.mm.bing.net/th?id=OIP.3RU_Vdhg0gh5f2iP5wYopQHaE7&pid=Api&P=0" alt="bicycle" />
                <div className="head-pos">
                 <div className="highlight-flex">
                    <p>Day 3 of BMX</p>
                    <p>5:12</p>
                 </div>
                 <div className="highlight-flex1">
                    <p className="sub-high">Semi's</p>
                    <p className="sub-high">Mixed</p>
                 </div>
                </div>
            </div>
          </div>
     </div>
    )
}