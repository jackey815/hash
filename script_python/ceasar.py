# -*-coding:utf-8-*-
import sys


def main():
    code = sys.argv[1]
    for i in range(-10, 11):
        new = ''
        for j in range(0, len(code)):
            new += chr(ord(code[j])+i)
        print(str(i)+" : "+new)


if __name__ == "__main__":
    main()
