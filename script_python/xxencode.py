#!/usr/bin/env python
# *-* coding: utf-8 *-*

import sys

dictory = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

def xxdecode(code):
    length = (ord(code[0:1])-32)/4 *3 
    i = 1
    result = ""
    while(i<len(code)):
        xx = code[i:i+4]
        #print xx
        xxcode = ""
        for j in xx:
            yy = bin(dictory.find(j)).replace('0b','')
            if len(yy) < 6:
                    charge = 6 - len(yy)
                    yy = "0"*charge + yy
            xxcode += yy
        xxcode = "0b" + xxcode
        xxcode = hex(int(xxcode,2)).replace('0x','')
        result += bytes.fromhex(xxcode).decode('utf-8')
        i = i+4
    return result
    

def main():
    code = sys.argv[1]
    print(xxdecode(code))

if __name__ == "__main__":
    main()