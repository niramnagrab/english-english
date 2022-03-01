import React from "react"
import Button from "../../layout/buttons"

function TextImageContainer(props) {
  const {
    t,
    image,
    textPortion,
    textPortion2,
    className,
    image2,
    button,
    textPortion2Class,
  } = props
  return (
    <div class={`text-image-container ${className}`}>
      {image && (
        <div class="image-side">
          <img src={image} alt="" />
        </div>
      )}

      {image2 && (
        <div class="image-side">
          <img src={image2} alt="" />
        </div>
      )}

      {textPortion && (
        <div
          class="text-side"
          dangerouslySetInnerHTML={{ __html: t(textPortion) }}
        />
      )}

      {textPortion2 && (
        <div
          class="text-side bg-red"
          dangerouslySetInnerHTML={{ __html: t(textPortion2) }}
        />
      )}

      {props.children && (
        <div
          className={`text-side ${textPortion2Class ? textPortion2Class : ""}`}
        >
          {props.children}
        </div>
      )}
      {button && <Button buttonText={button} />}
    </div>
  )
}
export default TextImageContainer
