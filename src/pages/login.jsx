import DefaultButton from "@/components/DefaultButton";
import React, { useEffect} from "react";

import Toast from "@/components/Toast";
import TextInput from "@/components/TextInput";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Login() {

  useEffect(() => {
    async function testToken(){
      if (localStorage.getItem("jwt")) {
        window.location.href = "/profile";
  
        try{
          await getUserData()
          window.location.href = "/profile";
        } catch(err){
          localStorage.removeItem("jwt")
        }
      }
    }

    testToken()
  }, []);

  async function getUserData() {
		const jwt = localStorage.getItem("jwt")

		const response = await fetch("https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/users/me?populate=*", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${jwt}`,
			}
		})

		const data = await response.json()
		console.log(data)
	}

  async function register(e){
    e.preventDefault()
    console.log(e)

    const email = e.target[0].value
    const username = e.target[1].value
    const password = e.target[2].value
    const passwordConfirmation = e.target[3].value

    if (password.length < 6) {
      alert("Password must be min. 6 characters.");
    } else if (passwordConfirmation !== password) {
      alert("Password check does not match.");
    } else {
      await registerUser(email, username, password);

    }
    console.log("Registered:", email, password);
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
      window.location.href = "/profile";
    } catch (err) {
      console.log(err);
      alert("There was an error with your registration.");
    }
  }

  function login(e){
    e.preventDefault()
    console.log(e)

    const username = e.target[0].value
    const password = e.target[1].value

    loginUser(username, password)
  }

  async function loginUser(username, password) {
		try{
      const response = await fetch("https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: username,
          password: password,
        }),
      })
      const data = await response.json()

      localStorage.setItem("jwt", data.jwt)
      window.location.href = "/profile";
    }catch(err){
      console.log(err)
      alert("There was an error with your login.")
    }
	}

  return (
    <>
      <style jsx>
        {`
          #mainContent {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: -200px;
             {
              /* hax: margin Removes space taken up by toastBox. 
                        maybe limit to one toast or fixed toast box size...?*/
            }
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
          }
        `}
      </style>

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
            <DefaultButton className="signBtn">
              Sign in
            </DefaultButton>
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
        <Toast bgColor="err" text="Incorrect username or password"></Toast>
        <Toast bgColor="success" text="Login Sucess!"></Toast>
        <Toast
          bgColor="err"
          text="Something very unusually long that takes up way to much space so that this is multi-lined."
        ></Toast>

        {/* Mobile toast example */}
        <Toast
          clasName="toast toastMobile"
          bgColor="err"
          text="This is an example of a mobile toast."
        ></Toast>
      </div>
    </>
  );
}
