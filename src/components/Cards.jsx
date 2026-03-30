function Cards(props) {
      


    return (
       <>
   
        <div className="card">
            <div className="top">
                <img src={props.img} alt="" />
                <button>Save <i class="ri-bookmark-line"></i></button>
                </div>
                {/* mid start  */}
                <div className="mid">
               <div className="suggest">
                 <h6>{props.h6} </h6>
                <p>{props.p}</p>
               </div>
                <h3>{props.h3}</h3>
                <div className="mid-btn">
                    <button>{props.button1}</button>
                    <button>{props.button2}</button>
                </div>
            </div>

                 {/* bottom start */}
            <div className="bottom">

                <div className="left-bottom">
                    <h4>{props.h4}</h4>
                    <p>{props.p2}</p>
                </div>
                <div className="right-bottom">
                    <button>Apply Now</button>
                </div>
                </div>


        </div>
  
        </>

    )

}
export default Cards