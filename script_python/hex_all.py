#-*-coding:utf-8-*-

import sys

def shellcode_encode(clear_text):
    result = ""
    for i in range(0,len(clear_text),2):
        result += "\\x" + clear_text[i:i+2]
    return result 

def unicode_encode(clear_text):
    result = ""
    for i in range(0,len(clear_text),2):
        result += "&#x00" + clear_text[i:i+2] + ";"
    return result


def escape_encode(clear_text):
    result = ""
    for i in range(0,len(clear_text),2):
        result += "%u00" + clear_text[i:i+2]
    return result

def ascii_encode(clear_text):
    result = ""
    for i in range(0,len(clear_text),2):
        result += " " + str(int("0x"+clear_text[i:i+2],16))
    return result

def quoted_encode(clear_text):
    result = ""
    for i in range(0,len(clear_text),2):
        result += "=" + clear_text[i:i+2]
    return result

def ascii_decode(clear_text):
    result1=""
    result2=""
    code = clear_text.lstrip().split(" ")
    for i in code:
        result1 += chr(int(i))
        result2 += hex(int(i)).replace('0x','')
    print(result2)
    return result1

def main():
    clear_text = sys.argv[2]
    if (sys.argv[1] == "shellcode"):
        print(shellcode_encode(clear_text))
    elif (sys.argv[1] == "ascii"):
        print(ascii_encode(clear_text))
    elif (sys.argv[1] == "quoted"):
        print(quoted_encode(clear_text))
    elif (sys.argv[1] == "unicode"):
        print(unicode_encode(clear_text))
    elif (sys.argv[1] == "escape"):
        print(escape_encode(clear_text))
    elif(sys.argv[1] == "ascii_de"):
        try:
            print(ascii_decode(clear_text))
        except:
            print("error")

if __name__ == "__main__":
    main()
