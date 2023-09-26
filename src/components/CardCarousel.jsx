import React from 'react'

/**
 * title: title of carousel
 * scrollable: false for static, else will be a scrollable list
 * alignTitle: aka "align-self:". Specify the alignment fof the title according to 
 * @param {*} param0 
 * @returns 
 */
export default function CardCarousel({
        title,
        scrollable = true,
        alignTitle,
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
                        <h3 className='carouselTitle'>{title}</h3>
                        <ul className='cardCarousel'>
                                {children}
                        </ul>


                        <style jsx>
                                {`

			.carouselTitle {
				align-self: ${alignTitle};
			}

                        .cardCarousel {
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
