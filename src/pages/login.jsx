import DefaultButton from "@/components/DefaultButton";
import React, { useState, useEffect } from "react";

import Toast from "@/components/Toast";
import TextInput from "@/components/TextInput";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Login() {
  useEffect(() => {
    async function testToken() {
      if (localStorage.getItem("jwt")) {
        window.location.href = "/profile";

        try {
          await getUserData();
          window.location.href = "/profile";
        } catch (err) {
          localStorage.removeItem("jwt");
        }
      }
    }

    testToken();
  }, []);

  async function getUserData() {
    const jwt = localStorage.getItem("jwt");

    const response = await fetch(
      "https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/users/me?populate=*",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  async function register(e) {
    e.preventDefault();
    console.log(e);

    const email = e.target[0].value;
    const username = e.target[1].value;
    const password = e.target[2].value;
    const passwordConfirmation = e.target[3].value;

    if (password.length < 6) {
      setHideToastErr2(false);
      console.log("password too short")
    } if (passwordConfirmation !== password) {
      console.log("passwords dont match")
      setHideToastErr3(false);

    } if (password.length >= 6 && passwordConfirmation === password) {
      await registerUser(email, username, password);
      console.log("Registered:", email, password);
    }
    
  }

  async function registerUser(email, username, password) {
    try {
      const response = await fetch(
        "https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            username: username,
            password: password,
          }),
        }
      );
      const data = await response.json();

      localStorage.setItem("jwt", data.jwt);
      setHideToastSuccess(false);
      console.log("registered")
      window.location.href = "/profile";
    } catch (err) {
      console.log(err);
      setHideToastErr4(false);
      console.log("Your request took too long to process and something has gone wrong.")
    }
  }

  function login(e) {
    e.preventDefault();
    console.log(e);

    const username = e.target[0].value;
    const password = e.target[1].value;

    loginUser(username, password);
  }

  async function loginUser(username, password) {
    try {
      const response = await fetch(
        "https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/auth/local",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: username,
            password: password,
          }),
        }
      );
      const data = await response.json();

      localStorage.setItem("jwt", data.jwt);
      window.location.href = "/profile";
    } catch (err) {
      console.log(err);
      setHideToastErr4(false);
      console.log("Your request took too long to process and something has gone wrong.")
    }
  }

  const [hideToastSuccess, setHideToastSuccess] = useState(true);
  const [hideToastErr1, setHideToastErr1] = useState(true);
  const [hideToastErr2, setHideToastErr2] = useState(true);
  const [hideToastErr3, setHideToastErr3] = useState(true);
  const [hideToastErr4, setHideToastErr4] = useState(true);

  useEffect(() => {
    async function hideToast() {
      console.log("hide toast success: ", hideToastSuccess)
      if (!hideToastSuccess) {
        setTimeout(() => {
          setHideToastSuccess(true);
        }, 5000);
      }
    }

    hideToast();
  }, [hideToastSuccess]);

  useEffect(() => {
    async function hideToast() {
      console.log("error 1: ", hideToastErr1)
      if (!hideToastErr1) {
        setTimeout(() => {
          setHideToastErr1(true);
        }, 5000);
      }
    }

    hideToast();
  }, [hideToastErr1]);

  useEffect(() => {
    async function hideToast() {
      console.log("error 1: ", hideToastErr2)
      if (!hideToastErr2) {
        setTimeout(() => {
          setHideToastErr2(true);
        }, 5000);
      }
    }

    hideToast();
  }, [hideToastErr2]);

  useEffect(() => {
    async function hideToast() {
      console.log("error 1: ", hideToastErr3)
      if (!hideToastErr3) {
        setTimeout(() => {
          setHideToastErr3(true);
        }, 5000);
      }
    }

    hideToast();
  }, [hideToastErr3]);

  useEffect(() => {
    async function hideToast() {
      console.log("error 1: ", hideToastErr4)
      if (!hideToastErr4) {
        setTimeout(() => {
          setHideToastErr3(true);
        }, 5000);
      }
    }
    hideToast();
  }, [hideToastErr4]);

  

  return (
    <>
      <>
        <Section marginBottom="100px;">
          <div id="mainContent">
            <form className="logindiv" onSubmit={login}>
              <h2 className="loginTitle">LOG IN</h2>
              <TextInput
                className="loginInput"
                placeholder="Enter email address"
              ></TextInput>
              <TextInput
                className="loginInput"
                placeholder="Enter password"
                type="password"
              ></TextInput>
              <DefaultButton className="signBtn">Sign in</DefaultButton>
              <p className="tooltip">Dont have an account? Sign up below!</p>
            </form>

            <form className="logindiv" onSubmit={register} id="makeAccountDiv">
              <h2 className="loginTitle">CREATE ACCOUNT</h2>
              <TextInput
                className="loginInput"
                placeholder="Enter email address"
                id="emailInputRegister"
              ></TextInput>
              <TextInput
                className="loginInput"
                placeholder="Enter username"
                id="usernameInputRegister"
              ></TextInput>
              <TextInput
                className="loginInput"
                placeholder="Enter password"
                id="passwordInputRegister"
                type="password"
              ></TextInput>
              <TextInput
                className="loginInput"
                placeholder="Confirm password"
                id="passwordConfirmationInput"
                type="password"
              ></TextInput>
              <DefaultButton className="signBtn">Sign up</DefaultButton>
            </form>
          </div>
        </Section>

        <div className="toastBox">
          <Toast
            bgColor="err"
            text="Incorrect username or password"
            hide={hideToastErr1}
          ></Toast>
          <Toast
            bgColor="err"
            text="Your password must be 6 characters."
            hide={hideToastErr2}
          ></Toast>
          <Toast
            bgColor="err"
            text="Your password check does not match."
            hide={hideToastErr3}
          ></Toast>
          <Toast
            bgColor="err"
            text="Your request took too long to process and something has gone wrong."
            hide={hideToastErr4}
          ></Toast>
          <Toast
            bgColor="success"
            text="Registeration Successful"
            hide={hideToastSuccess}
          ></Toast>
        </div>
      </>

      <style jsx>
        {`
          #mainContent {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: -50px;
             {
              /* hax: margin Removes space taken up by toastBox. 
                        maybe limit to one toast or fixed toast box size...?*/
            }
          }

          .toast {
            display: flex;
          }

          .hideToast {
            display: none;
          }

          .tooltip {
            font-family: var(--font-roboto);
            font-size: var(-font-size-body-L);
          }

          /* containers */
          .logindiv {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            width: 100%;
            align-items: center;

            padding: 40px 40px;
          }

          .logindiv * {
            margin-top: 10px;
            margin-bottom: 10px;
          }

          .loginTitle {
            font-size: var(--font-size-header-S);
            font-family: var(--font-calps);
          }

          #makeAccountDiv {
            background-color: var(--color-background-decoration);
          }

          .bot {
            position: fixed;
            bottom: 0;
          }

          /* inner elements */

          /* toasts */
          .toastBox {
            display: flex;
            align-items: center;
            flex-direction: column;
            color: white;
            align-self: flex-end;
            /* margin-top: -350px; */
            position: sticky;

            float: right;
            bottom: 0;
          }

          @media screen and (max-width: 500px) {
            .toastBox {
              width: 100%;
               {
                /* bottom: 0; */
              }
            }

            #makeAccountDiv {
              margin-bottom: 100px;
            }

            .loginTitle {
              font-size: var(--font-size-header-XS);
            }

            .hideToast {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
