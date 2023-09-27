import React from "react";

/**
 * title: title of carousel
 * scrollable: false for static, else will be a scrollable list
 * alignTitle: aka "align-self:". Specify the alignment for the title according to 
 * margin: aka "margin:". Default is 0px
 * singleLineDisplay: display content on a single line. Default is false
 * 
 * THIS IS A ul, all children should be li
 * @param {*} param0
 * @returns
 */
export default function CardCarousel({
        title,
        scrollable = true,
        alignTitle,
        titleWeight,
        margin = "0px",
        singleLineDisplay = false,
        children,
}) {
        // handle theme, variants from props

        if (!scrollable) {
                scrollable = "hidden";
        } else {
                scrollable = "scroll";
        }

        if (singleLineDisplay) {
                singleLineDisplay = "single-ul";
        }
        else {
                singleLineDisplay = "single-ul multi-ul"
        }




        return (
                <>
                        <div className='cardCarousel'>
                                <h3 className='carouselTitle'>{title}</h3>
                                <ul className={singleLineDisplay}>
                                        {children}
                                </ul>
                        </div>


                        <style jsx>
                                {`

			.carouselTitle {
				align-self: ${alignTitle};

                                color: var(--color-font-primary);
                                font-family: var(--font-calps);
                                font-size: var(--font-size-header-S);
                                font-style: normal;
                                font-weight: 700;
                                line-height: normal;
			}

                        .cardCarousel {
                                display: flex;
                                flex-direction: column;
                                margin: ${margin};
                        }

                        .single-ul {
				display: flex;
                                flex-direction: row;
				overflow-x: ${scrollable};
			}


                        .multi-ul {
                                flex-wrap: wrap;
                                overflow-x: hidden;
			}


                        h3 {
				font-size: var(--font-size-header-S);
                                font-family: var(--font-calps)
			}

                        {/* For mobile vertical scrolling*/}
                        @media screen and (max-width:500px) and ${singleLineDisplay} {
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