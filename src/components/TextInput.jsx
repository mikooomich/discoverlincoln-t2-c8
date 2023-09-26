import React from 'react'

export default function TextInput({
        textColor = "var(--color-font-secondary)",
 fontFamily = "var(--font-roboto)",
 padding = "var(--padding-input-default)",
 className = "", 
 type, 
 placeholder,
 width,
 children
}) {
	return (
		<>
		
                <input className={className} type={type} placeholder={placeholder}></input>

		<style jsx>
			{`
			input {
				padding: ${padding};
				color: ${textColor};
				font-family: ${fontFamily};
                                margin: 10px 0px;
                                width: ${width};
			}



			{/* style classes for various use cases */}
			
                        .loginInput { 
                                display: block;
                                box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.194);
                                border: var(--border-grey-thin);

                                min-width: 400px;
                                line-height: 25px;
                                padding: var(--padding-btn-default);
                                font-family: var(--font-calps);
                                font-size: var(--font-size-body-L);
                        }

                        .checkoutInput {
                                padding: var(--padding-btn-default);
                                border: var(--border-grey-thin);
                                width:100%;
                                margin-right: 50px;
                        }

                        .search-input{
                                width: 300px;
                                height: 40px;
                        }


                        .email-input{
                                display: inline-flex;
                                padding: 2px 30px 2px 8px;
                                align-items: center;
                        }

		`}</style>
		</>
	)
}
