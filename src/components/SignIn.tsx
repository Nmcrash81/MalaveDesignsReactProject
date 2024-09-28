import React, { useState } from "react";
import "../assets/Styles/SignIn.css";
import { AnimatePresence, motion } from "framer-motion";

interface SignInProps {
  show: boolean;
  onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ show, onClose }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const openSignUp = () => setShowSignUp(true);
  const closeSignUp = () => setShowSignUp(false);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
  ease: "linear",
  duration: 0.2,
  x: { duration: 1 }
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        ease: "linear",
        duration: 0.2,
        x: { duration: 1 }
      },
    },
  };

  const formTransition = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="modal fade"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          style={{
            display: show ? "block" : "none",
          }}
        >
          <div className="mx-auto mt-3 modal-content rounded-4 shadow">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              aria-label="Close"
              onClick={onClose}
            ></button>

            <AnimatePresence mode="wait">
              {!showSignUp ? (
                <motion.div key="signIn" {...formTransition}>
                  <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h1 className="fw-bold mx-auto mb-0 fs-2">Sign In</h1>
                  </div>
                  <div className="modal-body p-5 pt-0">
                    <form className="signInForm" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control rounded-3 fw-bold fs-5"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control rounded-3 fw-bold"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <button
                        className="w-100 mb-2 btn btn-lg rounded-3 btn-primary fw-bold"
                        type="button"
                        onClick={openSignUp}
                      >
                        Sign In
                      </button>
                      <a href="/" className="forgotPassword fw-bold">
                        Forgot Password?
                      </a>
                      <hr className="my-3" />
                      <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                      <button
                        className="biText w-100 py-2 mb-2 btn btn-outline-secondary rounded-3 fw-bold"
                        type="button"
                      >
                        <i className="bi bi-twitter me-2"></i>
                        Sign up with X
                      </button>
                      <button
                        className="biText w-100 py-2 mb-2 btn btn-outline-secondary rounded-3 fw-bold"
                        type="button"
                      >
                        <i className="bi bi-facebook me-2"></i>
                        Sign up with Facebook
                      </button>
                      <button
                        className="biText w-100 py-2 mb-2 btn btn-outline-secondary rounded-3 fw-bold"
                        type="button"
                      >
                        <i className="bi bi-github me-1 fw-bold"></i>
                        Sign up with GitHub
                      </button>
                      <p className="signUpLink border-bottom-0">
                        Don't have an account?{" "}
                        <button
                          className="signUpButton fw-bold btn btn-link p-0"
                          onClick={(e) => {
                            e.preventDefault();
                            openSignUp();
                          }}
                        >
                          Click Here
                        </button>
                      </p>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="signUp" {...formTransition}>
                  <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h1 className="fw-bold mx-auto mb-0 fs-2">Sign Up</h1>
                  </div>
                  <div className="modal-body p-5 pt-0">
                    <form className="signUpForm" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control rounded-3 fw-bold fs-5"
                          id="floatingName"
                          placeholder="Full Name"
                        />
                        <label htmlFor="floatingName">Full Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          className="phoneNumber form-control rounded-3 pb-0 fw-bold fs-5"
                          id="floatingPhone"
                          placeholder="Phone Number"
                        />
                        <label htmlFor="floatingPhone">Phone Number</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control rounded-3 fw-bold fs-5"
                          id="floatingInputSignUp"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputSignUp">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control rounded-3 fw-bold"
                          id="floatingPasswordSignUp"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordSignUp">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control rounded-3 fw-bold"
                          id="floatingPasswordConfirm"
                          placeholder="Re-enter Password"
                        />
                        <label htmlFor="floatingPasswordConfirm">
                          Re-enter Password
                        </label>
                      </div>
                      <button
                        className="w-100 mb-2 btn btn-lg rounded-3 btn-primary fw-bold"
                        type="button"
                        onClick={closeSignUp}
                      >
                        Sign Up
                      </button>
                    </form>
                    <small className="fs-6">
                      By creating an account, you agree to our{" "}
                      <a className="signUpButton fw-bold" href="/">
                        Conditions of Use
                      </a>{" "}
                      and{" "}
                      <a className="signUpButton fw-bold" href="/">
                        Privacy Notice
                      </a>
                      .
                    </small>
                    <br />
                    <small className="signUpLink2 mt-5 fs-5">
                      Already have an account?{" "}
                      <button
                        className="signUpButton fw-bold btn btn-link p-0"
                        onClick={(e) => {
                          e.preventDefault();
                          closeSignUp();
                        }}
                      >
                        Sign In
                      </button>
                    </small>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignIn;
