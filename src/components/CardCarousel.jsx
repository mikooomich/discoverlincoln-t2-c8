import React from 'react'

/**
 * title: title of carousel
 * scrollable: false for static, else will be a scrollable list
 * alignTitle: aka "align-self:". Specify the alignment fof the title according to 
 * margin: aka "margin:". Default is 0px
 * 
 * THIS IS A ul, all children should be li
 * @param {*} param0 
 * @returns 
 */
export default function CardCarousel({
        title,
        scrollable = true,
        alignTitle,
        margin = "0px",
        children,
}) {


        // handle theme, variants from props

        if (!scrollable) {
                scrollable = "hidden";
        }
        else {
                scrollable = "scroll";
        }



        return (
                <>
                        <div className='cardCarousel'>
                                <h3 className='carouselTitle'>{title}</h3>
                                <ul >
                                        {children}
                                </ul>
                        </div>


                        <style jsx>
                                {`

			.carouselTitle {
				align-self: ${alignTitle};
			}

                        .cardCarousel {
                                margin: ${margin};
                        }

                        ul {
				display: flex;
				overflow-x: ${scrollable};
			}


                        h3 {
				font-size: var(--font-size-header-S);
                                font-family: var(--font-calps)
			}

                        {/* For mobile */}
                        @media screen and (max-width:500px) {
                                ul {
                                        display: flex;
                                        flex-direction: column;
                                        overflow-y:scroll;
                                        max-height: 800px;
                                }
                        }
                                
			`}</style>
                </>
        )
}
