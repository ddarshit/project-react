import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, DecNumber, Change_bg, Reset_bg } from "./Action/Index";
import { TexT, Removetext } from "./Action/Index";

export default function Home() {
  // const myState = useSelector((state) => state.ChangeNumber);
  // const myName = useSelector((state) => state.Text);
  let viewBg = useSelector((state) => state.BgChanger);
  const dispatch = useDispatch();

  return (
    <>
      {/* <MDBCarousel showControls dealy={3000}> */}
      {/* <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        /> */}
      {/* </MDBCarousel> */}

      {/* <div className="mx-5 mt-5">
        <button onClick={() => dispatch(IncNumber())}>+</button>
        <h2>{myState}</h2>
        <button onClick={() => dispatch(DecNumber())}>-</button>
      </div>
        <button onClick={() => dispatch(TexT())} className="mx-5 mt-5">Welcome</button>
        <button onClick={() => dispatch(Removetext())} className="mx-5 mt-5">Chal nikl</button> */}
      {/* <h1>{myName}</h1> */}

        <div style={{ height: 700, backgroundColor: viewBg.color }} >
          <MDBBtn
            onClick={() => dispatch(Change_bg())}
            className="mx-5 mt-5"
            rounded
          >
            change color
          </MDBBtn>
          <MDBBtn
            onClick={() => dispatch(Reset_bg())}
            color="danger"
            className=""
            rounded
          >
            reset color
          </MDBBtn>
        </div>
    </>
  );
}
