namespace blur {
    //% block
    //% blurImage.shadow=screen_image_picker
    export function set_blur(blurImage: Image, blurAmount: number) {
        let tempImage = blurImage.clone()
        let y = 0
        let x = 0
        let numwidth = blurAmount
        let numheight = blurAmount
        for (let index = 0; index < Math.ceil(120 / numheight); index++) {
            if (numheight > 120 - y) {
                numheight = 120 - y
            }
            for (let index = 0; index < Math.ceil(160 / numwidth); index++) {
                if (numwidth > 160 - x) {
                    numwidth = 160 - x
                }
                tempImage.fillRect(x, y, numwidth, numheight, blurImage.getPixel(x + numwidth / 2, y + numheight / 2))
                x += blurAmount
                numwidth = blurAmount
            }
            x = 0
            y += blurAmount
            numheight = blurAmount
        }
        return tempImage
    }
}
