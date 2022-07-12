from keras.models import load_model
import cv2
import numpy as np
import sys

filepath = sys.argv[1]

REV_CLASS_MAP = {
    0: "Crack",
    1: "Intact wall",
    2:"Spall"
}


def mapper(val):
    return REV_CLASS_MAP[val]


model = load_model("crack_detection.h5")

# prepare the image
img = cv2.imread(filepath)
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = cv2.resize(img, (227, 227))


# predict the move made
pred = model.predict(np.array([img]))
move_code = np.argmax(pred[0])
move_name = mapper(move_code)
# cv2.putText(img=img, text=move_name,org=(x + int(w/10),y + int(h/1.5)), fontFace=cv2.FONT_HERSHEY_DUPLEX, fontScale=4, color=(255,0,0), thickness=7)
cv2.putText(img, move_name, (5, 220), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 0), 2)
print("Predicted: {}".format(move_name))
cv2.imshow("frame",img)
cv2.waitKey(0)
