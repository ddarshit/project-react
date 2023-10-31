import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MDBBtn } from 'mdb-react-ui-kit';


const About = () => {
  const [showBox, setShowBox] = useState(false);

  const fadeInAnimation = useSpring({
    opacity: showBox ? 1 : 0, // Set opacity based on showBox state
    from: { opacity: 0 }, // Initial opacity when showBox is false
  });

  return (
    <div>
      <MDBBtn className='me-1 mx-5 mt-5' color='success' onClick={() => setShowBox(!showBox)}>
      Toggle Box
      </MDBBtn>

      <animated.div
        style={{
          ...fadeInAnimation,
          width: 100,
          height: 100,
          backgroundColor: 'darksalmon',
          margin: '20px',
        }}
      >
        {/* Your content inside the animated box */}
        {showBox && <p>This box fades in and out!</p>}
      </animated.div>
    </div>
  );
};

export default About;
