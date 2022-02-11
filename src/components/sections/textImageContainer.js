import React from "react"
import Button from "../../layout/buttons"

function TextImageContainer({
  t,
  image,
  textPortion,
  textPortion2,
  className,
  image2,
  button,
}) {
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

      {textPortion2 && (
        <div
          class="text-side bg-red"
          dangerouslySetInnerHTML={{ __html: t(textPortion2) }}
        />
      )}

      {textPortion && (
        <div
          class="text-side"
          dangerouslySetInnerHTML={{ __html: t(textPortion) }}
        />
      )}

      {button && <Button buttonText={button} />}
    </div>
  )
}
export default TextImageContainer
