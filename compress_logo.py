from PIL import Image

img = Image.open("images/logo/neurosleep-logo.png")

img.thumbnail((500,500))

img.save(
    "images/logo/neurosleep-logo.webp",
    "WEBP",
    quality=85
)

print("done")