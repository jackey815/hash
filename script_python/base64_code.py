#-*-coding:utf-8-*-

import base64
import sys

def main():
    clear_text = sys.argv[2]
    if (sys.argv[1] == "enbase64"):
        print(str(base64.b64encode(clear_text.encode("utf-8")),'utf-8'))
    elif (sys.argv[1] == "enbase32"):
        print(str(base64.b32encode(clear_text.encode("utf-8")),'utf-8'))
    elif (sys.argv[1] == "enbase16"):
        print(str(base64.b16encode(clear_text.encode("utf-8")),'utf-8'))
    elif (sys.argv[1] == "debase64"):
        print(str(base64.b64decode(clear_text.encode("utf-8")),'utf-8'))
    elif (sys.argv[1] == "debase32"):
        print(str(base64.b32decode(clear_text.encode("utf-8")),'utf-8'))
    elif(sys.argv[1] == "debase16"):
        print(str(base64.b16decode(clear_text.encode("utf-8")),'utf-8'))

if __name__ == "__main__":
    main()