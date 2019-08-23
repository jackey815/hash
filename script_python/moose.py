#-*-coding:utf-8-*-

import sys
Keys = 'abcdefghijklmnopqrstuvwxyz0123456789'
Values = ['.-','-...','-.-.','-..','.','..-.','--.','....',
          '..','.---','-.-','.-..','--','-.','---','.--.',
          '--.-','.-.','...','-', '..-','...-','.--','-..-',
          '-.--','--..','-----','.----','..---','...--',
          '....-','.....','-....','--...','---..','----.']
CODE = dict(zip(Keys.upper(), Values))

def Decode(msg):
    Decode_value = CODE.keys()
    Decode_key = CODE.values()
    Decode_dict = dict(zip(Decode_key,Decode_value))
    msg1 = msg.split()
    text = []
    for str in msg1:
        if str in Decode_dict.keys():
            text.append(Decode_dict[str])
    return text

def main():
    text = sys.argv[1]
    print(''.join(Decode(text)))

if __name__ == "__main__":
    main()
